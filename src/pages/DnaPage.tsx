import styles from './InnerPage.module.css';
import dnaStyles from './DnaPage.module.css';
import vintageFamilyPhoto from '../assets/images/vintage-family-photo.jpg';
import cronikeShields from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';

export default function DnaPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero: shields image + text ────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${cronikeShields})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Genetic Genealogy</div>
          <h1>Are We Connected?</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            The Van Vlaenderen name appears in multiple, geographically distinct family lines.
            DNA testing offers a way to look beyond the paper trail and ask: do these branches
            share a common ancestor?
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>The Question of Common Origin</h2>
          <p>
            Genealogical research into the Van Vlaenderen name has identified several
            documented family lines rooted in the Meetjesland and surrounding regions of
            East Flanders. At first glance, these lines appear in different parishes and
            at different moments in the historical record.
          </p>
          <p>
            The traditional assumption has been that families bearing the surname Van
            Vlaenderen — meaning "from Flanders" — may have adopted it independently as
            a locative designation. Yet closer examination of parish registers, land records,
            and patterns of proximity reveals a striking geographic concentration and
            recurring associations between families carrying the name.
          </p>
          <p>
            Rather than suggesting fragmentation, the documentation increasingly raises a
            compelling possibility: that many, perhaps even all, Van Vlaenderen families of
            the region may descend from a shared ancestor whose identity predates surviving
            parish records.
          </p>
          <p>
            Traditional genealogical research — relying on parish registers, civil records,
            and land documents — allows us to reconstruct much of this story, but gaps remain
            in the medieval period. DNA testing offers a complementary avenue of inquiry,
            helping to determine whether present-day Van Vlaenderens share a common paternal
            lineage.
          </p>
          <p>
            This question remains open — and it is one that can only be answered collectively.
          </p>
          <p>
            <strong>If you bear the name Van Vlaenderen, your family history may hold an
            essential piece of the puzzle.</strong>
          </p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "Genealogy without genetics is like a map without a compass. Both are useful;
            together, they are powerful."
          </blockquote>
        </div>

        <div className={dnaStyles.familyPhotoContainer}>
          <img
            src={vintageFamilyPhoto}
            alt="Vintage family photograph — early 20th century"
            className={dnaStyles.familyPhoto}
          />
          <div className={dnaStyles.familyPhotoCaption}>
            Every Van Vlaenderen family carries a story. Photographs like this one — passed down
            through generations — are part of the evidence that connects us across time.
          </div>
        </div>

        <section className={styles.section}>
          <h2>How DNA Genealogy Works</h2>
          <p>
            Modern genetic genealogy uses several types of DNA testing to trace family
            connections across generations:
          </p>
          <div className={dnaStyles.dnaGrid}>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>Y-DNA</div>
              <div className={dnaStyles.dnaDesc}>
                Passed from father to son, Y-DNA testing traces the direct paternal line.
                It is particularly useful for surname research, as the Y chromosome and
                the surname are often inherited together. Two men who share a Y-DNA
                haplogroup and a surname almost certainly share a common paternal ancestor.
              </div>
            </div>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>Autosomal DNA</div>
              <div className={dnaStyles.dnaDesc}>
                Autosomal DNA is inherited from both parents and can identify cousins
                across all family lines within approximately five to seven generations.
                Services such as AncestryDNA, 23andMe, and FamilyTreeDNA use autosomal
                testing to match you with living relatives who have also tested.
              </div>
            </div>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>mtDNA</div>
              <div className={dnaStyles.dnaDesc}>
                Mitochondrial DNA is passed from mother to child and traces the direct
                maternal line. While less commonly used in surname research, it can
                confirm or challenge assumptions about maternal ancestry.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>The Van Vlaenderen Genetic Genealogy Project</h2>
          <p>
            The Van Vlaenderen DNA Project brings together descendants of the various
            documented Van Vlaenderen family lines to explore a central question: do we
            share a common ancestor?
          </p>
          <p>
            Historical records allow us to trace the surname across multiple parishes in
            the Meetjesland and surrounding regions of East Flanders. DNA analysis offers
            a complementary tool, enabling us to examine whether present-day bearers of
            the name share a common paternal lineage that predates surviving parish records.
          </p>
          <p>
            Participation is open to anyone who carries the Van Vlaenderen surname — in
            any historical spelling — as well as to descendants of Van Vlaenderen women
            whose family lines continued under different names.
          </p>
          <p>
            No prior genealogical research is required. If you have already tested with
            services such as AncestryDNA, 23andMe, or FamilyTreeDNA, your existing results
            may be usable. Those interested in deeper paternal-line analysis may choose to
            pursue additional Y-DNA testing.
          </p>
          <p>
            This project is collaborative, voluntary, and research-based. Each participant
            helps clarify the historical origins of our shared name.
          </p>
        </section>

        <div className={dnaStyles.testingServices}>
          <div className={dnaStyles.servicesHeading}>Recommended Testing Services</div>
          <div className={dnaStyles.servicesGrid}>
            {[
              { name: 'FamilyTreeDNA',  note: 'Best for Y-DNA and surname projects',  url: 'https://www.familytreedna.com' },
              { name: 'AncestryDNA',    note: 'Largest autosomal database',            url: 'https://www.ancestry.com/dna' },
              { name: '23andMe',        note: 'Health + ancestry combined',            url: 'https://www.23andme.com' },
              { name: 'MyHeritage DNA', note: 'Strong European database',              url: 'https://www.myheritage.com/dna' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={dnaStyles.serviceCard}>
                <div className={dnaStyles.serviceName}>{s.name}</div>
                <div className={dnaStyles.serviceNote}>{s.note}</div>
                <div className={dnaStyles.serviceArrow}>↗</div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Are you a Van Vlaenderen descendant who has already taken a DNA test?
          </div>
          <div className={styles.ctaNote}>
            Get in touch — your results could be the key to connecting the branches of
            the Van Vlaenderen family tree.
          </div>
        </div>

      </div>
    </div>
  );
}
