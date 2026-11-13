// Signed tokens and password checks, using Web Crypto (works in Node and on Netlify).

const enc = new TextEncoder();

function b64url(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let s = '';
  for (const b of arr) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function randomToken(bytes = 24): string {
  return b64url(crypto.getRandomValues(new Uint8Array(bytes)));
}

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64url(await crypto.subtle.sign('HMAC', key, enc.encode(message)));
}

async function sha256(s: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(s)));
}

/** Compares two strings without leaking where they differ. */
export async function safeEqual(a: string, b: string): Promise<boolean> {
  const [x, y] = await Promise.all([sha256(a), sha256(b)]);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

const ADMIN_TTL_MS = 30 * 24 * 3600 * 1000;

export async function issueAdminToken(secret: string, now = Date.now()): Promise<string> {
  const exp = String(now + ADMIN_TTL_MS);
  return `${exp}.${await hmac(secret, `admin:${exp}`)}`;
}

export async function verifyAdminToken(secret: string, token: string | null, now = Date.now()): Promise<boolean> {
  if (!token) return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < now) return false;
  return safeEqual(sig, await hmac(secret, `admin:${exp}`));
}

/** Salted PBKDF2 hash for the optional client password: "salt.hash". */
export async function hashPassword(password: string, salt = randomToken(12)): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(salt), iterations: 100_000 }, key, 256);
  return `${salt}.${b64url(bits)}`;
}

export async function checkPassword(password: string, stored: string): Promise<boolean> {
  const [salt] = stored.split('.');
  return safeEqual(await hashPassword(password, salt), stored);
}

/** Key a client gets after entering the report password. Changes when the password or link changes. */
export async function clientAccessKey(secret: string, shareToken: string, passwordHash: string): Promise<string> {
  return hmac(secret, `client:${shareToken}:${passwordHash}`);
}

export async function sessionSecret(env: (k: string) => string | undefined): Promise<string | null> {
  const explicit = env('SESSION_SECRET');
  if (explicit) return explicit;
  const pw = env('ADMIN_PASSWORD');
  return pw ? b64url(await sha256(`pmt-dashboard-session:${pw}`)) : null;
}
