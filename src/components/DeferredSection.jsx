import { createElement, Suspense, useEffect, useRef } from 'react';
import { hydrateRoot } from 'react-dom/client';

// Keep the complete HTML for readers and crawlers, then activate interactive
// sections shortly before they enter the viewport.
export default function DeferredSection({ html, load, children }) {
  const container = useRef(null);
  useEffect(() => {
    if (html === undefined) return;
    const node = container.current;
    let root;
    let started = false;
    let cancelled = false;
    const activate = () => {
      if (started) return;
      started = true;
      load().then(({ default: Component }) => {
        if (!cancelled) root = hydrateRoot(node, createElement(Component));
      });
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) activate();
    }, { rootMargin: '300px' });
    observer.observe(node);
    node.addEventListener('pointerover', activate, { once: true });
    node.addEventListener('focusin', activate, { once: true });
    return () => {
      cancelled = true;
      observer.disconnect();
      node.removeEventListener('pointerover', activate);
      node.removeEventListener('focusin', activate);
      if (root) queueMicrotask(() => root.unmount());
    };
  }, [html, load]);
  if (html === undefined) return <Suspense fallback={null}>{children}</Suspense>;
  return <div ref={container} data-deferred-section="" dangerouslySetInnerHTML={{ __html: html }} />;
}
