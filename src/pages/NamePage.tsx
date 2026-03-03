import styles from './InnerPage.module.css';
import nameStyles from './NamePage.module.css';

export default function NamePage() {
  return (
    <div className={styles.page}>
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>Van Vlaenderen · Origins &amp; Distribution</div>
        <h1>The Name</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          Van Vlaenderen means, simply, "from Flanders." It is a surname that carries
          a region within it — a declaration of origin worn as an identity.
        </p>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>A Name That Means a Place</h2>
          <p>
            The surname Van Vlaenderen — also spelled Van Vlaanderen, Van Vlaendereen,
            or in anglicised forms such as Vanvlaenderen or Vanflanderen — is a locative
            surname. It identifies a person or family as being <em>from Flanders</em>,
            the historic region that today encompasses the northern, Dutch-speaking
            provinces of Belgium, as well as parts of the Netherlands and northern France.
          </p>
          <p>
            Locative surnames of this type were common in medieval and early modern Flanders.
            They were often given to people who had migrated from one place to another and
            were known in their new community by their place of origin. A family called
            Van Vlaenderen may have been so named because they moved from Flanders proper
            into a neighbouring region, or because they were among the first settlers of
            Flemish origin in a particular village.
          </p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "The name Van Vlaenderen is, in itself, a piece of history — a record of
            movement, identity, and belonging written into the family's very title."
          </blockquote>
        </div>

        <section className={styles.section}>
          <h2>Where the Name Appears</h2>
          <p>
            The Van Vlaenderen name appears in the historical records of several East
            Flemish communities, concentrated in the Meetjesland region. The villages
            where the name is most frequently documented include:
          </p>
          <div className={nameStyles.villageGrid}>
            {[
              { name: 'Bassevelde', note: 'Parish records from the 17th century' },
              { name: 'Ursel',      note: 'Land and mill ownership records' },
              { name: 'Evergem',    note: 'Civil registration from 1796' },
              { name: 'Merendree', note: 'Marriage and baptism records' },
              { name: 'Vinderhoute', note: 'Home of the Van Vlaenderensmolen' },
              { name: 'Lovendegem', note: 'Municipal records, 19th century' },
            ].map(v => (
              <div key={v.name} className={nameStyles.villageCard}>
                <div className={nameStyles.villageName}>{v.name}</div>
                <div className={nameStyles.villageNote}>{v.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Spelling Variations</h2>
          <p>
            Before standardised spelling was enforced through civil registration in the
            Napoleonic period (after 1796 in Belgium), surnames were recorded phonetically
            by parish priests and local officials. The Van Vlaenderen name appears in
            historical documents in a wide variety of forms:
          </p>
          <div className={nameStyles.spellingList}>
            {[
              'Van Vlaenderen', 'Van Vlaanderen', 'Van Vlaendereen',
              'Vanvlaenderen', 'Van Flanderen', 'Vanflanderen',
              'de Flandre', 'van Vlanderen', 'Van Vlaendren',
            ].map(s => (
              <span key={s} className={nameStyles.spellingTag}>{s}</span>
            ))}
          </div>
          <p>
            If you are researching the Van Vlaenderen family in historical archives,
            it is worth searching for all of these variants, particularly in records
            predating 1800.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Cronike Van Vlaenderen</h2>
          <p>
            One of the most important medieval chronicles of Flanders is the
            <em> Cronike Van Vlaenderen</em> — the Chronicle of Flanders. This 15th-century
            manuscript documents the history of the Counts of Flanders and the great
            events of the region from its earliest recorded history. It is a remarkable
            work of medieval historiography, richly illustrated with heraldic shields
            and portraits of the Flemish nobility.
          </p>
          <p>
            The chronicle is not a genealogical record of the Van Vlaenderen family,
            but it provides essential context for understanding the world in which the
            family lived. The Counts of Flanders — whose heraldic lion, the <em>Leeuw van
            Vlaanderen</em>, became the symbol of the entire region — shaped the political,
            economic, and cultural landscape that the Van Vlaenderen family inhabited
            for generations.
          </p>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Have you found the Van Vlaenderen name in a record, a document, or a family story?
          </div>
          <div className={styles.ctaNote}>
            Every spelling variant and every location helps build a more complete picture.
          </div>
        </div>

      </div>
    </div>
  );
}
