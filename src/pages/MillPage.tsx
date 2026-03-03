import windmill from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
import styles from './InnerPage.module.css';

export default function MillPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroStrip}>
        <div className={styles.heroImg} style={{ backgroundImage: `url(${windmill})` }}>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Meetjesland</div>
          <h1>The Mill</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            A windmill was more than a machine. For the Van Vlaenderen family, it was a livelihood,
            an identity, and a place in the community of East Flanders.
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>The Van Vlaenderensmolen</h2>
          <p>
            In the village of Vinderhoute, in the municipality of Lovendegem in East Flanders,
            there stands a windmill known as the <em>Van Vlaenderensmolen</em> — the Van Vlaenderen Mill.
            This post mill, a type of wooden windmill mounted on a central post, is one of the
            most direct physical connections between the Van Vlaenderen name and the landscape
            of the Meetjesland.
          </p>
          <p>
            The mill takes its name from the family that once owned and operated it. In the
            agricultural communities of 18th and 19th century Flanders, a miller held a position
            of considerable importance. Grain from the surrounding farms passed through the mill,
            and the miller's family was central to the economic life of the village.
          </p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "Heaven gives; whoever catches has it."
            <cite>— Flemish proverb on the windmill trade</cite>
          </blockquote>
        </div>

        <section className={styles.section}>
          <h2>The Meetjesland Region</h2>
          <p>
            The Meetjesland is a historic region in the province of East Flanders, Belgium,
            lying between the cities of Ghent and Bruges. The name itself is thought to derive
            from an old Flemish word for a small measure of land. It is a flat, green landscape
            of polders, canals, and small villages — a world shaped by water management, farming,
            and the rhythms of the seasons.
          </p>
          <p>
            The Van Vlaenderen family appears in the records of several Meetjesland villages,
            including Bassevelde, Ursel, Evergem, and Merendree. These communities were
            closely connected, and families moved between them through marriage, trade, and
            the search for work. The mill at Vinderhoute stands as a landmark in this landscape,
            a reminder of the family's deep roots in the region.
          </p>
        </section>

        <div className={styles.mapNote}>
          <div className={styles.mapNoteInner}>
            <div className={styles.mapNoteIcon}>📍</div>
            <div>
              <strong>Van Vlaenderensmolen</strong><br />
              <span>Vinderhoute, Lovendegem, East Flanders, Belgium</span><br />
              <span className={styles.mapNoteCoords}>51°06′N 3°36′E</span>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2>The Mill Today</h2>
          <p>
            The Van Vlaenderensmolen survives today as a protected heritage monument. Post mills
            of this type are increasingly rare in Belgium, and their preservation is a matter
            of regional pride. The mill stands as a tangible link to the Van Vlaenderen family's
            past — a structure that bears the family name and has done so for generations.
          </p>
          <p>
            If you have family photographs, documents, or stories connected to the mill or to
            the Van Vlaenderen family of Vinderhoute and the surrounding villages, we would
            very much like to hear from you.
          </p>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have stories, photographs, or documents connected to the Van Vlaenderen family
            and the Meetjesland?
          </div>
          <div className={styles.ctaNote}>
            Every piece of family history matters. No detail is too small.
          </div>
        </div>

      </div>
    </div>
  );
}
