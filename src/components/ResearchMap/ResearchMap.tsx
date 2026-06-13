import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Polyline, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './ResearchMap.module.css';

/* ── Colour palette (site design system) ─────────────────────────────── */
const C = {
  gold: '#c4a55a',
  goldMuted: '#a08840',
  cream: '#f0e8d0',
  dark: '#0a0804',
  red: '#c0392b',
  blue: '#5b8fb9',
  greenMuted: '#5a8a5a',   /* muted green for "complete" */
  amber: '#d4a830',
  purple: '#8b6bb0',
  textMuted: '#8a90a0',
};

/* ── Parish coordinate data ──────────────────────────────────────────── */
interface ParishData {
  name: string;
  lat: number;
  lng: number;
  births1600s: number;
  births1700s: number;
  birthsTotal: number;
  researchStatus: 'complete' | 'in-progress' | 'not-started' | 'searched-none';
  notes?: string;
}

const PARISHES: ParishData[] = [
  { name: 'Bassevelde', lat: 51.2250, lng: 3.7500, births1600s: 14, births1700s: 16, birthsTotal: 30, researchStatus: 'complete', notes: 'Core parish. Ancestors found.' },
  { name: 'Boekhoute', lat: 51.2500, lng: 3.7833, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'complete', notes: 'Civil records only (1857+). Ancestors found.' },
  { name: 'Waarschoot', lat: 51.1333, lng: 3.6167, births1600s: 10, births1700s: 0, birthsTotal: 10, researchStatus: 'complete', notes: 'Ancestors found. Livinus b. 1658.' },
  { name: 'Oostwinkel', lat: 51.1167, lng: 3.5833, births1600s: 38, births1700s: 35, birthsTotal: 73, researchStatus: 'complete', notes: 'Ancestors found. Petrus b. 1634.' },
  { name: 'Ursel', lat: 51.1000, lng: 3.5333, births1600s: 0, births1700s: 30, birthsTotal: 30, researchStatus: 'complete', notes: 'Wessegem seigneurie. Victor\'s lordship.' },
  { name: 'Zomergem', lat: 51.1167, lng: 3.5667, births1600s: 0, births1700s: 1, birthsTotal: 1, researchStatus: 'complete' },
  { name: 'Lembeke', lat: 51.2000, lng: 3.6167, births1600s: 1, births1700s: 2, birthsTotal: 3, researchStatus: 'complete' },
  { name: 'Sleidinge', lat: 51.1500, lng: 3.7000, births1600s: 32, births1700s: 46, birthsTotal: 78, researchStatus: 'complete' },
  { name: 'Kaprijke', lat: 51.2167, lng: 3.6333, births1600s: 0, births1700s: 16, birthsTotal: 16, researchStatus: 'complete' },
  { name: 'Evergem', lat: 51.1167, lng: 3.7000, births1600s: 20, births1700s: 17, birthsTotal: 37, researchStatus: 'in-progress' },
  { name: 'Eeklo', lat: 51.1833, lng: 3.5667, births1600s: 11, births1700s: 13, birthsTotal: 24, researchStatus: 'complete' },
  { name: 'Ertvelde', lat: 51.1833, lng: 3.7333, births1600s: 26, births1700s: 50, birthsTotal: 76, researchStatus: 'complete' },
  { name: 'Adegem', lat: 51.2000, lng: 3.5000, births1600s: 5, births1700s: 30, birthsTotal: 35, researchStatus: 'complete' },
  { name: 'Bouchout', lat: 51.2333, lng: 3.7167, births1600s: 0, births1700s: 30, birthsTotal: 30, researchStatus: 'complete' },
  { name: 'Oosteeklo', lat: 51.2000, lng: 3.7833, births1600s: 0, births1700s: 10, birthsTotal: 10, researchStatus: 'complete' },
  { name: 'Ronsele', lat: 51.0833, lng: 3.5667, births1600s: 2, births1700s: 18, birthsTotal: 20, researchStatus: 'complete' },
  { name: 'Maldegem', lat: 51.2167, lng: 3.4333, births1600s: 0, births1700s: 11, birthsTotal: 11, researchStatus: 'complete' },
  { name: 'Sint-Laureins', lat: 51.2500, lng: 3.5500, births1600s: 0, births1700s: 9, birthsTotal: 9, researchStatus: 'complete' },
  { name: 'Lotenhulle', lat: 51.0667, lng: 3.5167, births1600s: 4, births1700s: 0, birthsTotal: 4, researchStatus: 'complete' },
  { name: 'Hansbeke', lat: 51.0833, lng: 3.5500, births1600s: 5, births1700s: 0, birthsTotal: 5, researchStatus: 'complete' },
  { name: 'Vinkt', lat: 51.0333, lng: 3.5333, births1600s: 1, births1700s: 1, birthsTotal: 2, researchStatus: 'complete' },
  { name: 'Wondelgem', lat: 51.0833, lng: 3.7167, births1600s: 15, births1700s: 24, birthsTotal: 39, researchStatus: 'complete' },
  { name: 'Drongen', lat: 51.0500, lng: 3.6500, births1600s: 0, births1700s: 7, birthsTotal: 7, researchStatus: 'complete' },
  { name: 'Destelbergen', lat: 51.0500, lng: 3.8000, births1600s: 8, births1700s: 0, birthsTotal: 8, researchStatus: 'complete' },
  { name: 'Mariakerke', lat: 51.0667, lng: 3.6833, births1600s: 0, births1700s: 12, birthsTotal: 12, researchStatus: 'complete' },
  { name: 'Merendree', lat: 51.0833, lng: 3.5833, births1600s: 0, births1700s: 2, birthsTotal: 2, researchStatus: 'complete' },
  { name: 'Oedelem', lat: 51.1500, lng: 3.3500, births1600s: 0, births1700s: 6, birthsTotal: 6, researchStatus: 'complete', notes: 'Praet lordship location.' },
  { name: 'Zelzate', lat: 51.2000, lng: 3.8167, births1600s: 0, births1700s: 2, birthsTotal: 2, researchStatus: 'complete' },
  { name: 'Aalter', lat: 51.0833, lng: 3.4500, births1600s: 2, births1700s: 0, birthsTotal: 2, researchStatus: 'not-started' },
  { name: 'Assenede', lat: 51.2333, lng: 3.7500, births1600s: 0, births1700s: 41, birthsTotal: 41, researchStatus: 'complete' },
  { name: 'Sint-Martens-Leerne', lat: 51.0167, lng: 3.5667, births1600s: 1, births1700s: 0, birthsTotal: 1, researchStatus: 'complete' },
  { name: 'Lovendegem', lat: 51.1000, lng: 3.6000, births1600s: 0, births1700s: 1, birthsTotal: 1, researchStatus: 'in-progress' },
  { name: 'Knesselare', lat: 51.1333, lng: 3.4833, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'searched-none', notes: '1517 Praet charter. Searched, none found.' },
  { name: 'Ghent', lat: 51.0500, lng: 3.7200, births1600s: 26, births1700s: 0, birthsTotal: 26, researchStatus: 'not-started', notes: 'Multiple parish records.' },
  { name: 'Nevele', lat: 51.0500, lng: 3.5500, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'not-started' },
  { name: 'Poeke', lat: 51.0500, lng: 3.4500, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'not-started' },
  { name: 'Afsnee', lat: 51.0333, lng: 3.6667, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'not-started' },
  { name: 'Sint-Martens-Latem', lat: 51.0167, lng: 3.6333, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'not-started' },
  { name: 'Wessegem', lat: 51.1050, lng: 3.5280, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: 'not-started', notes: 'Victor\'s seigneurie. Now part of Ursel.' },
];

