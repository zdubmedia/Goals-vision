import DOMPurify from 'dompurify';
import { fmtDateTime } from '../../lib/format';
import { Card, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function sanitize(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'a', 'br'],
    ALLOWED_ATTR: ['href'],
  });
}

export function InsightsSection({ state, hidden }: SectionProps & { hidden: boolean }) {
  return (
    <Section id="insights" title="Insights & next steps" subtitle={`From ${state.settings.agencyName}. Updated ${fmtDateTime(state.insightsUpdatedAt)}.`} hiddenForClient={hidden}>
      {state.insightsHtml.trim() ? (
        <Card>
          <div className="prose-insights max-w-3xl text-[15px]" dangerouslySetInnerHTML={{ __html: sanitize(state.insightsHtml) }} />
        </Card>
      ) : (
        <Note>No notes for this week yet.</Note>
      )}
    </Section>
  );
}
