export type EvidenceStatus = 'documented' | 'partial' | 'inferred' | 'modern';

export interface ArchiveRecord {
  label: string;       // e.g. "1685 Bassevelde"
  url?: string;        // optional deep link to archive image
}

export interface AncestorRecord {
  id: number;
  generation: string;  // Roman numeral label, e.g. "I", "XIV"
  name: string;
  born: string;        // display string, may be approximate e.g. "~1605–1610"
  parish: string;
  status: EvidenceStatus;

  birthRecord?: ArchiveRecord;
  marriageRecord?: ArchiveRecord;
  deathRecord?: ArchiveRecord;

  comment?: string;    // researcher note, shown in detail panel
}
