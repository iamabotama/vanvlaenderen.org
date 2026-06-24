/**
 * DocsPage — private working documents
 *
 * Not indexed: excluded from sitemap (not in prerender ROUTES),
 * blocked in robots.txt (Disallow: /docs), and not linked from nav.
 * Share the URL directly with collaborators.
 */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import researchTodo  from '../../docs/lions-of-flanders-todo.md?raw';
import readingList   from '../../docs/lions-of-flanders-reading-list.md?raw';
import analysisSessions from '../../docs/analysis-sessions.md?raw';
import websiteTodo   from '../../docs/vanvlaenderen.org-todo.md?raw';

// ── Styles ─────────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  minHeight: '100vh',
  background: 'var(--bg, #0d1117)',
  color: 'var(--text, #e6e6e6)',
  fontFamily: 'Georgia, serif',
  paddingBottom: '4rem',
};

const header: React.CSSProperties = {
  background: 'rgba(232, 184, 48, 0.06)',
  borderBottom: '1px solid rgba(232, 184, 48, 0.2)',
  padding: '1.5rem 2rem 1rem',
};

const tabBar: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  padding: '1rem 2rem 0',
  borderBottom: '1px solid rgba(232, 184, 48, 0.15)',
  flexWrap: 'wrap',
};

const tabBtn = (active: boolean): React.CSSProperties => ({
  background: active ? 'rgba(232, 184, 48, 0.15)' : 'transparent',
  border: active ? '1px solid rgba(232, 184, 48, 0.4)' : '1px solid rgba(255,255,255,0.1)',
  color: active ? '#e8b830' : '#aaa',
  padding: '0.4rem 1rem',
  borderRadius: '4px 4px 0 0',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontFamily: 'Georgia, serif',
  marginBottom: '-1px',
  transition: 'all 0.15s',
});

const content: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
};

// Markdown prose styles applied via a wrapper class
const mdWrap: React.CSSProperties = {
  lineHeight: 1.7,
  fontSize: '0.92rem',
};

// ── Curated Belgium Research Plan ─────────────────────────────────────────
// PII stripped: VRBO details, personal contact info for Rik, car hire details.
// All archival content preserved verbatim.

