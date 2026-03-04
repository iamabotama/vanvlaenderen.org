import styles from './InnerPage.module.css';
import nameStyles from './NamePage.module.css';

interface NamePageProps {
  onNavigate?: (tab: string) => void;
}

export default function NamePage({ onNavigate }: NamePageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>Van Vlaenderen · Origins &amp; Distribution</div>
        <h1>The Name</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          The surname Van Vlaenderen is traditionally understood as a locative name
          meaning "from Flanders." Such surnames were common in the medieval Low Countries
          and were often assigned to individuals identified by their regional origin.
        </p>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>History of a Surname</h2>
          <p>
            Early parish and civic records show the name concentrated within a relatively
            small area of the Meetjesland in East Flanders, particularly in Bassevelde,
            Boekhoute, Evergem, Lovendegem, Sleidinge, Ursel, and Wessegem. The continuity
            of the surname in this region across multiple generations invites closer
            historical examination.
          </p>
          <p>
            While the conventional toponymic explanation remains entirely plausible, the
            geographic density and early persistence of the name — together with its relative
            rarity, particularly outside East Flanders — invite an additional question:
            whether the surname may at some point have developed from a more specific
            territorial or local designation during the late medieval period.
          </p>
          <p>
            This site gathers available documentation and invites Van Vlaenderens around
            the world to explore the records, contribute family narratives, connect family
            trees, and participate in the Van Vlaenderen Family Genealogy Project.
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
              { name: 'Bassevelde',   note: 'Parish records from the 17th century' },
              { name: 'Boekhoute',    note: 'Early civic and land records' },
              { name: 'Ursel',        note: 'Land and mill ownership records' },
              { name: 'Evergem',      note: 'Civil registration from 1796' },
              { name: 'Lovendegem',   note: 'Municipal records, 19th century' },
              { name: 'Sleidinge',    note: 'Parish and notarial records' },
              { name: 'Wessegem',     note: 'Baptism and marriage registers' },
              { name: 'Vinderhoute',  note: 'Home of the Van Vlaenderensmolen' },
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
          <button
            className={nameStyles.shareStoryBtn}
            onClick={() => onNavigate?.('contact')}
          >
            Share your story →
          </button>
        </div>

      </div>
    </div>
  );
}