/* ── Medieval anchor points ──────────────────────────────────────────── */
interface MedievalAnchor {
  name: string;
  lat: number;
  lng: number;
  label: string;
  date: string;
}

const MEDIEVAL_ANCHORS: MedievalAnchor[] = [
  { name: 'Wessegem/Ursel', lat: 51.1050, lng: 3.5280, label: 'Victor\'s Seigneurie', date: 'c.1399\u20131431' },
  { name: 'Biervliet', lat: 51.3333, lng: 3.7333, label: 'Victor: Captain of Biervliet', date: 'c.1400s' },
  { name: 'Oedelem/Praet', lat: 51.1500, lng: 3.3500, label: 'Praet Lordship', date: 'c.1373\u20131555' },
  { name: 'Tielt', lat: 50.9833, lng: 3.3333, label: 'Robbrecht Van Vlaendren', date: '1418\u20131432' },
  { name: 'Brugse Vrije', lat: 51.2000, lng: 3.2167, label: 'Joos van Vlaenderen (wardship file)', date: '1545\u20131549' },
  { name: 'Knesselare', lat: 51.1333, lng: 3.4833, label: '1517: Praet fiefs at Knesselare', date: '1517' },
];

/* ── Lineage trail ───────────────────────────────────────────────────── */
const LINEAGE_TRAIL: [number, number][] = [
  [51.1167, 3.5833], // Oostwinkel
  [51.1333, 3.6167], // Waarschoot
  [51.2250, 3.7500], // Bassevelde
  [51.2500, 3.7833], // Boekhoute
];