function BelgiumPlan() {
  return (
    <div style={mdWrap}>
      <h1 style={{ color: '#e8b830', borderBottom: '1px solid rgba(232,184,48,0.3)', paddingBottom: '0.5rem' }}>
        Belgium Genealogy Research Trip
      </h1>
      <p style={{ color: '#aaa', fontStyle: 'italic' }}>
        Constance Van Flandern | Michael Van Flandern<br />
        March 27 – April 3, 2026 · Bassevelde, Ghent, Aalter, Antwerp, Bruges
      </p>

      <h2 style={{ color: '#e8b830' }}>Trip Overview</h2>
      <p>Three research goals: (1) push the Van Vlaenderen lineage further back using pre-parish records — land registers, estate inventories, feudal court records, and schepenbank documents — particularly for the period 1450–1650; (2) gather evidence to determine whether the Meetjesland Van Vlaenderen families share a common origin with the noble Van Vlaenderen lines descending from the natural sons of Louis II de Male, Count of Flanders; and (3) absorb the landscape, architecture, and regional history that shaped our ancestors' lives.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.88rem' }}>
        <tbody>
          <tr><td style={{ padding: '4px 12px 4px 0', color: '#e8b830', whiteSpace: 'nowrap' }}>Base</td><td>Bassevelde</td></tr>
          <tr><td style={{ padding: '4px 12px 4px 0', color: '#e8b830', whiteSpace: 'nowrap' }}>Rijksarchief Gent</td><td>Tue &amp; Thu (by appt.) · <a href="mailto:Rijksarchief.Gent@arch.be" style={{ color: '#60a5fa' }}>Rijksarchief.Gent@arch.be</a></td></tr>
          <tr><td style={{ padding: '4px 12px 4px 0', color: '#e8b830', whiteSpace: 'nowrap' }}>FV Documentatiecentrum Aalter</td><td>Sat AM · <a href="mailto:archief@aalter.be" style={{ color: '#60a5fa' }}>archief@aalter.be</a></td></tr>
          <tr><td style={{ padding: '4px 12px 4px 0', color: '#e8b830', whiteSpace: 'nowrap' }}>FelixArchief Antwerp</td><td>Wed (Rik meeting)</td></tr>
          <tr><td style={{ padding: '4px 12px 4px 0', color: '#e8b830', whiteSpace: 'nowrap' }}>Bruges archive</td><td>Thu AM · Case ref: 2026/0451</td></tr>
        </tbody>
      </table>

      <blockquote style={{ borderLeft: '3px solid #e8b830', paddingLeft: '1rem', color: '#aaa', margin: '1rem 0' }}>
        <strong>IMPORTANT:</strong> Rijksarchief Gent reading room is open Tuesday, Wednesday, and Thursday ONLY — by appointment. Book both slots (Tue Mar 31 + Thu Apr 2) now via email. Confirm Easter week opening. Pre-request specific collections (see Research Plan).
      </blockquote>

      {/* ── Location 1: Rijksarchief Gent ── */}
      <h2 style={{ color: '#e8b830', marginTop: '2rem' }}>Location 1 — Rijksarchief Gent</h2>
      <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Bagattenstraat 43, 9000 Gent · Open Tue/Wed/Thu by appointment · Visit: Tuesday March 31</p>
      <p>Twenty documents pre-requested across two research threads. Michael works Goal 1 (pre-parish records); Constance works Goal 2 (comital connection). Reconvene at midday.</p>

      <h3 style={{ color: '#60a5fa' }}>Michael — Goal 1: Pre-Parish Records (M-1 through M-10)</h3>

      {[
        { id: 'M-1', title: 'Ambacht Boekhoute — Landboeken (AR22)', body: 'Bunderboek van Bassevelde; Evenboek van den ambachte van Bouchaute (Boekhoute, Bassevelde, Oosteeklo); kopie landboek 1679 (1694). Per-parcel owner and tenant listings. Search all Van Vlaenderen entries; note neighbouring parcels.', note: 'From early 17th century, landboeken were accompanied by parcel maps — often the oldest cartographic source showing a complete village. Ask whether maps survive for Bassevelde.' },
        { id: 'M-2', title: 'Ambacht Boekhoute — Wettelijke Passeringen (AR22, sectie III.A.3), 1538–1650', body: 'Legal deeds: property sales, leases, inheritances, debts. Search Van Vlaenderen as buyer, seller, witness, or party in Bassevelde, Boekhoute, Oosteeklo.' },
        { id: 'M-3', title: 'Ambacht Boekhoute — Procesdossiers (AR22, sectie III.B.9), 1538–1650', body: 'Court cases before the vierschaar and in appeal before the Raad van Vlaanderen. Search Van Vlaenderen as plaintiff or defendant.' },
        { id: 'M-4', title: 'Ambacht Assenede — Schepenbank en Wettelijke Passeringen, 1500–1650', body: 'Legal deeds and court records. Search Van Vlaenderen as buyer, seller, witness, or party. Also ask archivist about dénombrements referencing Van Vlaenderen tenants in the Leenhof Ten Hulle te Bassevelde.' },
        { id: 'M-5', title: 'Ambacht Assenede — Leenhof Ten Hulle te Bassevelde, 13th century–1650', body: 'Feudal court records going back to the 13th century. Search dénombrements and lease registers for Van Vlaenderen as feudal tenant or leaseholder.' },
        { id: 'M-6', title: 'Kasselrij Oudburg — Rekeningen van de Baljuws', body: 'Series 1009–1013 (1605–1710); nr. 1010 (Jacques Adornes, 1558–1559). Bailiff accounts sometimes name prominent landholders by parish. Search Van Vlaenderen in Bassevelde, Oostwinkel, Waarschoot.' },
        { id: 'M-7', title: 'Kasselrij Oudburg — Denombrement van Paarden en Koeien, nr. 819 (1580–1589)', body: 'Per-parish livestock census naming farm operators. The generation immediately before Jeremiah (~1575) — high potential for naming Van Vlaenderen farmers across Meetjesland parishes.' },
        { id: 'M-8', title: 'Ambacht Waarschoot — Kadaster/Terriers/Zettingboeken + Wezenkamer (AR190, sectie II.A + IV), 1571–1680', body: 'Tax registers and orphan chamber records for Waarschoot. Wezenkamer (orphan chamber) records document minor children\'s property and guardianship when a parent died — often name grandparents and other relatives. Relevant to Petrus Van Vlaenderen (married Waarschoot 1655) and Livinus Van Vlaenderen (born Waarschoot 1658).' },
        { id: 'M-9', title: 'Priorij van Waarschoot — Renteboeken en Eigendomsregisters', body: 'Rental rolls and property registers from the priory. The priory held extensive land in Waarschoot and its records may name Van Vlaenderen tenants predating the parish registers. Ask archivist what survives.' },
        { id: 'M-10', title: 'Ambacht Ursel — Staten van Goed: Index + Vroegste Reeks (AR181)', body: 'Nr. 516 (index on staten van goed and wettelijke passeringen, 1614–1742) — consult this first as a roadmap to the entire Ursel collection. Then nrs. 183–199 (staten van goed, voogdijrekeningen, akten van verdelingen, 1573–1689, with index) — earliest series, reaching back to 1573.', note: 'AR181 also contains item nr. 627: \'Pierre van Vlaendren c. Pierre Bogaert, 1786\' — a Van Vlaenderen litigating in the Ursel/Wessegem jurisdiction as late as 1786. Flag for Constance.' },
      ].map(req => (
        <div key={req.id} style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(96,165,250,0.3)' }}>
          <p style={{ margin: '0 0 0.25rem', fontWeight: 'bold' }}><span style={{ color: '#60a5fa' }}>{req.id}</span> — {req.title}</p>
          <p style={{ margin: '0 0 0.25rem', fontSize: '0.88rem' }}>{req.body}</p>
          {req.note && <p style={{ margin: '0.25rem 0 0', fontSize: '0.83rem', color: '#e8b830', fontStyle: 'italic' }}>⚑ {req.note}</p>}
        </div>
      ))}

      <h3 style={{ color: '#a78bfa', marginTop: '2rem' }}>Constance — Goal 2: Comital Connection (C-1 through C-10)</h3>

      {[
        { id: 'C-1', title: 'Oorkonden Graven van Vlaanderen — Testament Victor van Vlaenderen, 1430', body: 'Primary documentary target for the noble connection. The testament of \'her Victor van Vlaendren\' named brothers Robert and Charles van Vlaenderen as executors and granted the Lordship of Wessegem. Ask specifically whether an original, copy, or regest survives in the charter collection.' },
        { id: 'C-2', title: 'Oorkonden Graven van Vlaanderen — Heerlijkheid Wessegem/Ursel, 15th–16th century', body: 'Any charters or regests referencing the Lordship of Wessegem and the Van Vlaenderen name. Seeking descendants of Victor: sons Lodewyc, Janne, and Adam van Vlaenderen.' },
        { id: 'C-3', title: 'Oorkonden Graven van Vlaanderen — Heerlijkheid Praet, 15th–16th century', body: 'Records referencing cadet branches of the Praet line: Anton, Josse (Joos), and Jacob van Vlaenderen — individuals who may have transitioned from the noble Praet line into the Meetjesland gentry.' },
        { id: 'C-4', title: 'Ambacht Ursel — Leenhof van Wessegem; Schepenbank van Wessegem; Wessegemse Renten; Wettelijke Passeringen nr. 395 (AR181)', body: 'Feudal court records, schepenbank registers, and rent registers of the Lordship of Wessegem — Victor van Vlaenderen\'s own lordship. Nr. 395 (1671–1681) explicitly covers Wessegem and Ursel \'t Vrije. Search all Van Vlaenderen entries. See also procesdossier nr. 627: Pierre van Vlaendren c. Pierre Bogaert, 1786.' },
        { id: 'C-5', title: 'Ambacht Ursel — Wettelijke Passeringen, Vroegste Reeksen (AR181)', body: 'Nr. 401 (1542, 1601–1619) — PRIORITY: earliest acts going back to 1542, covering all lordships within Ambacht Ursel including Wessegem. Nr. 388 (1619–1643, with index nr. 389); nr. 390 (1642–1652); nr. 391 (1642–1665).' },
        { id: 'C-6', title: 'Ambacht Ursel — Ferieboeken (Procedurerollen) (AR181)', body: 'Nr. 531 (1586–1599); nr. 532 (1599–1607); nr. 533 (1609–1612). Court procedure rolls naming all parties in local cases — systematic source for the Van Vlaenderen surname in the Ursel/Wessegem jurisdiction in the generations immediately after Jeremiah (~1575).' },
        { id: 'C-7', title: 'Staten van Goed — Heerlijkheid en Baronie Praet met Oedelem', body: 'Estate inventories from the Praet lordship jurisdiction. Any Van Vlaenderen as tenant, heir, or party before 1600 would be a strong circumstantial bridge to the noble Flanders-Praet line. Ask archivist which item numbers cover the period before 1600.' },
        { id: 'C-8', title: 'Sint-Baafsabdij — Heerlijkheidsarchief en Renteboeken, Meetjesland', body: 'The Sint-Baafsabdij controlled vast East Flemish landholdings. Its rental rolls and lordship registers may name Van Vlaenderen tenants in the 15th–16th century in Bassevelde, Oostwinkel, Waarschoot, or Ursel. Ask archivist to advise on relevant items.' },
        { id: 'C-9', title: 'Raad van Vlaanderen — Procesdossiers', body: 'High court appeals where a Van Vlaenderen party disputes land or inheritance in Bassevelde, Oostwinkel, Waarschoot, Ursel, or Boekhoute. Court dossiers can document family relationships not visible in parish records. Ask archivist to advise on available indices.' },
        { id: 'C-10', title: 'Oorkonden Graven van Vlaanderen — Erkenning Natuurlijke Kinderen Lodewijk II van Male', body: 'Dotation or recognition charters for Victor van Vlaenderen and Louis \'Friese\' van Vlaenderen — would name the mother, date of recognition, and lands granted. Ask archivist to confirm whether such documents survive in the charter collection.' },
      ].map(req => (
        <div key={req.id} style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(167,139,250,0.3)' }}>
          <p style={{ margin: '0 0 0.25rem', fontWeight: 'bold' }}><span style={{ color: '#a78bfa' }}>{req.id}</span> — {req.title}</p>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>{req.body}</p>
        </div>
      ))}

      <p style={{ fontStyle: 'italic', color: '#aaa', fontSize: '0.85rem' }}>
        Constance: after working document requests, use the AGATHA reading room terminals to search Van Vlaenderen across East Flemish collections not covered above. This costs no document slot.
      </p>

      {/* ── Location 2: Aalter ── */}
      <h2 style={{ color: '#e8b830', marginTop: '2.5rem' }}>Location 2 — FV Documentatiecentrum Aalter</h2>
      <p style={{ color: '#aaa', fontSize: '0.85rem' }}>ArtA'A, Stationsplein 25, 9880 Aalter · Open: Tue &amp; Thu 9:00–19:00 | Sat 9:00–13:00 · €4 day entry (cash)</p>
      <p>Your visit: Saturday, March 28, 9:00–13:00. The Meetjesland genealogy specialists. Use this visit to identify specific document numbers before your Rijksarchief days.</p>
      <ul style={{ fontSize: '0.88rem', lineHeight: 1.8 }}>
        <li>Staten van Goed — Ambacht Assenede I (1521–1624) and II (1625–1681) — Indexed by Marijn Claeys. Search all Van Vlaenderen entries. Note reference numbers for original document requests at Rijksarchief</li>
        <li>Staten van Goed — Ambacht Boekhoute I–III — Covers the Bassevelde jurisdiction directly</li>
        <li>Staten van Goed — Ambacht Waarschoot, Oostwinkel en Ronsele — Three volumes; covers 17th-century ancestral parishes</li>
        <li>Staten van Goed — Heerlijkheid en Baronie Praet met Oedelem — Indexed by R.L. Dewulf-Heus. Any Van Vlaenderen entry here connects directly to the noble Praet line</li>
        <li>Processed parish registers — Oostwinkel, Waarschoot, Bassevelde, Boekhoute</li>
        <li>Microfilm registers — Oostwinkel and Ronsele available on microfilm here</li>
      </ul>
      <p style={{ color: '#e8b830', fontStyle: 'italic', fontSize: '0.85rem' }}>⚑ Ask the volunteers specifically about Van Vlaenderen. These are local specialists who may know of references, published family histories, or other researchers working on the same name.</p>

      {/* ── Location 3: Antwerp ── */}
      <h2 style={{ color: '#e8b830', marginTop: '2.5rem' }}>Location 3 — FelixArchief Antwerp + Meeting with Rik</h2>
      <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Oude Leeuwenrui 29, 2000 Antwerpen · Wednesday, April 1</p>
      <p>Primarily a meeting with Rik rather than independent archive research. Key questions:</p>
      <ul style={{ fontSize: '0.88rem', lineHeight: 1.8 }}>
        <li>Penningkohieren — 16th-century tax registers for East Flanders parishes — do any survive at FelixArchief that aren't at Rijksarchief Gent?</li>
        <li>Raad van Vlaanderen records — High court appeals from East Flemish families sometimes document land disputes and chains of ownership extending back before the parish era</li>
        <li>Van Vlaenderen in Antwerp records — The surname appears in Brussels (Laurent, 1645) and Ghent independently of the Meetjesland line — has Rik encountered it in any Antwerp-area sources?</li>
        <li>Regional expertise — Rik may know of published genealogies, heemkundige studies, or other researchers working on Meetjesland families that haven't surfaced in your own searches</li>
      </ul>

      {/* ── Location 4: Bruges ── */}
      <h2 style={{ color: '#e8b830', marginTop: '2.5rem' }}>Location 4 — Bruges State Archives (Rijksarchief Brugge)</h2>
      <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Thursday, April 2 · Appointment: webshop.arch.be/reservations · Case reference: 2026/0451 · Two seats: Michael + Constance</p>
      <p>The Bruges archivist has confirmed two Joos Van Vlaenderen estate records from 1547 and 1549 in the Brugse Vrije collection — the oldest known documents naming a Van Vlaenderen in the Meetjesland / West Flemish borderzone.</p>

      {[
        { id: 'B-1', title: 'TBO 184 nr. 21300 (CONFIRMED)', body: 'Brugse Vrije. Staten van Goed. Eerste Reeks. Estate/guardianship account relating to Joos Van Vlaenderen, 1547. Read carefully for heirs, guardians, witnesses, property location, and any further Van Vlaenderen names.' },
        { id: 'B-2', title: 'TBO 184 nr. 21302 (CONFIRMED)', body: 'Brugse Vrije. Staten van Goed. Eerste Reeks. Estate/guardianship account relating to Joos Van Vlaenderen, 1549. Two records two years apart suggest ongoing guardianship — possibly for minor children after Joos\'s death. Calculate birth years of any named children: could they align with Jeremiah (~1575)?', note: 'Key questions in both documents: What is the geographic location of Joos\'s property — does it fall within the Meetjesland corridor? Who are the heirs, guardians, and witnesses? Are any other Van Vlaenderen individuals named?' },
        { id: 'B-3', title: 'TBO 184 — Adjacent Numbers or Further Van Vlaenderen Entries', body: 'Ask the archivist whether numbers 21299, 21301, or 21303 relate to the same estate, or whether any other Van Vlaenderen entries appear elsewhere in TBO 184.' },
        { id: 'B-4', title: 'Brugse Vrije — Leenboeken (Feudal Registers)', body: 'Any feudal register entries naming Van Vlaenderen as landholder or tenant in parishes adjacent to Bassevelde, Oostwinkel, or Waarschoot, 15th–16th century. The Brugse Vrije leenboeken extend back to the early 15th century and could reach toward Victor van Vlaenderen\'s generation.' },
        { id: 'B-5', title: 'Brugse Vrije — Schepenbank Wettelijke Passeringen, c. 1530–1560', body: 'Legal deeds recorded before the Brugse Vrije court in the decades preceding Joos\'s 1547/1549 estate records. Seeking Joos Van Vlaenderen as an active adult in property transactions, loans, or witness appearances that would name family members and establish his geographic location.' },
      ].map(req => (
        <div key={req.id} style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(232,184,48,0.35)' }}>
          <p style={{ margin: '0 0 0.25rem', fontWeight: 'bold' }}><span style={{ color: '#e8b830' }}>{req.id}</span> — {req.title}</p>
          <p style={{ margin: '0 0 0.25rem', fontSize: '0.88rem' }}>{req.body}</p>
          {req.note && <p style={{ margin: '0.25rem 0 0', fontSize: '0.83rem', color: '#e8b830', fontStyle: 'italic' }}>⚑ {req.note}</p>}
        </div>
      ))}

      <h3 style={{ color: '#e8b830' }}>Research Strategy — Bruges</h3>
      <p style={{ fontSize: '0.88rem' }}>Constance: work B-1 and B-2 methodically — transcribe every personal name, property location, and relationship. Michael: work B-3 through B-5 with the archivist's guidance. Midday check-in to cross-reference findings.</p>
      <ul style={{ fontSize: '0.88rem', lineHeight: 1.8 }}>
        <li>Transcribe all personal names in full — every heir, guardian, witness, and creditor</li>
        <li>Note all property locations — does any fall within the Meetjesland corridor linking Bassevelde and Oostwinkel?</li>
        <li>If minor children are named, calculate approximate birth years — alignment with Jeremiah (~1575) or Noe (~1605) would be a major breakthrough</li>
        <li>Note any Van Vlaenderen individuals other than Joos</li>
      </ul>
    </div>
  );
}

