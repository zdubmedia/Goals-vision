import { useEffect, useRef } from 'react';
import { sanitize } from '../dashboard/sections/Insights';

/** A small formatted-text box: headings, bold, lists. Give it a new `key` to reload `html`. */
export function RichEditor({ html, onChange, label }: { html: string; onChange: (html: string) => void; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = sanitize(html);
    // Loaded once per mount; typing doesn't reset the box.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cmd = (command: string, value?: string) => {
    ref.current?.focus();
    document.execCommand(command, false, value);
    onChange(ref.current?.innerHTML ?? '');
  };
  const tools: [string, () => void][] = [
    ['Heading', () => cmd('formatBlock', 'h3')],
    ['Normal text', () => cmd('formatBlock', 'p')],
    ['Bold', () => cmd('bold')],
    ['• List', () => cmd('insertUnorderedList')],
    ['1. List', () => cmd('insertOrderedList')],
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-1 rounded-t-md border border-b-0 border-line bg-surface2 p-1">
        {tools.map(([name, fn]) => (
          <button
            key={name}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={fn}
            className="focus-ring rounded px-2 py-1 text-xs font-semibold text-ink2 hover:bg-surface hover:text-ink"
          >
            {name}
          </button>
        ))}
      </div>
      <div
        ref={ref}
        contentEditable
        role="textbox"
        aria-multiline="true"
        aria-label={label}
        suppressContentEditableWarning
        onInput={() => onChange(ref.current?.innerHTML ?? '')}
        className="prose-insights focus-ring min-h-[180px] rounded-b-md border border-line bg-surface px-4 py-3 text-[15px]"
      />
    </div>
  );
}