const LINEAGE_LABELS = [
  { name: 'Petrus (b. 1634)', lat: 51.1167, lng: 3.5833 },
  { name: 'Livinus (b. 1658)', lat: 51.1333, lng: 3.6167 },
  { name: 'Petrus Raphael (b. 1685)', lat: 51.2250, lng: 3.7500 },
  { name: 'Livinus (b. 1740, Bouchout)', lat: 51.2500, lng: 3.7833 },
];

/* ── Helpers ─────────────────────────────────────────────────────────── */
function radiusForCount(count: number): number {
  if (count === 0) return 4;
  if (count <= 5) return 6;
  if (count <= 15) return 9;
  if (count <= 30) return 12;
  if (count <= 50) return 15;
  return 18;
}

function statusColor(status: string): string {
  switch (status) {
    case 'complete': return C.greenMuted;
    case 'in-progress': return C.amber;
    case 'not-started': return C.textMuted;
    case 'searched-none': return C.red;
    default: return C.textMuted;
  }
}

function statusLabel(status: string): string {
  switch (status) {
    case 'complete': return 'Births searched';
    case 'in-progress': return 'In progress';
    case 'not-started': return 'Not started';
    case 'searched-none': return 'Searched \u2014 none found';
    default: return status;
  }
}

/* ── Map bounds fitter ───────────────────────────────────────────────── */
function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(
      [[50.95, 3.20], [51.36, 3.90]],
      { padding: [20, 20] }
    );
  }, [map]);
  return null;
}

/* ── Main component ──────────────────────────────────────────────────── */
type CenturyFilter = '1600s' | '1700s' | 'both';
type LayerToggle = { surnames: boolean; trail: boolean; medieval: boolean; coverage: boolean };

