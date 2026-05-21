import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PraetLineageDossierPage() {
  const lineageData = [
    { gen: 1, name: 'Louis Friese van Vlaenderen', dates: 'c.1350 \u2013 25 Sep 1396', role: 'Bastard of Flanders; Lord of Praet & Woestine', spouse: '1) Unknown (La Woestine) 2) Marie van Gistel', sources: 'Vredius MS via FMG [864\u2013869]; Wikipedia', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 2, name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439', role: 'Lord of Praet & Woestine; Burgher of Praet', spouse: 'Johanna van Reygersvliet', sources: 'Charter 10 Sep 1439 via FMG [873]; Vredius MS [875]', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 3, name: 'Lodewijk II van Vlaenderen', dates: 'd. 1488', role: 'Lord of Praet, Woestine, Bevere, Onnele', spouse: 'Louise de Bruges dau. of Jan van Gruuthuse', sources: 'Aalter tomb inscription and de l\u2019Espinoy via Vredius pp. 277\u2013278; FMG [876,878]', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 4, name: 'Lodewijk III van Vlaenderen', dates: 'd. 1488 (Grimarez) / 1490 (tomb)', role: 'Lord of Praet', spouse: 'Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent)', sources: 'Aalter tomb inscription and Grimarez via Vredius p. 279; FMG [889,890]', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 5, name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1555', role: 'Knight of the Golden Fleece (1531); Grand Bailiff Ghent & Bruges; Stadtholder Holland & Zeeland; Advisor to Emperor Charles V', spouse: 'Jossine van Praet (d. 10 Dec 1546, bur Aeltere)', sources: 'Aalter tomb inscription via Vredius p. 387; FMG [891\u2013893]; Wikipedia', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 6, name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545', role: 'Lord of Woestine, Elverdinghe, Vlamertinghe; predeceased father without issue', spouse: 'Jacqueline de Bourgogne (remarried; d. 1556 in childbirth)', sources: 'Epitaph Aeltere via FMG [894,895]', level: 'Directly attested', levelClass: researchStyles.levelAttested },
  ];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Praet Lineage Detail — Van Vlaenderen Research | vanvlaenderen.org</title>
        <meta name="description" content="Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Johan I, Lodewijk II (whose son Jean d. 1523 founded the Onlede cadet branch), Lodewijk III, and Lodewijk IV — the research control for Van Vlaenderen surname attribution." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/praet-lineage-dossier" />
        <meta property="og:title" content="Praet Lineage Detail — Van Vlaenderen Research" />
        <meta property="og:description" content="Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Johan I, Lodewijk II (whose son Jean d. 1523 founded the Onlede cadet branch), Lodewijk III, and Lodewijk IV — the research control for Van Vlaenderen surname attribution." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/praet-lineage-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Praet Lineage Detail \\u2014 Van Vlaenderen Research","description":"Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV.","url":"https://vanvlaenderen.org/research/praet-lineage-dossier","inLanguage":"en","dateModified":"2026-04-19","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Louis Friese van Vlaenderen","item":"https://vanvlaenderen.org/research/louis-friese"},{"@type":"ListItem","position":4,"name":"Lineage Detail","item":"https://vanvlaenderen.org/research/praet-lineage-dossier"}]}`}} />
      </Helmet>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Lineage Dossier</div>
          <h1>The House of Flanders-Praet</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Documented lineage from Louis Friese van Vlaenderen (d. 1396) to the extinction of the legitimate male line (1545), with primary-source confirmed generation data. Updated April 2026 with FMG MedLands primary charter and epitaph data.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Lineage Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Methodology ──────────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Method</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This dossier has been substantially upgraded from the previous version. All generation data now incorporates primary-source material from FMG MedLands, which preserves charter summaries, epitaph transcriptions, and manuscript citations from Vredius (1643), Bethune (1900), Buylaert, and Pere Anselme. Evidence levels have been revised accordingly. The intermediate generations &mdash; previously classified as 'strongly corroborated' &mdash; are now largely directly attested via epitaphs or dated charters.
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid rgba(232, 184, 48, 0.1)', paddingTop: '1rem' }}>
            <strong>Source chain note:</strong> Espinoy (1631) and Vredius (1643) are the principal 17th-century authorities. Both are cited through FMG MedLands summaries with footnote numbers, which are preserved below for traceability. The FMG footnote numbers in square brackets refer to the Flanders, Hainaut document, section B: Heeren van Praet.
          </p>
        </section>

        {/* ── Lineage Summary Table ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Lineage Summary Table</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gold)', textAlign: 'left' }}>
                  <th style={{ padding: '10px', color: 'var(--gold)', whiteSpace: 'nowrap' }}>Gen</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Name &amp; Dates</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Title / Role</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Spouse</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Sources</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {lineageData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{row.gen}</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.name}<br /><span style={{ fontWeight: 'normal', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.dates}</span></td>
                    <td style={{ padding: '10px' }}>{row.role}</td>
                    <td style={{ padding: '10px' }}>{row.spouse}</td>
                    <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.sources}</td>
                    <td style={{ padding: '10px' }}>
                      <span className={`${researchStyles.evidenceLevel} ${row.levelClass}`} style={{ marginLeft: 0, whiteSpace: 'nowrap' }}>{row.level}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Generation Notes ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Generation Notes</h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Louis Friese van Vlaenderen (c.1350 &ndash; 25 Sep 1396) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              FMG MedLands [864] summarises Vredius quoting a manuscript: 'messire Loys de Frise fils bastard de...Loys de Male conte de Flandre, lequel il eut dune fille de Monsieur de Borre.' His grant of Praet is recorded from Espinoy [865]: Louis de Male 'en avancement de son mariage avec Dame Marie de Guistelles, Dame de Zweueghem et de Rosebeke' granted 'les terres et Baronies de Praet et de la Woestine' to his illegitimate son 'Messire Louys de Flandres dit le Frizon' (no source cited). Vredius [866] records that Louis 'eut en partage [la Wostine] par acte du 25 de septembre 1373' and died at Nicopolis 25 Sep 1396.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Johan I van Vlaenderen (d. after 10 Sep 1439) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              A charter dated 10 Sep 1439 [FMG 873] is directly issued by 'Ian van Vlaenderen Heere van Praet ande vander Woestine ende Burghemeesters ende Schepenen vanden selven Heerschepe van Praet.' This is Johan I's own charter &mdash; directly attested. His marriage to Johanna van Reygersvliet is recorded in Vredius manuscript [875]: 'Iean de Flandre Seign. de Praet et de la Woestine' married 'Ieanne de Reyghersvliet fille de Henry, fils de Gautier.' FMG notes: 'No primary source has been found which confirms her parentage and marriage' &mdash; the marriage itself is therefore strongly corroborated, her parentage probable. Espinoy [872] records the 1431 settlement of 'messire Louys son pere en son vivant Seigneur de Praet et de la Woestine' between Johan I and his mother.
            </p>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Johan I&rsquo;s Five Documented Children</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              (a) <strong>Lodewijk II</strong> &mdash; the heir; Aalter tomb attested [FMG 876]; (b) <strong>Ioanna (Jeanne) de Flandre</strong> &mdash; m. Jean, Lord of Pouques (1446); Gaillard and Van Hecke references [FMG 884, 885]; (c) <strong>Margareta (Marguerite) de Flandre</strong> &mdash; m. Louis de Bailleul; Grimarez and Van Hecke extracts [FMG 886] (attribution structurally inferential, see note below); (d) <strong>Lisbette (Isabelle) de Flandre</strong> &mdash; m. Waleran, Lord of Landas and Warlain; [FMG 887]; (e) <strong>Landrada de Flandre</strong> &mdash; Canoness at St. Waudru, Mons; never married; [FMG 888]. A March 1442 Ghent partition records the three minor children (Lodewijk II, Lisbette, and Landrada) under guardianship after Johan I&rsquo;s death; Ioanna and Margareta were by then already married.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-muted)', marginTop: '0.75rem', fontStyle: 'italic' }}>
              <strong>Correction noted.</strong> An earlier version of this dossier attributed seven children to Johan I, including Jean de Flandre (d. 1523, Heer van Onlede en Beveren, Grand Bailiff of Bruges) and Josse de Flandre (d. after 1526). Direct reading of Vredius in April 2026 resolves these two figures as sons of Lodewijk II, not of Johan I: the Beveren tomb inscription on Vredius p. 280 explicitly identifies Jean&rsquo;s father as &lsquo;Messire <strong>Loys</strong> de Flandres, Chevalier, Saigneur de Praet&rsquo; (i.e., Lodewijk II, d. 1488). Damhouder&rsquo;s list of Lodewijk II&rsquo;s six children by Louise de Bruges on Vredius p. 278 confirms both Jean and Josse as Lodewijk II&rsquo;s sons. Margareta de Flandre&rsquo;s attribution to Johan I is structurally inferential (from the &lsquo;sorores Ludovici Patris&rsquo; heading on Vredius p. 278) rather than directly textual, and is treated here as probable. Buylaert 2011 (not yet consulted directly) is the definitive arbiter on these attributions.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem', background: 'rgba(96, 165, 250, 0.06)', border: '1px solid rgba(96, 165, 250, 0.15)', borderRadius: '4px', padding: '1.25rem' }}>
            <h4 style={{ color: '#60a5fa', fontSize: '1rem', marginBottom: '0.5rem' }}>Note on Josse de Flandre (cadet branch)</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Josse de Flandre (d. after 1526) is a documented cadet branch of the Praet line, descending from Lodewijk II (not Johan I as earlier framed). He is distinct from Victor&rsquo;s grandson Josse, son of Lodewyc by Jacqueline de Wilde, who died young at Oostburg (Oostborch). This Josse married Martina van Moerkerke and his line survived until at least 1592 per Buylaert. This is the most significant newly confirmed cadet branch.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk II van Vlaenderen (d. 1488) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Two primary sources agree on the year (1488) but disagree on the day. The Aalter tomb inscription, quoted in Vredius p. 277, reads: &lsquo;Voor den hooghen autaer light M&rsquo;her LODEWYC van Vlaenderen/ Heere van Praet/ ende vanden lande van Woestine/ Bevere/ ende Ornlede/ fs. M&rsquo;her Jans/ Rudder/ Heere van Praet&hellip; die starf 1488. op S. Baefs dach&rsquo; &mdash; St. Bavo&rsquo;s day, 1 October 1488. De l&rsquo;Espinoy, quoted by Vredius p. 278, reads: &lsquo;lequel Messire Loys de Flandre, mourut en l&rsquo;an 1488, le jour de S. Berthelemy&rsquo; &mdash; St. Bartholomew&rsquo;s day, 24 August 1488. Both sources agree he married &lsquo;vrau Loije van Brugghe fs mijns heeren Jans heere van Gruuthuuse&rsquo; &mdash; Louise de Bruges, daughter of Jan van de Aa dit de Bruges, Heer van Gruuthuse en Grimbergen. Pere Anselme confirms her parentage and marriage [FMG 877].
            </p>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Lodewijk II&rsquo;s Six Documented Children</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Damhouder&rsquo;s extract, quoted in Vredius p. 278, names six children by Louise de Bruges: &lsquo;Loys, Iean, Iaques, Ioffe, Loyfe, &amp; Iehenne de Flandre.&rsquo; (a) <strong>Lodewijk III (Loys)</strong> &mdash; the heir, see below; (b) <strong>Jean de Flandre</strong> (d. 6 September 1523), Heer van Onlede en Beveren bij Roeselare, Grand Bailiff of Bruges and the Brugse Vrije; Beveren tomb inscription [FMG 879]; (c) <strong>Jaques (Jacques) de Flandre</strong> &mdash; named only in Damhouder&rsquo;s list; no further biographical detail in Vredius; (d) <strong>Josse (Ioffe) de Flandre</strong> (d. after 1526), inherited Onlede, Beveren, and Wijchuize after his brother Jean; married Martina van Moerkerke; cadet branch documented to at least 1592 per Buylaert [FMG 881, 882]; (e) <strong>Louise (Loyfe) de Flandre</strong>; (f) <strong>Iehenne (Jeanne) de Flandre</strong>. Note on possible name confusion: this Iehenne (daughter of Lodewijk II) is a different person from Johan I&rsquo;s daughter Ioanna-m-Pouckes (see above); the two Jeannes are in adjacent generations and must not be conflated.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk III van Vlaenderen (d. 1488/1490) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription quoted in Vredius p. 279 reads: &lsquo;Op den Maendagh 1490 starf M&rsquo;her LOYS van Vlaendren/ heere van Praet/ die ghetrauwt hadde Vrauwe ISABELLE van Bourgongnen; hy light alhier by zijnen Vader&rsquo; &mdash; a Monday in 1490, buried beside his father. Grimarez, also quoted on the same Vredius page, records his death as &lsquo;1488. 1. Ianvier&rsquo; &mdash; 1 January 1488. The two sources disagree by roughly two years; the discrepancy may reflect the Easter-style year-change convention used in some Flemish chancery records. His marriage to Isabelle de Bourgogne, daughter of Jean b&acirc;tard de Bourgogne Heer van Elverdinghe en Vlamertinghe and Marie d&rsquo;Halluin, is confirmed by the same tomb [FMG 890]. Isabelle died &lsquo;12 Nov 1504&rsquo; and was buried &lsquo;te Gent, te Galilee.&rsquo;
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk IV van Vlaenderen / Louis of Praet (d. 1555) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription, quoted in Vredius p. 387, records his full titulature: &lsquo;M&rsquo;her LODEWYC van Vlaendren/ Rudder vander Ordre vanden Gulden Vliese/ Heere van Praet/ vanden lande vander Woestyne/ Elverdijnghe/ Vlamertijnghe/ Spiete/ ende vander Mersch/ Raed/ Upper-camerlinck/ Chief vande Financien van de K.M. Carolus den V. ende sijnen Hoogh-Bailliu van Brugghe/ ende van &rsquo;t Brughsche Vrije/ te sijnen overlijden Gouverneur ende Capitain van Vlaendren/ die starf 1555.&rsquo; Knight of the Golden Fleece (1531); Grand Bailiff of Ghent and Bruges; Stadtholder of Holland and Zeeland (1544&ndash;46); Advisor to Emperor Charles V.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Married Jossine van Praet, daughter of Charles van Praet Heer van Moerkercke, heiress of the original Praet baronial family. The same Aalter tomb inscription records her death: &lsquo;Ende Me-vrauwe IOSYNE van Praet/ Vrauwe van Moerkercke/ M&rsquo;her Charles van Praet/ Heere van Moerkercke dochter was/ M&rsquo;her LODEWYCX ghesselnede/ die starf 1546. den 10. December&rsquo; &mdash; died 10 December 1546, nine years before her husband, buried beside him at Aalter [FMG 893].
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem', background: 'rgba(212, 168, 48, 0.06)', border: '1px solid rgba(212, 168, 48, 0.15)', borderRadius: '4px', padding: '1.25rem' }}>
            <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem' }}>The 1517 Knesselare Charter &mdash; Research Significance</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              A charter [FMG 891] records Lodewijk IV holding six fiefs at Knesselare from the seigneurie of Wessegem in 1517. Knesselare is one of the parishes in the active research coverage, and it sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen cluster in the Meetjesland. This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderens who later appear in Knesselare parish records. But it confirms that the Praet branch had territorial interests in the precise geographic area where your ancestors lived &mdash; which is relevant to the branch-control problem identified in the research design.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Jan II van Vlaenderen (d. 10 Dec 1545) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription, quoted in Vredius p. 388, reads: &lsquo;Inde selve tombe light Jo. IAN van Vlaendren/ Heere van Woestine/ Elverdinghe/ ende Vlamertinghe/ fil. mijns Heeren Lodewijc/ Heere van Praet/ ende van Vrauw&rsquo; Josijne voorseyt/ die starf 1545. den 10. December; hy hadde ghetrauwt Vrauw&rsquo; IAQVELINE van Bourgongnen/ fil. M&rsquo;her Adolf/ Heere van Bevere/ starf sonder generatie.&rsquo; Grimarez on the same page adds that he &lsquo;mourut, sans generation, avant son pere, en l&rsquo;an 1545&rsquo; &mdash; he predeceased his father Lodewijk IV by exactly ten years, leaving the legitimate Praet male line extinct a decade before Lodewijk IV himself died in 1555. A separate epitaph at Veere [FMG 895] records that his widow Jacqueline de Bourgogne remarried Jan Heer van Cruijningen and died &lsquo;van haer laetste kint&rsquo; at Beveren in 1556 &mdash; in childbirth with her last child by her second husband &mdash; and that she was childless by Jan van Vlaenderen.
            </p>
          </div>
        </section>

        {/* ── Documented Cadet Connections ─────────────────────────── */}
        <section className={styles.section}>
          <h2>Documented Cadet Connections</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            The following are now documented from primary sources, replacing the previous Geni-only entries.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Josse de Flandre (son of Lodewijk II, d. after 1526) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Documented by Buylaert [FMG 881,882]. Named as Lodewijk II&rsquo;s son &lsquo;Ioffe de Flandre&rsquo; in Damhouder&rsquo;s list of the six children on Vredius p. 278. After the death in 1523 of his brother Jean de Flandre Heer van Onlede, Josse inherited &lsquo;de heerlijkheden Onlede, Beveren en Wijchuize.&rsquo; He married Martina van Moerkerke and had &lsquo;verschillende kinderen.&rsquo; The family survived until 1592. This is a directly attested cadet branch of the Praet line extending into the early parish-record period.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Francoise van Praet van Moerkerke (fl. c.1519) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Documented in two independent published sources. Nederland's Adelsboek (1908) records Wessel van Boetzelaer married c.1519 'Francina van Praet.' The Lauwens genealogical study (2010) records 'Francoise van Praet van Moerkerken, vrouwe van Carnesse, huwde Wessel van den Boetzelaer, heer van Langerak en Asperen.' Her precise generation within the Praet-Moerkerke line requires further investigation.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Margareta van Vlaenderen (dau. of Lodewyc, Victor's son) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Charters dated 1478 and 1486 [FMG 850] record that 'Marguerite de Flandres' (daughter of Lodewyc van Vlaenderen, Victor's son) married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe. This is from Victor's line, not the Praet line &mdash; noted here to distinguish the two Margaretha van Vlaenderens documented in the 15th century.
            </p>
          </div>
        </section>

        {/* ── Extinction and Open Questions ────────────────────────── */}
        <section className={styles.section}>
          <h2>Extinction and Open Questions</h2>
          <p>
            The legitimate Praet male line ended 10 December 1545 with Jan II's death. Josse de Flandre (son of Lodewijk II, grandson of Johan I) represents a documented cadet branch surviving until at least 1592, but his line does not carry the primary &lsquo;van Vlaenderen&rsquo; surname styling in the sources reviewed. Whether any branch of the Praet network continued to use &lsquo;van Vlaenderen&rsquo; as a surname into the commoner population remains unproven. The Raad van Vlaanderen records at Rijksarchief Gent are the recommended next archival target.
          </p>
        </section>

        {/* ── Research Significance ────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Research Significance</h2>
          <p>
            The Praet branch provides independent corroboration that <em>van Vlaenderen</em> functioned as inherited comital identity across six generations. The 1517 Knesselare charter is a new finding that places the Praet van Vlaenderens in direct territorial contact with the Meetjesland research cluster during the gap period. The branch functions as a research control: men styled <em>van Vlaenderen</em> in 16th-century Flemish records must be tested against Praet geography, patronymics, and witness networks before being assigned to Victor's descent.
          </p>
        </section>

        {/* ── Notes & Bibliography ────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h3>Notes &amp; Bibliography</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642&ndash;43. Tabula XVI, pp. 275&ndash;289 (Louis II de Male bastard cohort, including Louis Friese and the Praet descent through Lodewijk III); Tabula XIX, pp. 387&ndash;388 (Lodewijk IV, Jossine van Praet, and Jan II at Aalter). Direct reading of the 1643 print conducted April 2026. All tomb-inscription quotations in this dossier are verified against the Vredius print.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025. Section B: Heeren van Praet. Footnote numbers in square brackets refer to this source, which serves as a collateral summary apparatus for the Vredius transcriptions.{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Bethune, J.B. de. <em>Epitaphes et monuments des eglises de la Flandre.</em> Third part. 1900. Primary epitaph transcriptions for Aeltere, Beveren bij Roeselare, and Languemarc. Print only &mdash; not digitised. Held at KBR Brussels and Ghent University Library.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Wikipedia. Louis of Praet.{' '}
            <a href="https://en.wikipedia.org/wiki/Louis_of_Praet" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Wikipedia, Louis of Praet</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Lauwens, Patrik. <em>Verhalen uit de genealogie Van Praet.</em> 2010.{' '}
            <a href="https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Lauwens, Verhalen uit de genealogie Van Praet (2010)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Nederland&rsquo;s Adelsboek. Vol. 6 (1908). &rsquo;s-Gravenhage: W.P. van Stockum en Zoon. Van Boetzelaer entry.{' '}
            <a href="https://archive.org/details/nederlandsadelsb28unse_4" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Internet Archive (1908 volume)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Buylaert, Frederik. <em>Repertorium van de Vlaamse adel (ca. 1350&ndash;ca. 1500).</em> Gent: Academia Press, 2011. Prosopographical register of Flemish noble families 1350&ndash;1500; the source for Josse de Flandre and cadet Praet branch data cited via FMG MedLands [881, 882]. See also by the same author: <em>Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen</em> (Brussels: Royal Academy, 2010), the accompanying narrative history.{' '}
            <a href="https://lib.ugent.be/nl/catalog/rug01:001699683" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ghent University Library catalogue</a>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <Link
            to="/research/louis-friese"
            style={{
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Back to Louis Friese Lineage
          </Link>
          <Link
            to="/research/bibliography"
            style={{
              color: 'var(--gold)',
              fontSize: '14px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginLeft: '1.5rem',
            }}
          >
            Full Bibliography &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
