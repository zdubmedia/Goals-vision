import { int, money } from '../../lib/format';
import { Badge, Card, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function TrackingSection({ m, hidden }: SectionProps & { hidden: boolean }) {
  if (m.tracked) {
    return (
      <Section id="tracking" title="Bookings tracked from the ads" hiddenForClient={hidden}>
        <Card>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="good" icon="check">
              Tracking is on
            </Badge>
            <p className="text-sm text-ink2">
              {int(m.tracked.count)} booking{m.tracked.count === 1 ? '' : 's'} recorded from the ads in this period
              {m.tracked.revenue !== null ? `, worth ${money(m.tracked.revenue, 0)}` : ''}. These replace the screenshot estimates in the results and ROI above.
            </p>
          </div>
        </Card>
      </Section>
    );
  }
  return (
    <Section id="tracking" title="Coming next: exact booking tracking" hiddenForClient={hidden}>
      <Card>
        <p className="max-w-3xl text-[15px] leading-relaxed text-ink2">
          Right now bookings are estimated from the registration pages, so they include people who found PMT without the ads. The next step is to add Meta's
          tracking code (the <strong className="text-ink">Meta Pixel</strong>) or Google Analytics to the registration confirmation page. After that, each booking
          that started with an ad is counted automatically, and this dashboard switches from estimates to exact numbers.
        </p>
        <ol className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          {[
            ['1', 'Add the Pixel', 'A small snippet on the MSI5 confirmation page (or a "thank you" page after registering).'],
            ['2', 'Count "Schedule" events', 'Meta records each completed registration and which ad led to it.'],
            ['3', 'Exact numbers here', 'Bookings, revenue and return on ad spend come straight from tracking.'],
          ].map(([n, t, d]) => (
            <li key={n} className="rounded-lg bg-surface2 p-3">
              <span className="font-display text-2xl text-accentink">{n}</span>
              <p className="font-semibold">{t}</p>
              <p className="mt-0.5 text-ink2">{d}</p>
            </li>
          ))}
        </ol>
      </Card>
    </Section>
  );
}