export default function ResearchMap() {
  const [century, setCentury] = useState<CenturyFilter>('both');
  const [layers, setLayers] = useState<LayerToggle>({
    surnames: true,
    trail: true,
    medieval: true,
    coverage: false,
  });

  const toggleLayer = (key: keyof LayerToggle) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredParishes = useMemo(() => {
    return PARISHES.map(p => {
      let count: number;
      switch (century) {
        case '1600s': count = p.births1600s; break;
        case '1700s': count = p.births1700s; break;
        default: count = p.birthsTotal;
      }
      return { ...p, displayCount: count };
    });
  }, [century]);

  // Merge Wessegem into Ursel (offset slightly)
  const displayParishes = useMemo(() => {
    return filteredParishes.map(p => {
      if (p.name === 'Wessegem') {
        return { ...p, lat: p.lat + 0.008, lng: p.lng - 0.008 };
      }
      return p;
    });
  }, [filteredParishes]);

  return (
    <div className={styles.mapWrapper}>
      {/* ── Controls ──────────────────────────────────────────────── */}
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Century</span>
          <div className={styles.toggleGroup}>
            {(['1600s', '1700s', 'both'] as CenturyFilter[]).map(c => (
              <button
                key={c}
                className={`${styles.toggleBtn} ${century === c ? styles.toggleActive : ''}`}
                onClick={() => setCentury(c)}
              >
                {c === 'both' ? 'All' : c}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Layers</span>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${layers.surnames ? styles.toggleActive : ''}`}
              onClick={() => toggleLayer('surnames')}
            >
              Surnames
            </button>
            <button
              className={`${styles.toggleBtn} ${layers.trail ? styles.toggleActive : ''}`}
              onClick={() => toggleLayer('trail')}
            >
              Lineage
            </button>
            <button
              className={`${styles.toggleBtn} ${layers.medieval ? styles.toggleActive : ''}`}
              onClick={() => toggleLayer('medieval')}
            >
              Medieval
            </button>
            <button
              className={`${styles.toggleBtn} ${layers.coverage ? styles.toggleActive : ''}`}
              onClick={() => toggleLayer('coverage')}
            >
              Coverage
            </button>
          </div>
        </div>
      </div>

      {/* ── Map ───────────────────────────────────────────────────── */}
      <MapContainer
        className={styles.map}
        center={[51.15, 3.60]}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <FitBounds />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Layer 1: Surname presence markers */}
        {layers.surnames && displayParishes.map(p => (
          p.displayCount > 0 && (
            <CircleMarker
              key={`surname-${p.name}`}
              center={[p.lat, p.lng]}
              radius={radiusForCount(p.displayCount)}
              pathOptions={{
                fillColor: C.gold,
                fillOpacity: 0.7,
                color: C.cream,
                weight: 1,
                opacity: 0.8,
              }}
            >
              <Popup>
                <div className={styles.popup}>
                  <strong>{p.name}</strong>
                  <span>{p.displayCount} birth record{p.displayCount !== 1 ? 's' : ''}</span>
                  {p.births1600s > 0 && <span className={styles.popupDetail}>1600s: {p.births1600s}</span>}
                  {p.births1700s > 0 && <span className={styles.popupDetail}>1700s: {p.births1700s}</span>}
                  {p.notes && <span className={styles.popupNote}>{p.notes}</span>}
                </div>
              </Popup>
            </CircleMarker>
          )
        ))}

        {/* Searched-none markers */}
        {layers.surnames && displayParishes.map(p => (
          p.displayCount === 0 && p.researchStatus === 'searched-none' && (
            <CircleMarker
              key={`none-${p.name}`}
              center={[p.lat, p.lng]}
              radius={5}
              pathOptions={{
                fillColor: 'transparent',
                fillOpacity: 0,
                color: C.red,
                weight: 2,
                opacity: 0.8,
                dashArray: '4 3',
              }}
            >
              <Popup>
                <div className={styles.popup}>
                  <strong>{p.name}</strong>
                  <span style={{ color: C.red }}>Searched &mdash; no Van Vlaenderen found</span>
                  {p.notes && <span className={styles.popupNote}>{p.notes}</span>}
                </div>
              </Popup>
            </CircleMarker>
          )
        ))}

        {/* Layer 3: Ancestor trail */}
        {layers.trail && (
          <>
            <Polyline
              positions={LINEAGE_TRAIL}
              pathOptions={{
                color: C.cream,
                weight: 3,
                opacity: 0.8,
                dashArray: '8 6',
              }}
            />
            {LINEAGE_LABELS.map((l, i) => (
              <CircleMarker
                key={`trail-${i}`}
                center={[l.lat, l.lng]}
                radius={4}
                pathOptions={{
                  fillColor: C.cream,
                  fillOpacity: 1,
                  color: C.gold,
                  weight: 2,
                }}
              >
                <Popup>
                  <div className={styles.popup}>
                    <strong>{l.name}</strong>
                    <span>Confirmed ancestor</span>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </>
        )}

        {/* Layer 4: Medieval anchors */}
        {layers.medieval && MEDIEVAL_ANCHORS.map((a, i) => (
          <CircleMarker
            key={`medieval-${i}`}
            center={[a.lat, a.lng]}
            radius={7}
            pathOptions={{
              fillColor: C.purple,
              fillOpacity: 0.6,
              color: C.purple,
              weight: 2,
              opacity: 0.9,
            }}
          >
            <Popup>
              <div className={styles.popup}>
                <strong>{a.name}</strong>
                <span>{a.label}</span>
                <span className={styles.popupDetail}>{a.date}</span>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Layer 5: Research coverage */}
        {layers.coverage && displayParishes.map(p => (
          <CircleMarker
            key={`coverage-${p.name}`}
            center={[p.lat, p.lng]}
            radius={radiusForCount(p.displayCount) + 4}
            pathOptions={{
              fillColor: 'transparent',
              fillOpacity: 0,
              color: statusColor(p.researchStatus),
              weight: 2,
              opacity: 0.7,
              dashArray: p.researchStatus === 'not-started' ? '3 3' : undefined,
            }}
          >
            <Popup>
              <div className={styles.popup}>
                <strong>{p.name}</strong>
                <span>Status: {statusLabel(p.researchStatus)}</span>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* ── Legend ─────────────────────────────────────────────────── */}
      <div className={styles.legend}>
        {layers.surnames && (
          <div className={styles.legendSection}>
            <span className={styles.legendTitle}>Surname Presence</span>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: C.gold, width: 10, height: 10 }} />
              <span>1&ndash;15 records</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: C.gold, width: 16, height: 16 }} />
              <span>16&ndash;50 records</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: C.gold, width: 22, height: 22 }} />
              <span>50+ records</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendRing} style={{ borderColor: C.red }} />
              <span>Searched, none found</span>
            </div>
          </div>
        )}
        {layers.trail && (
          <div className={styles.legendSection}>
            <span className={styles.legendTitle}>Ancestor Trail</span>
            <div className={styles.legendItem}>
              <span className={styles.legendLine} style={{ borderColor: C.cream }} />
              <span>Confirmed lineage path</span>
            </div>
          </div>
        )}
        {layers.medieval && (
          <div className={styles.legendSection}>
            <span className={styles.legendTitle}>Medieval Anchors</span>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: C.purple, width: 12, height: 12 }} />
              <span>Pre-1600 attestation</span>
            </div>
          </div>
        )}
        {layers.coverage && (
          <div className={styles.legendSection}>
            <span className={styles.legendTitle}>Research Coverage</span>
            <div className={styles.legendItem}>
              <span className={styles.legendRing} style={{ borderColor: C.greenMuted }} />
              <span>Births searched</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendRing} style={{ borderColor: C.amber }} />
              <span>In progress</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendRing} style={{ borderColor: C.textMuted, borderStyle: 'dashed' }} />
              <span>Not started</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
