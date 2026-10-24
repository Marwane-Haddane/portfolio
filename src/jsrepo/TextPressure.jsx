// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Roboto Flex',
  fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 3,
  className = '',

  minFontSize = 24
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = e => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = e => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    let rafId = 0;
    let visible = false;
    let lastFrame = 0;
    let settling = 8;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const schedule = () => {
      if (!rafId && visible && !document.hidden) rafId = requestAnimationFrame(animate);
    };
    const animate = now => {
      rafId = 0;
      if (!visible || document.hidden || !titleRef.current) return;
      if (now - lastFrame < 1000 / 30) { schedule(); return; }
      lastFrame = now;
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;
      const maxDist = Math.max(1, titleRef.current.getBoundingClientRect().width / 2);
      // Read all geometry before writing styles to avoid a layout for every letter.
      const measurements = spansRef.current.filter(Boolean).map(span => ({ span, rect: span.getBoundingClientRect() }));
      measurements.forEach(({ span, rect }) => {
        const distance = dist(mouseRef.current, { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 });
        const wdth = width ? Math.floor(getAttr(distance, maxDist, 5, 200)) : 100;
        const wght = weight ? Math.floor(getAttr(distance, maxDist, 100, 900)) : 400;
        const italVal = italic ? getAttr(distance, maxDist, 0, 1).toFixed(2) : 0;
        span.style.fontVariationSettings = "'wght' " + wght + ", 'wdth' " + wdth + ", 'ital' " + italVal;
        if (alpha) span.style.opacity = getAttr(distance, maxDist, 0, 1).toFixed(2);
      });
      const moving = dist(mouseRef.current, cursorRef.current) > 0.1;
      if (!reducedMotion && (moving || settling-- > 0)) schedule();
    };
    const wake = () => { settling = 8; schedule(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else { cancelAnimationFrame(rafId); rafId = 0; }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener('mousemove', wake, { passive: true });
    window.addEventListener('touchmove', wake, { passive: true });
    window.addEventListener('scroll', wake, { passive: true });
    document.addEventListener('visibilitychange', wake);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('mousemove', wake);
      window.removeEventListener('touchmove', wake);
      window.removeEventListener('scroll', wake);
      document.removeEventListener('visibilitychange', wake);
    };
  }, [width, weight, italic, alpha, fontSize]);

  useEffect(() => {
    if (document.querySelector('link[data-text-pressure-font]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    link.dataset.textPressureFont = '';
    document.head.appendChild(link);
  }, [fontUrl]);

  const styleElement = useMemo(() => {
    return (
      <style>{`

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      `}</style>
    );
  }, [textColor, strokeColor, strokeWidth]);

  const dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : ''].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {styleElement}
      <h2
        aria-label={text.trim()}
        ref={titleRef}
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 100,
          width: '100%'
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor
            }}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default TextPressure;
