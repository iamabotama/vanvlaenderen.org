import styles from './InnerPage.module.css';

export default function DesparsCompendiumPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Despars Cronijcke &mdash; Cross-Reference Compendium</h1>
        <p>
          A systematic cross-reference of the four-volume <em>Cronijcke van den Lande ende Graefscepe van Vlaenderen</em> by Nicolaes Despars (compiled c. 1562&ndash;1592; published 1840 De Jonghe edition). Master enumerations, dated narrative attestations, and cross-source bridges to Vredius&rsquo;s <em>Genealogia Comitum Flandriae</em> and Lichtervelde 1935. To be published as a downloadable PDF and rendered HTML.
        </p>
        <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
          This page is under construction. The compendium and its rendering pipeline are in preparation as part of the Phase 2 site build.
        </p>
      </div>
    </div>
  );
}
