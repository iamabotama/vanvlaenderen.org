import styles from './InnerPage.module.css';
import dnaStyles from './DnaPage.module.css';

export default function DnaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>Van Vlaenderen · Genetic Genealogy</div>
        <h1>Are We Connected?</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          The Van Vlaenderen name appears in multiple, geographically distinct family lines.
          DNA testing offers a way to look beyond the paper trail and ask: do these branches
          share a common ancestor?
        </p>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>The Question of Common Origin</h2>
          <p>
            Genealogical research into the Van Vlaenderen name has identified several distinct
            family lines, each with its own documented history in the Meetjesland and surrounding
            regions of East Flanders. The records suggest that these may be separate families
            who independently acquired the locative surname Van Vlaenderen — meaning "from
            Flanders" — at different times and in different places.
          </p>
          <p>
            However, the possibility remains that all Van Vlaenderen families share a single
            common ancestor, perhaps a miller, a landowner, or a notable figure from the
            medieval period whose descendants spread across the region over the centuries.
            Traditional genealogical research, relying on parish records, civil registration,
            and land documents, can only take us so far. DNA testing offers a complementary
            path of inquiry.
          </p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "Genealogy without genetics is like a map without a compass. Both are useful;
            together, they are powerful."
          </blockquote>
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
          <h2>The Van Vlaenderen DNA Project</h2>
          <p>
            This site is in the early stages of establishing a Van Vlaenderen DNA project.
            The goal is to bring together Van Vlaenderen descendants from all known family
            lines and compare their DNA results to determine whether a common ancestor can
            be identified.
          </p>
          <p>
            If you carry the Van Vlaenderen name — in any spelling — or if you are a
            descendant of a Van Vlaenderen woman who married into another family, your
            participation would be invaluable. No prior genealogical research is required.
            If you have already tested with AncestryDNA, 23andMe, or FamilyTreeDNA, you
            may be able to contribute your existing results.
          </p>
        </section>

        <div className={dnaStyles.testingServices}>
          <div className={dnaStyles.servicesHeading}>Recommended Testing Services</div>
          <div className={dnaStyles.servicesGrid}>
            {[
              { name: 'FamilyTreeDNA', note: 'Best for Y-DNA and surname projects', url: 'https://www.familytreedna.com' },
              { name: 'AncestryDNA',   note: 'Largest autosomal database', url: 'https://www.ancestry.com/dna' },
              { name: '23andMe',       note: 'Health + ancestry combined', url: 'https://www.23andme.com' },
              { name: 'MyHeritage DNA', note: 'Strong European database', url: 'https://www.myheritage.com/dna' },
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
