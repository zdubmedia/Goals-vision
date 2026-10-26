import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { cx } from './ui';

export interface Slide {
  src: string;
  alt: string;
  video?: boolean;
  poster?: string;
}

/**
 * Swipeable image strip: swipe on a phone, arrows or dots on a computer.
 * Uses native scroll snapping, so it feels like a phone's photo gallery.
 */
export function Carousel({
  slides,
  className,
  fit = 'cover',
  startIndex = 0,
  onOpen,
  label,
}: {
  slides: Slide[];
  className?: string;
  fit?: 'cover' | 'contain';
  startIndex?: number;
  onOpen?: (index: number) => void;
  label: string;
}) {
  const strip = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(startIndex);
  // Where an arrow click is heading, so quick repeat clicks keep advancing mid-slide.
  const target = useRef<number | null>(null);
  const many = slides.length > 1;

  useEffect(() => {
    const el = strip.current;
    if (el && startIndex) el.scrollLeft = startIndex * el.clientWidth;
  }, [startIndex]);

  const go = (i: number) => {
    const el = strip.current;
    if (!el) return;
    const next = Math.max(0, Math.min(slides.length - 1, i));
    target.current = next;
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className={cx('group relative', className)} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={strip}
        onTouchStart={() => (target.current = null)}
        onWheel={() => (target.current = null)}
        className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(e) => {
          const el = e.currentTarget;
          const at = Math.round(el.scrollLeft / Math.max(1, el.clientWidth));
          setIndex(at);
          if (target.current === at) target.current = null;
        }}
      >
        {slides.map((s, i) => (
          <div key={s.src} className="h-full w-full shrink-0 snap-center" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`}>
            {s.video ? (
              <video src={s.src} poster={s.poster} controls playsInline preload="metadata" className="h-full w-full bg-black object-contain" aria-label={s.alt} />
            ) : onOpen ? (
              <button type="button" className="focus-ring block h-full w-full" onClick={() => onOpen(i)} aria-label={`Open image ${i + 1} larger`}>
                <img src={s.src} alt={s.alt} className={cx('h-full w-full', fit === 'cover' ? 'object-cover' : 'object-contain')} loading="lazy" draggable={false} />
              </button>
            ) : (
              <img src={s.src} alt={s.alt} className={cx('h-full w-full', fit === 'cover' ? 'object-cover' : 'object-contain')} loading="lazy" draggable={false} />
            )}
          </div>
        ))}
      </div>
      {many && (
        <>
          <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go((target.current ?? index) - 1)}
            disabled={index === 0}
            className="no-print focus-ring absolute left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition hover:bg-black/75 focus-visible:opacity-100 disabled:hidden group-hover:opacity-100 sm:flex"
          >
            <Icon name="chevron" className="h-4 w-4 rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go((target.current ?? index) + 1)}
            disabled={index === slides.length - 1}
            className="no-print focus-ring absolute right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition hover:bg-black/75 focus-visible:opacity-100 disabled:hidden group-hover:opacity-100 sm:flex"
          >
            <Icon name="chevron" className="h-4 w-4 -rotate-90" />
          </button>
          {/* On a video the dots move to the top so they don't cover its play controls. */}
          <div className={cx('absolute inset-x-0 flex justify-center gap-1.5', slides[index]?.video ? 'top-3' : 'bottom-2')}>
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={cx('h-2 rounded-full shadow transition-all', i === index ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/90')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
