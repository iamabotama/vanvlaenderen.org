import { useSyncExternalStore, type ReactNode } from 'react';

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

const subscribeClientOnly = () => () => {};

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  // SSR-safe client detection without setState-in-effect: server snapshot is false
  // (fallback emitted during prerender), client snapshot is true.
  const mounted = useSyncExternalStore(subscribeClientOnly, () => true, () => false);
  return <>{mounted ? children : fallback}</>;
}
