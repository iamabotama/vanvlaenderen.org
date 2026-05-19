import styles from './InnerPage.module.css';

export default function JanSansTerreLineagePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Jan &ldquo;sans terre&rdquo; van Vlaenderen &mdash; The Drincham Line</h1>
        <p>
          Jan &ldquo;sans terre&rdquo; van Vlaenderen, natural son of Louis II de Male, granted Drincham castle near Cassel in 1383. Killed at Nicopolis 25 September 1396. The Drincham line continues through widow Wilhelmine de Nevele and at least one documented son active 1419 &mdash; anchoring the French Flanders / Cassel surname cluster.
        </p>
        <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
          This page is under construction. The full line treatment is in preparation as part of the Phase 2 site build.
        </p>
      </div>
    </div>
  );
}