// ── Markdown renderer ───────────────────────────────────────────────────────

function MarkdownDoc({ source }: { source: string }) {
  return (
    <div style={{ ...mdWrap, overflowX: 'auto' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 style={{ color: '#e8b830', borderBottom: '1px solid rgba(232,184,48,0.3)', paddingBottom: '0.4rem', marginTop: '2rem' }}>{children}</h1>,
          h2: ({ children }) => <h2 style={{ color: '#e8b830', marginTop: '1.75rem' }}>{children}</h2>,
          h3: ({ children }) => <h3 style={{ color: '#60a5fa', marginTop: '1.25rem' }}>{children}</h3>,
          h4: ({ children }) => <h4 style={{ color: '#a78bfa', marginTop: '1rem' }}>{children}</h4>,
          a: ({ href, children }) => <a href={href} style={{ color: '#60a5fa' }} target="_blank" rel="noopener noreferrer">{children}</a>,
          code: ({ children }) => <code style={{ background: 'rgba(255,255,255,0.08)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.85em', fontFamily: 'monospace' }}>{children}</code>,
          blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid rgba(232,184,48,0.4)', paddingLeft: '1rem', color: '#aaa', margin: '1rem 0' }}>{children}</blockquote>,
          table: ({ children }) => <table style={{ borderCollapse: 'collapse', width: '100%', margin: '1rem 0', fontSize: '0.88rem' }}>{children}</table>,
          th: ({ children }) => <th style={{ textAlign: 'left', padding: '6px 10px', background: 'rgba(232,184,48,0.1)', borderBottom: '1px solid rgba(232,184,48,0.3)', color: '#e8b830' }}>{children}</th>,
          td: ({ children }) => <td style={{ padding: '5px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{children}</td>,
          li: ({ children }) => <li style={{ marginBottom: '0.2rem' }}>{children}</li>,
          hr: () => <hr style={{ border: 'none', borderTop: '1px solid rgba(232,184,48,0.15)', margin: '2rem 0' }} />,
          strong: ({ children }) => <strong style={{ color: '#e0e0e0' }}>{children}</strong>,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}

// ── Page component ──────────────────────────────────────────────────────────

const TABS = [
  { id: 'research',  label: 'Research To-Do' },
  { id: 'sources',   label: 'Sources & Reading' },
  { id: 'analysis',  label: 'Analysis Log' },
  { id: 'website',   label: 'Website Backlog' },
  { id: 'belgium',   label: 'Belgium Trip 2026' },
] as const;

type TabId = typeof TABS[number]['id'];

export default function DocsPage() {
  const [active, setActive] = useState<TabId>('research');

  return (
    <div style={page}>
      <div style={header}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#e8b830', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Van Vlaenderen · Working Documents
        </div>
        <h1 style={{ margin: 0, fontSize: '1.4rem', color: '#e6e6e6' }}>Research &amp; Project Files</h1>
        <p style={{ margin: '0.35rem 0 0', fontSize: '0.82rem', color: '#666' }}>
          Private — not indexed or linked from the public site. Share URL directly with collaborators.
        </p>
        <p style={{ margin: '0.6rem 0 0', fontSize: '0.85rem' }}>
          <a
            href="/r/e1e3b0852b/"
            style={{ color: '#e8b830', textDecoration: 'none', borderBottom: '1px solid rgba(232,184,48,0.4)' }}
          >
            → Records database (live editor)
          </a>
          <span style={{ color: '#666', marginLeft: '0.6rem' }}>Supabase login required.</span>
        </p>
      </div>

      <div style={tabBar}>
        {TABS.map(tab => (
          <button key={tab.id} style={tabBtn(active === tab.id)} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={content}>
        {active === 'research'  && <MarkdownDoc source={researchTodo} />}
        {active === 'sources'   && <MarkdownDoc source={readingList} />}
        {active === 'analysis'  && <MarkdownDoc source={analysisSessions} />}
        {active === 'website'   && <MarkdownDoc source={websiteTodo} />}
        {active === 'belgium'   && <BelgiumPlan />}
      </div>
    </div>
  );
}
