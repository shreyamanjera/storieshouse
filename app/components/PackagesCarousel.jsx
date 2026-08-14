'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import PackageCard from './PackageCard';
import './PackagesCarousel.css';

function cardsPerPage() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 720) return 1;
  if (window.innerWidth < 1000) return 2;
  return 3;
}

export default function PackagesCarousel({ packages }) {
  const viewportRef = useRef(null);
  const resetTimerRef = useRef(null);
  const [perPage, setPerPage] = useState(3);
  const [index, setIndex] = useState(0);
  const displayPackages = [...packages, ...packages.slice(0, perPage)];

  const moveTo = useCallback((target, behavior = 'smooth') => {
    const viewport = viewportRef.current;
    const targetCard = viewport?.children[target];
    if (!viewport || !targetCard) return;
    viewport.scrollTo({ left: targetCard.offsetLeft - viewport.offsetLeft, behavior });
  }, []);

  const goNext = useCallback(() => {
    if (resetTimerRef.current) return;
    const next = index + 1;
    moveTo(next);
    if (next === packages.length) {
      setIndex(0);
      resetTimerRef.current = window.setTimeout(() => {
        moveTo(0, 'auto');
        resetTimerRef.current = null;
      }, 650);
    } else {
      setIndex(next);
    }
  }, [index, moveTo, packages.length]);

  const goPrevious = useCallback(() => {
    if (resetTimerRef.current) return;
    const previous = index === 0 ? packages.length - 1 : index - 1;
    moveTo(previous, index === 0 ? 'auto' : 'smooth');
    setIndex(previous);
  }, [index, moveTo, packages.length]);

  const goTo = useCallback((target) => {
    if (resetTimerRef.current) return;
    moveTo(target);
    setIndex(target);
  }, [moveTo]);

  useEffect(() => {
    const resize = () => {
      const nextPerPage = cardsPerPage();
      setPerPage(nextPerPage);
      setIndex(current => Math.min(current, packages.length - 1));
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [packages.length]);

  useEffect(() => {
    if (packages.length < 2) return undefined;
    const timer = window.setInterval(goNext, 5000);
    return () => window.clearInterval(timer);
  }, [goNext, packages.length]);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  return (
    <div className="packages-carousel" aria-roledescription="carousel" aria-label="Wedding photography packages">
      <div ref={viewportRef} className="packages-viewport" onScroll={(event) => {
        const firstCard = event.currentTarget.children[0];
        if (!firstCard) return;
        const gap = Number.parseFloat(getComputedStyle(event.currentTarget).columnGap) || 0;
        const current = Math.round(event.currentTarget.scrollLeft / (firstCard.offsetWidth + gap));
        if (current < packages.length) setIndex(current);
      }}>
        {displayPackages.map((item, itemIndex) => <PackageCard key={`${item.name}-${itemIndex}`} {...item} />)}
      </div>
      <div className="packages-carousel-footer">
        <div className="packages-carousel-navigation">
          <button type="button" onClick={goPrevious} aria-label="Previous packages">←</button>
          <button type="button" onClick={goNext} aria-label="Next packages">→</button>
        </div>
        <div className="packages-pagination" role="tablist" aria-label="Package pages">
          {packages.map((item, itemIndex) => <button key={item.name} type="button" aria-label={`Show ${item.name} package`} aria-selected={index === itemIndex} className={index === itemIndex ? 'is-active' : ''} onClick={() => goTo(itemIndex)} />)}
        </div>
      </div>
    </div>
  );
}
