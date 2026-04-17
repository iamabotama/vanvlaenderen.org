/**
 * pageMeta.ts
 *
 * Single source of truth for per-route SEO metadata.
 * Used by the prerender script (SSR) to inject head tags at build time,
 * and by react-helmet-async on the client for dynamic updates after hydration.
 */

export interface PageMeta {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
  ogType?: 'website' | 'article'
  ogImage?: string
}

const DEFAULT_IMAGE = 'https://vanvlaenderen.org/assets/hero-background-rVYnRAiM.jpg'

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Van Vlaenderen — Flemish Heritage & Family History Research',
    description: 'Genealogical research tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders (1330–1384). Fourteen generations documented from Meetjesland to America.',
    canonical: 'https://vanvlaenderen.org/',
    ogTitle: 'Van Vlaenderen — Flemish Heritage Research',
    ogDescription: 'Tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders. Fourteen generations, archival evidence, Y-DNA research.',
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
  },
  '/mill': {
    title: 'The Mill — Van Vlaenderen Family Origins | vanvlaenderen.org',
    description: 'The documented miller lineage of the Van Vlaenderen family from 1568 Ghent through East Flanders — Wassegem, Oostwinkel, Waarschoot, Boekhoute, and Bassevelde.',
    canonical: 'https://vanvlaenderen.org/mill/',
    ogTitle: 'The Mill — Van Vlaenderen Family Origins',
    ogDescription: 'Documented miller lineage from 1568 Ghent through East Flanders.',
    ogType: 'article',
  },
  '/name': {
    title: 'The Name — Where "Van Vlaenderen" Comes From | vanvlaenderen.org',
    description: "Analysis of the Van Vlaenderen surname: why it is comital identity, not a common toponym. Evidence from Victor van Vlaenderen's 1441 charter and the bastard children of Louis II de Male.",
    canonical: 'https://vanvlaenderen.org/name/',
    ogTitle: 'The Name — Where Van Vlaenderen Comes From',
    ogDescription: 'Comital identity, not a toponym. Evidence from the 1441 charter of Victor van Vlaenderen.',
    ogType: 'article',
  },
  '/name/surname-origins': {
    title: 'Four Functions, Three Clusters — The Van Vlaenderen Surname | vanvlaenderen.org',
    description: 'A primary source and distributional analysis of the Van Vlaenderen surname: four documentary functions, three geographic clusters across three centuries, and competing hypotheses for the name\'s origin.',
    canonical: 'https://vanvlaenderen.org/name/surname-origins/',
    ogTitle: 'Four Functions, Three Clusters — The Van Vlaenderen Surname',
    ogDescription: 'Distributional and documentary analysis testing the toponymic and bastard-line hypotheses for the Van Vlaenderen surname origin.',
    ogType: 'article',
  },
  '/research/nieus-seals': {
    title: 'Seals, Lions, and the Politics of a Surname | vanvlaenderen.org',
    description: 'How twelfth-century Flemish noble seal culture illuminates the political and dynastic weight of territorial designations — and what that means for the Van Vlaenderen surname.',
    canonical: 'https://vanvlaenderen.org/research/nieus-seals/',
    ogTitle: 'Seals, Lions, and the Politics of a Surname',
    ogDescription: 'Twelfth-century Flemish sigillography and the political meaning of territorial identity in the comital milieu.',
    ogType: 'article',
  },
  '/dna': {
    title: 'DNA Evidence — Y-DNA Research | vanvlaenderen.org',
    description: 'Y-DNA haplogroup research for the Van Vlaenderen patrilineal line. Big Y-700 results, R-FT1573 singleton branch, and the case for a single common ancestor.',
    canonical: 'https://vanvlaenderen.org/dna/',
    ogTitle: 'DNA Evidence — Van Vlaenderen Y-DNA Research',
    ogDescription: 'Y-DNA analysis placing the Van Vlaenderen line in haplogroup R-FT1573. Big Y-700 results and single-ancestor hypothesis.',
    ogType: 'article',
  },
  '/research': {
    title: 'Research Overview — Van Vlaenderen Archival Dossiers | vanvlaenderen.org',
    description: 'Overview of Van Vlaenderen archival research: the Victor line (Lord of Wessegem) and the Louis Friese / Praet line, both descending from Louis II de Male, Count of Flanders.',
    canonical: 'https://vanvlaenderen.org/research/',
    ogTitle: 'Research Overview — Van Vlaenderen Archival Dossiers',
    ogDescription: 'Two surname-bearing bastard lines of Louis II de Male: Victor van Vlaenderen and Louis Friese van Vlaenderen.',
    ogType: 'article',
  },
  '/research/victor': {
    title: 'Victor van Vlaenderen — Lord of Wessegem | vanvlaenderen.org',
    description: 'Victor van Vlaenderen: bastard son of Louis II de Male, Lord of Ursel and Wessegem, father of Lodewyc, Janne, and Adam van Vlaendren per the 1441/42 charter.',
    canonical: 'https://vanvlaenderen.org/research/victor/',
    ogTitle: 'Victor van Vlaenderen — Lord of Wessegem',
    ogDescription: 'Bastard son of Louis II de Male. Father of Lodewyc, Janne, and Adam van Vlaendren — documented in the 1441 charter.',
    ogType: 'article',
  },
  '/research/louis-friese': {
    title: 'Louis Friese van Vlaenderen — The Praet Line | vanvlaenderen.org',
    description: 'Louis Friese van Vlaenderen, Lord of Praet and Woestine: the second bastard line of Louis II de Male using the Van Vlaenderen surname. Ancestor of Lodewijk IV (Louis of Praet).',
    canonical: 'https://vanvlaenderen.org/research/louis-friese/',
    ogTitle: 'Louis Friese van Vlaenderen — The Praet Line',
    ogDescription: 'The Praet bastard line: Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece — extinct 1556.',
    ogType: 'article',
  },
  '/research/victor-dossier': {
    title: 'Victor van Vlaenderen — Archival Dossier | vanvlaenderen.org',
    description: 'Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence, FMG MedLands documentation, Hof van Wessegem heritage record, and the Alix van Boyeghem connection.',
    canonical: 'https://vanvlaenderen.org/research/victor-dossier/',
    ogTitle: 'Victor van Vlaenderen — Archival Dossier',
    ogDescription: 'Primary source evidence: the 1427 and 1441/42 charters, Wessegem heritage, and Victor\'s three natural sons.',
    ogType: 'article',
  },
  '/research/praet-dossier': {
    title: 'The Praet Line — Archival Dossier | vanvlaenderen.org',
    description: 'Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555). Sources, evidence levels, and open research questions.',
    canonical: 'https://vanvlaenderen.org/research/praet-dossier/',
    ogTitle: 'The Praet Line — Archival Dossier',
    ogDescription: 'From Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece. Primary and secondary sources for the Praet bastard line.',
    ogType: 'article',
  },
  '/research/praet-lineage-dossier': {
    title: 'Praet Lineage Detail — Van Vlaenderen Research | vanvlaenderen.org',
    description: 'Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV — the research control for Van Vlaenderen surname attribution.',
    canonical: 'https://vanvlaenderen.org/research/praet-lineage-dossier/',
    ogTitle: 'Praet Lineage Detail — Van Vlaenderen Research',
    ogDescription: 'Generational evidence for the Praet descent. Functions as a documented research control for Van Vlaenderen surname attribution.',
    ogType: 'article',
  },
  '/lineage': {
    title: 'Lineage — Fourteen Generations | vanvlaenderen.org',
    description: 'The documented American lineage of the Van Vlaenderen / Van Flandern family: fourteen generations from Jeremiah Van Vlaenderen (~1575) to the present, with archival deep-links.',
    canonical: 'https://vanvlaenderen.org/lineage/',
    ogTitle: 'Lineage — Fourteen Generations',
    ogDescription: 'Fourteen documented generations from Flanders to America. Archival deep-links for each ancestor.',
    ogType: 'article',
  },
  '/about': {
    title: 'About — Lions of Flanders Project | vanvlaenderen.org',
    description: "About the Lions of Flanders project: Michael and Constance Van Flandern's 15-year research into Flemish heritage, archival fieldwork in Belgium, and the path from Bassevelde to America.",
    canonical: 'https://vanvlaenderen.org/about/',
    ogTitle: 'About — Lions of Flanders Project',
    ogDescription: 'Fifteen years of research into a Flemish family name. Archival fieldwork in Ghent, Bruges, and the Meetjesland.',
    ogType: 'website',
  },
  '/research/gap-dossier': {
    title: 'The Documentary Gap, 1447–1580 | vanvlaenderen.org',
    description: 'The 130-year gap between Adam van Vlaendren (last attested 1447) and the Meetjesland parish cluster (fl. 1547–). Archival evidence in hand, searches completed, active targets, and three working hypotheses.',
    canonical: 'https://vanvlaenderen.org/research/gap-dossier/',
    ogTitle: 'The Documentary Gap, 1447–1580 — Van Vlaenderen Research',
    ogDescription: 'Named gap between the comital bastard lines and the Meetjesland parish cluster. Evidence in hand, active archival targets, and three working hypotheses.',
    ogType: 'article',
  },
  '/contact': {
    title: 'Contact — Van Vlaenderen Research | vanvlaenderen.org',
    description: 'Get in touch with the Van Vlaenderen research project. Share family connections, Y-DNA results, or archival findings related to the Van Vlaenderen / Van Flandern surname.',
    canonical: 'https://vanvlaenderen.org/contact/',
    ogTitle: 'Contact — Van Vlaenderen Research',
    ogType: 'website',
  },
}
