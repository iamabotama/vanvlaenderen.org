import millVinderhoute from '../assets/images/mill-vinderhoute.webp';
import millMeetjesland from '../assets/images/mill-meetjesland.png';
import styles from './InnerPage.module.css';
import millStyles from './MillPage.module.css';

export default function MillPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroStrip}>
        <div className={styles.heroImg} style={{ backgroundImage: `url(${millVinderhoute})` }}>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Vinderhoute · Meetjesland</div>
          <h1>The Van Vlaenderensmolen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            A windmill was more than a machine. For the Van Vlaenderen family, it was a livelihood,
            an identity, and a landmark in the landscape of East Flanders.
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>The Van Vlaenderensmolen</h2>
          <p>
            In the village of Vinderhoute, in the municipality of Lovendegem in East Flanders,
            stands a historic windmill long known as the <em>Van Vlaenderensmolen</em> — the Van Vlaenderen Mill.
            This wooden post mill, mounted on a central pivot so that the entire structure could be
            turned into the wind, is one of the most tangible connections between the Van Vlaenderen
            family and the landscape of the Meetjesland.
          </p>
          <p>
            The mill took its name from the family that owned and operated it. In 1886, the property
            was purchased by <strong>Eduardus Van Vlaenderen</strong> (1832–1886), a farmer and miller who
            established the family's presence at the site. Through this acquisition, the Van Vlaenderen
            household became part of the network of millers who played an essential role in the
            agricultural economy of the region.
          </p>
          <p>
            After Eduardus's death later that same year, the mill passed within the family and
            continued to be associated with the Van Vlaenderen name into the next generation. His son,
            <strong> Frans Eduard Van Vlaenderen</strong> (1879–1954), grew up within the miller's household
            and carried forward the family's agricultural and milling traditions.
          </p>
        </section>

        <div className={millStyles.millPhotoRow}>
          <div className={millStyles.millPhotoCard}>
            <img src={millVinderhoute} alt="The Van Vlaenderensmolen in Vinderhoute, East Flanders" />
            <div className={millStyles.millPhotoCaption}>
              The Van Vlaenderensmolen, Vinderhoute — the mill that bears the family name
            </div>
          </div>
          <div className={millStyles.millPhotoCard}>
            <img src={millMeetjesland} alt="A traditional Flemish windmill in the Meetjesland region" />
            <div className={millStyles.millPhotoCaption}>
              A traditional Flemish windmill in the Meetjesland — the landscape the Van Vlaenderen family called home
            </div>
          </div>
        </div>

        <div className={styles.pullQuote}>
          <blockquote>
            "The mill took its name from the family that owned and operated it — and the family's name
            endures in the landscape of Vinderhoute to this day."
          </blockquote>
        </div>

        <section className={styles.section}>
          <h2>The Miller's Place in Flemish Society</h2>
          <p>
            In rural Flanders during the nineteenth century, the miller occupied a position of
            considerable importance. Farmers from the surrounding countryside brought their grain
            to the mill to be ground into flour, and the mill stood at the center of village economic
            life. Ownership of a working windmill required capital, land, and technical knowledge,
            and millers were often among the more established families of their communities.
          </p>
          <p>
            The history of the Van Vlaenderensmolen also reflects the vulnerability of these wooden
            structures to the forces of nature. In <strong>1905</strong>, a powerful storm severely damaged the mill.
            The family rebuilt and restored the structure, ensuring that the mill continued to serve
            the surrounding farms and remained a visible landmark in the landscape of Vinderhoute.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Meetjesland Region</h2>
          <p>
            The Meetjesland is a historic region in the province of East Flanders, Belgium, lying
            between the cities of Ghent and Bruges. It is a flat, green landscape of polders, canals,
            and small villages — a world shaped by water management, farming, and the rhythms of the
            seasons. The Van Vlaenderen family appears in the records of several Meetjesland villages,
            including Bassevelde, Ursel, Evergem, Boekhoute, and Merendree.
          </p>
          <p>
            Today, the Van Vlaenderensmolen stands as a rare physical reminder of the family's
            historical presence in the Meetjesland — a point where landscape, livelihood, and
            surname intersect.
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

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have stories, photographs, or documents connected to the Van Vlaenderen family,
            the mill at Vinderhoute, or the Meetjesland?
          </div>
          <div className={styles.ctaNote}>
            Every piece of family history matters. No detail is too small.
          </div>
        </div>

      </div>
    </div>
  );
}
