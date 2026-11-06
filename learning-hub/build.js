#!/usr/bin/env node
// Bundles index.html + app.css + data/*.js + app.js into ONE self-contained HTML file
// (used for publishing the hub as a Claude artifact, where progress syncs and "Get feedback" asks Claude live).
// Usage: node build.js [output.html]      (default: dist/zdub-learning-hub.html)
// The output has no <!doctype>/<html>/<head>/<body> wrapper: the artifact publisher adds that.
// Pass --full to keep a normal full HTML document instead (handy for hosting anywhere as one file).
const fs = require('fs');
const path = require('path');
const root = __dirname;
const args = process.argv.slice(2);
const full = args.includes('--full');
const out = args.find(a => !a.startsWith('--')) || path.join(root, 'dist', full ? 'zdub-learning-hub-full.html' : 'zdub-learning-hub.html');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const pick = (name) => {
  const m = html.match(new RegExp(`<!--HUB:${name}-->([\\s\\S]*?)<!--/HUB:${name}-->`));
  if (!m) throw new Error(`marker HUB:${name} missing in index.html`);
  return m[1];
};
const safeScript = (s) => s.replace(/<\/script/gi, '<\\/script');
const inlineAssets = (chunk) => chunk
  .replace(/<link rel="stylesheet" href="(?!https?:)([^"]+)">/g, (_, f) => `<style>\n${fs.readFileSync(path.join(root, f), 'utf8')}\n</style>`)
  .replace(/<script src="(?!https?:)([^"]+)"><\/script>/g, (_, f) => {
    const p = path.join(root, f);
    if (!fs.existsSync(p)) { console.warn(`  skip (missing): ${f}`); return ''; }
    return `<script>\n${safeScript(fs.readFileSync(p, 'utf8'))}\n</script>`;
  });

const head = inlineAssets(pick('HEAD')).trim();
const body = inlineAssets(pick('BODY')).trim();
const result = full
  ? `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n${head}\n</head>\n<body>\n${body}\n</body>\n</html>\n`
  : `${head}\n${body}\n`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, result);
console.log(`Built ${out} (${(result.length / 1024).toFixed(0)} KB)`);
