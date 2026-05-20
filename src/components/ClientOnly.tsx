import { useState, useEffect, type ReactNode } from 'react';

/**
 * Renders children only after the component has mounted on the client.
 * During SSR / build-time prerender (scripts/prerender.mjs), `mounted` is
 * false, so the fallback is emitted instead of children. Use this to wrap
 * any component that touches `window` or `document` at module load — e.g.
 * react-leaflet, which would otherwise abort renderToString and inject a
 * Suspense error stack trace into the static HTML.
 */
interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return <>{mounted ? children : fallback}</>;
}
