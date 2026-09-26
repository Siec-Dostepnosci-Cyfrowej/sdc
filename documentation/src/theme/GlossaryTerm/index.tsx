import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  useMemo,
} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// ─── typy ─────────────────────────────────────────────────────────────────────

interface GlossaryTermProps {
  term: string;
  definition?: string;
  shortDefinition?: string;
  references?: string; // JSON: Reference[] — przekazywane przez remark, niewyświetlane w dymku (WCAG: tooltip pasywny)
  acronym?: string;    // przekazywane przez remark, niewyświetlane w dymku
  definitionType?: string; // przekazywane przez remark, niewyświetlane w dymku
  id?: string;
  routePath?: string;
  documentationPath?: string;
  children?: React.ReactNode;
}

// ─── główny komponent ──────────────────────────────────────────────────────────

export default function GlossaryTerm({
  term,
  definition,
  shortDefinition,
  references: _references,   // przekazywane przez remark, nieużywane w dymku
  acronym: _acronym,         // przekazywane przez remark, nieużywane w dymku
  definitionType: _definitionType, // przekazywane przez remark, nieużywane w dymku
  id,
  routePath = '/slownik',
  documentationPath,
  children,
}: GlossaryTermProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<{ top: number; left: number } | null>(null);
  const [placement, setPlacement] = useState<'top' | 'bottom'>('top');
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  // ── pozycjonowanie dymku ───────────────────────────────────────────────────
  const updatePosition = useCallback(() => {
    if (!wrapperRef.current || !tooltipRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const preferredGap = 8;
    const stickyHeader = document.querySelector('.navbar');
    const topBoundary = stickyHeader
      ? Math.max(0, stickyHeader.getBoundingClientRect().bottom)
      : 0;
    const hasSpaceAbove = wrapperRect.top - topBoundary >= tooltipRect.height + preferredGap;
    const hasSpaceBelow = viewportHeight - wrapperRect.bottom >= tooltipRect.height + preferredGap;
    const nextPlacement = hasSpaceAbove || !hasSpaceBelow ? 'top' : 'bottom';
    let top =
      nextPlacement === 'top'
        ? wrapperRect.top - tooltipRect.height - preferredGap
        : wrapperRect.bottom + preferredGap;
    const horizontalMargin = 8;
    let left = wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2;
    left = Math.max(
      horizontalMargin,
      Math.min(left, viewportWidth - tooltipRect.width - horizontalMargin),
    );
    setPlacement(nextPlacement);
    setTooltipStyle({ top: Math.max(topBoundary + 4, top), left });
  }, []);

  useEffect(() => {
    if (!showTooltip) return;
    let rafId2: number;
    const rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => updatePosition());
    });
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [showTooltip, updatePosition]);

  // ── obsługa klawisza Escape (WCAG 1.4.13) ────────────────────────────────
  useEffect(() => {
    if (!showTooltip) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowTooltip(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [showTooltip]);

  // ── definicja do dymku (shortDefinition priorytetowo) ─────────────────────
  const tooltipDefinition = useMemo(() => {
    if (shortDefinition?.trim()) return shortDefinition.trim();
    if (definition?.trim()) return definition.trim();
    return undefined;
  }, [shortDefinition, definition]);

  // ── id hasła do anchor linka ───────────────────────────────────────────────
  const termId = useMemo(
    () => id?.trim() || term.toLowerCase().replace(/\s+/g, '-'),
    [id, term],
  );

  // ── render ─────────────────────────────────────────────────────────────────
  const displayText = children ?? term;

  return (
    <span
      ref={wrapperRef}
      className={styles.glossaryTermWrapper}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        to={documentationPath ?? `${routePath}#${termId}`}
        className={styles.glossaryTerm}
        onFocus={() => setShowTooltip(true)}
        onBlur={(e) => {
          // WCAG 1.4.13: zamknij tooltip tylko gdy focus opuszcza cały wrapper
          if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
            setShowTooltip(false);
          }
        }}
        aria-describedby={tooltipDefinition ? tooltipId : undefined}
      >
        {displayText}
      </Link>

      {tooltipDefinition && (
        <span
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className={[
            styles.tooltip,
            showTooltip ? styles.tooltipVisible : '',
            placement === 'top' ? styles.tooltipTop : styles.tooltipBottom,
            styles.tooltipFloating,
          ]
            .filter(Boolean)
            .join(' ')}
          style={
            showTooltip && tooltipStyle
              ? { top: `${tooltipStyle.top}px`, left: `${tooltipStyle.left}px` }
              : undefined
          }
        >
          {tooltipDefinition}
        </span>
      )}
    </span>
  );
}
