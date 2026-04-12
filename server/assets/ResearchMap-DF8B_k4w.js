import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, useMap } from "react-leaflet";
const mapWrapper = "_mapWrapper_bgd9h_2";
const map = "_map_bgd9h_2";
const controls = "_controls_bgd9h_40";
const controlGroup = "_controlGroup_bgd9h_50";
const controlLabel = "_controlLabel_bgd9h_56";
const toggleGroup = "_toggleGroup_bgd9h_65";
const toggleBtn = "_toggleBtn_bgd9h_70";
const toggleActive = "_toggleActive_bgd9h_89";
const popup = "_popup_bgd9h_96";
const popupDetail = "_popupDetail_bgd9h_108";
const popupNote = "_popupNote_bgd9h_113";
const legend = "_legend_bgd9h_121";
const legendSection = "_legendSection_bgd9h_130";
const legendTitle = "_legendTitle_bgd9h_137";
const legendItem = "_legendItem_bgd9h_146";
const legendDot = "_legendDot_bgd9h_155";
const legendRing = "_legendRing_bgd9h_161";
const legendLine = "_legendLine_bgd9h_171";
const styles = {
  mapWrapper,
  map,
  controls,
  controlGroup,
  controlLabel,
  toggleGroup,
  toggleBtn,
  toggleActive,
  popup,
  popupDetail,
  popupNote,
  legend,
  legendSection,
  legendTitle,
  legendItem,
  legendDot,
  legendRing,
  legendLine
};
const C = {
  gold: "#c4a55a",
  cream: "#f0e8d0",
  red: "#c0392b",
  greenMuted: "#5a8a5a",
  /* muted green for "complete" */
  amber: "#d4a830",
  purple: "#8b6bb0",
  textMuted: "#8a90a0"
};
const PARISHES = [
  { name: "Bassevelde", lat: 51.225, lng: 3.75, births1600s: 14, births1700s: 16, birthsTotal: 30, researchStatus: "complete", notes: "Core parish. Ancestors found." },
  { name: "Boekhoute", lat: 51.25, lng: 3.7833, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "complete", notes: "Civil records only (1857+). Ancestors found." },
  { name: "Waarschoot", lat: 51.1333, lng: 3.6167, births1600s: 10, births1700s: 0, birthsTotal: 10, researchStatus: "complete", notes: "Ancestors found. Livinus b. 1658." },
  { name: "Oostwinkel", lat: 51.1167, lng: 3.5833, births1600s: 38, births1700s: 35, birthsTotal: 73, researchStatus: "complete", notes: "Ancestors found. Petrus b. 1634." },
  { name: "Ursel", lat: 51.1, lng: 3.5333, births1600s: 0, births1700s: 30, birthsTotal: 30, researchStatus: "complete", notes: "Wessegem seigneurie. Victor's lordship." },
  { name: "Zomergem", lat: 51.1167, lng: 3.5667, births1600s: 0, births1700s: 1, birthsTotal: 1, researchStatus: "complete" },
  { name: "Lembeke", lat: 51.2, lng: 3.6167, births1600s: 1, births1700s: 2, birthsTotal: 3, researchStatus: "complete" },
  { name: "Sleidinge", lat: 51.15, lng: 3.7, births1600s: 32, births1700s: 46, birthsTotal: 78, researchStatus: "complete" },
  { name: "Kaprijke", lat: 51.2167, lng: 3.6333, births1600s: 0, births1700s: 16, birthsTotal: 16, researchStatus: "complete" },
  { name: "Evergem", lat: 51.1167, lng: 3.7, births1600s: 20, births1700s: 17, birthsTotal: 37, researchStatus: "in-progress" },
  { name: "Eeklo", lat: 51.1833, lng: 3.5667, births1600s: 11, births1700s: 13, birthsTotal: 24, researchStatus: "complete" },
  { name: "Ertvelde", lat: 51.1833, lng: 3.7333, births1600s: 26, births1700s: 50, birthsTotal: 76, researchStatus: "complete" },
  { name: "Adegem", lat: 51.2, lng: 3.5, births1600s: 5, births1700s: 30, birthsTotal: 35, researchStatus: "complete" },
  { name: "Bouchout", lat: 51.2333, lng: 3.7167, births1600s: 0, births1700s: 30, birthsTotal: 30, researchStatus: "complete" },
  { name: "Oosteeklo", lat: 51.2, lng: 3.7833, births1600s: 0, births1700s: 10, birthsTotal: 10, researchStatus: "complete" },
  { name: "Ronsele", lat: 51.0833, lng: 3.5667, births1600s: 2, births1700s: 18, birthsTotal: 20, researchStatus: "complete" },
  { name: "Maldegem", lat: 51.2167, lng: 3.4333, births1600s: 0, births1700s: 11, birthsTotal: 11, researchStatus: "complete" },
  { name: "Sint-Laureins", lat: 51.25, lng: 3.55, births1600s: 0, births1700s: 9, birthsTotal: 9, researchStatus: "complete" },
  { name: "Lotenhulle", lat: 51.0667, lng: 3.5167, births1600s: 4, births1700s: 0, birthsTotal: 4, researchStatus: "complete" },
  { name: "Hansbeke", lat: 51.0833, lng: 3.55, births1600s: 5, births1700s: 0, birthsTotal: 5, researchStatus: "complete" },
  { name: "Vinkt", lat: 51.0333, lng: 3.5333, births1600s: 1, births1700s: 1, birthsTotal: 2, researchStatus: "complete" },
  { name: "Wondelgem", lat: 51.0833, lng: 3.7167, births1600s: 15, births1700s: 24, birthsTotal: 39, researchStatus: "complete" },
  { name: "Drongen", lat: 51.05, lng: 3.65, births1600s: 0, births1700s: 7, birthsTotal: 7, researchStatus: "complete" },
  { name: "Destelbergen", lat: 51.05, lng: 3.8, births1600s: 8, births1700s: 0, birthsTotal: 8, researchStatus: "complete" },
  { name: "Mariakerke", lat: 51.0667, lng: 3.6833, births1600s: 0, births1700s: 12, birthsTotal: 12, researchStatus: "complete" },
  { name: "Merendree", lat: 51.0833, lng: 3.5833, births1600s: 0, births1700s: 2, birthsTotal: 2, researchStatus: "complete" },
  { name: "Oedelem", lat: 51.15, lng: 3.35, births1600s: 0, births1700s: 6, birthsTotal: 6, researchStatus: "complete", notes: "Praet lordship location." },
  { name: "Zelzate", lat: 51.2, lng: 3.8167, births1600s: 0, births1700s: 2, birthsTotal: 2, researchStatus: "complete" },
  { name: "Aalter", lat: 51.0833, lng: 3.45, births1600s: 2, births1700s: 0, birthsTotal: 2, researchStatus: "not-started" },
  { name: "Assenede", lat: 51.2333, lng: 3.75, births1600s: 0, births1700s: 41, birthsTotal: 41, researchStatus: "complete" },
  { name: "Sint-Martens-Leerne", lat: 51.0167, lng: 3.5667, births1600s: 1, births1700s: 0, birthsTotal: 1, researchStatus: "complete" },
  { name: "Lovendegem", lat: 51.1, lng: 3.6, births1600s: 0, births1700s: 1, birthsTotal: 1, researchStatus: "in-progress" },
  { name: "Knesselare", lat: 51.1333, lng: 3.4833, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "searched-none", notes: "1517 Praet charter. Searched, none found." },
  { name: "Ghent", lat: 51.05, lng: 3.72, births1600s: 26, births1700s: 0, birthsTotal: 26, researchStatus: "not-started", notes: "Multiple parish records." },
  { name: "Nevele", lat: 51.05, lng: 3.55, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "not-started" },
  { name: "Poeke", lat: 51.05, lng: 3.45, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "not-started" },
  { name: "Afsnee", lat: 51.0333, lng: 3.6667, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "not-started" },
  { name: "Sint-Martens-Latem", lat: 51.0167, lng: 3.6333, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "not-started" },
  { name: "Wessegem", lat: 51.105, lng: 3.528, births1600s: 0, births1700s: 0, birthsTotal: 0, researchStatus: "not-started", notes: "Victor's seigneurie. Now part of Ursel." }
];
const MEDIEVAL_ANCHORS = [
  { name: "Wessegem/Ursel", lat: 51.105, lng: 3.528, label: "Victor's Seigneurie", date: "c.1399–1431" },
  { name: "Biervliet", lat: 51.3333, lng: 3.7333, label: "Victor: Captain of Biervliet", date: "c.1400s" },
  { name: "Oedelem/Praet", lat: 51.15, lng: 3.35, label: "Praet Lordship", date: "c.1373–1555" },
  { name: "Tielt", lat: 50.9833, lng: 3.3333, label: "Robbrecht Van Vlaendren", date: "1418–1432" },
  { name: "Brugse Vrije", lat: 51.2, lng: 3.2167, label: "Joos Van Vlaanderen (testator)", date: "1547–1549" },
  { name: "Knesselare", lat: 51.1333, lng: 3.4833, label: "1517: Praet fiefs at Knesselare", date: "1517" }
];
const LINEAGE_TRAIL = [
  [51.1167, 3.5833],
  // Oostwinkel
  [51.1333, 3.6167],
  // Waarschoot
  [51.225, 3.75],
  // Bassevelde
  [51.25, 3.7833]
  // Boekhoute
];
const LINEAGE_LABELS = [
  { name: "Petrus (b. 1634)", lat: 51.1167, lng: 3.5833 },
  { name: "Livinus (b. 1658)", lat: 51.1333, lng: 3.6167 },
  { name: "Petrus Raphael (b. 1685)", lat: 51.225, lng: 3.75 },
  { name: "Livinus (b. 1740, Bouchout)", lat: 51.25, lng: 3.7833 }
];
function radiusForCount(count) {
  if (count === 0) return 4;
  if (count <= 5) return 6;
  if (count <= 15) return 9;
  if (count <= 30) return 12;
  if (count <= 50) return 15;
  return 18;
}
function statusColor(status) {
  switch (status) {
    case "complete":
      return C.greenMuted;
    case "in-progress":
      return C.amber;
    case "not-started":
      return C.textMuted;
    case "searched-none":
      return C.red;
    default:
      return C.textMuted;
  }
}
function statusLabel(status) {
  switch (status) {
    case "complete":
      return "Births searched";
    case "in-progress":
      return "In progress";
    case "not-started":
      return "Not started";
    case "searched-none":
      return "Searched — none found";
    default:
      return status;
  }
}
function FitBounds() {
  const map2 = useMap();
  useEffect(() => {
    map2.fitBounds(
      [[50.95, 3.2], [51.36, 3.9]],
      { padding: [20, 20] }
    );
  }, [map2]);
  return null;
}
function ResearchMap() {
  const [century, setCentury] = useState("both");
  const [layers, setLayers] = useState({
    surnames: true,
    trail: true,
    medieval: true,
    coverage: false
  });
  const toggleLayer = (key) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const filteredParishes = useMemo(() => {
    return PARISHES.map((p) => {
      let count;
      switch (century) {
        case "1600s":
          count = p.births1600s;
          break;
        case "1700s":
          count = p.births1700s;
          break;
        default:
          count = p.birthsTotal;
      }
      return { ...p, displayCount: count };
    });
  }, [century]);
  const displayParishes = useMemo(() => {
    return filteredParishes.map((p) => {
      if (p.name === "Wessegem") {
        return { ...p, lat: p.lat + 8e-3, lng: p.lng - 8e-3 };
      }
      return p;
    });
  }, [filteredParishes]);
  return /* @__PURE__ */ jsxs("div", { className: styles.mapWrapper, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.controls, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.controlGroup, children: [
        /* @__PURE__ */ jsx("span", { className: styles.controlLabel, children: "Century" }),
        /* @__PURE__ */ jsx("div", { className: styles.toggleGroup, children: ["1600s", "1700s", "both"].map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `${styles.toggleBtn} ${century === c ? styles.toggleActive : ""}`,
            onClick: () => setCentury(c),
            children: c === "both" ? "All" : c
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles.controlGroup, children: [
        /* @__PURE__ */ jsx("span", { className: styles.controlLabel, children: "Layers" }),
        /* @__PURE__ */ jsxs("div", { className: styles.toggleGroup, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles.toggleBtn} ${layers.surnames ? styles.toggleActive : ""}`,
              onClick: () => toggleLayer("surnames"),
              children: "Surnames"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles.toggleBtn} ${layers.trail ? styles.toggleActive : ""}`,
              onClick: () => toggleLayer("trail"),
              children: "Lineage"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles.toggleBtn} ${layers.medieval ? styles.toggleActive : ""}`,
              onClick: () => toggleLayer("medieval"),
              children: "Medieval"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles.toggleBtn} ${layers.coverage ? styles.toggleActive : ""}`,
              onClick: () => toggleLayer("coverage"),
              children: "Coverage"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      MapContainer,
      {
        className: styles.map,
        center: [51.15, 3.6],
        zoom: 11,
        scrollWheelZoom: true,
        zoomControl: true,
        children: [
          /* @__PURE__ */ jsx(FitBounds, {}),
          /* @__PURE__ */ jsx(
            TileLayer,
            {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
              url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            }
          ),
          layers.surnames && displayParishes.map((p) => p.displayCount > 0 && /* @__PURE__ */ jsx(
            CircleMarker,
            {
              center: [p.lat, p.lng],
              radius: radiusForCount(p.displayCount),
              pathOptions: {
                fillColor: C.gold,
                fillOpacity: 0.7,
                color: C.cream,
                weight: 1,
                opacity: 0.8
              },
              children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", { className: styles.popup, children: [
                /* @__PURE__ */ jsx("strong", { children: p.name }),
                /* @__PURE__ */ jsxs("span", { children: [
                  p.displayCount,
                  " birth record",
                  p.displayCount !== 1 ? "s" : ""
                ] }),
                p.births1600s > 0 && /* @__PURE__ */ jsxs("span", { className: styles.popupDetail, children: [
                  "1600s: ",
                  p.births1600s
                ] }),
                p.births1700s > 0 && /* @__PURE__ */ jsxs("span", { className: styles.popupDetail, children: [
                  "1700s: ",
                  p.births1700s
                ] }),
                p.notes && /* @__PURE__ */ jsx("span", { className: styles.popupNote, children: p.notes })
              ] }) })
            },
            `surname-${p.name}`
          )),
          layers.surnames && displayParishes.map((p) => p.displayCount === 0 && p.researchStatus === "searched-none" && /* @__PURE__ */ jsx(
            CircleMarker,
            {
              center: [p.lat, p.lng],
              radius: 5,
              pathOptions: {
                fillColor: "transparent",
                fillOpacity: 0,
                color: C.red,
                weight: 2,
                opacity: 0.8,
                dashArray: "4 3"
              },
              children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", { className: styles.popup, children: [
                /* @__PURE__ */ jsx("strong", { children: p.name }),
                /* @__PURE__ */ jsx("span", { style: { color: C.red }, children: "Searched — no Van Vlaenderen found" }),
                p.notes && /* @__PURE__ */ jsx("span", { className: styles.popupNote, children: p.notes })
              ] }) })
            },
            `none-${p.name}`
          )),
          layers.trail && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              Polyline,
              {
                positions: LINEAGE_TRAIL,
                pathOptions: {
                  color: C.cream,
                  weight: 3,
                  opacity: 0.8,
                  dashArray: "8 6"
                }
              }
            ),
            LINEAGE_LABELS.map((l, i) => /* @__PURE__ */ jsx(
              CircleMarker,
              {
                center: [l.lat, l.lng],
                radius: 4,
                pathOptions: {
                  fillColor: C.cream,
                  fillOpacity: 1,
                  color: C.gold,
                  weight: 2
                },
                children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", { className: styles.popup, children: [
                  /* @__PURE__ */ jsx("strong", { children: l.name }),
                  /* @__PURE__ */ jsx("span", { children: "Confirmed ancestor" })
                ] }) })
              },
              `trail-${i}`
            ))
          ] }),
          layers.medieval && MEDIEVAL_ANCHORS.map((a, i) => /* @__PURE__ */ jsx(
            CircleMarker,
            {
              center: [a.lat, a.lng],
              radius: 7,
              pathOptions: {
                fillColor: C.purple,
                fillOpacity: 0.6,
                color: C.purple,
                weight: 2,
                opacity: 0.9
              },
              children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", { className: styles.popup, children: [
                /* @__PURE__ */ jsx("strong", { children: a.name }),
                /* @__PURE__ */ jsx("span", { children: a.label }),
                /* @__PURE__ */ jsx("span", { className: styles.popupDetail, children: a.date })
              ] }) })
            },
            `medieval-${i}`
          )),
          layers.coverage && displayParishes.map((p) => /* @__PURE__ */ jsx(
            CircleMarker,
            {
              center: [p.lat, p.lng],
              radius: radiusForCount(p.displayCount) + 4,
              pathOptions: {
                fillColor: "transparent",
                fillOpacity: 0,
                color: statusColor(p.researchStatus),
                weight: 2,
                opacity: 0.7,
                dashArray: p.researchStatus === "not-started" ? "3 3" : void 0
              },
              children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", { className: styles.popup, children: [
                /* @__PURE__ */ jsx("strong", { children: p.name }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Status: ",
                  statusLabel(p.researchStatus)
                ] })
              ] }) })
            },
            `coverage-${p.name}`
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: styles.legend, children: [
      layers.surnames && /* @__PURE__ */ jsxs("div", { className: styles.legendSection, children: [
        /* @__PURE__ */ jsx("span", { className: styles.legendTitle, children: "Surname Presence" }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendDot, style: { background: C.gold, width: 10, height: 10 } }),
          /* @__PURE__ */ jsx("span", { children: "1–15 records" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendDot, style: { background: C.gold, width: 16, height: 16 } }),
          /* @__PURE__ */ jsx("span", { children: "16–50 records" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendDot, style: { background: C.gold, width: 22, height: 22 } }),
          /* @__PURE__ */ jsx("span", { children: "50+ records" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendRing, style: { borderColor: C.red } }),
          /* @__PURE__ */ jsx("span", { children: "Searched, none found" })
        ] })
      ] }),
      layers.trail && /* @__PURE__ */ jsxs("div", { className: styles.legendSection, children: [
        /* @__PURE__ */ jsx("span", { className: styles.legendTitle, children: "Ancestor Trail" }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendLine, style: { borderColor: C.cream } }),
          /* @__PURE__ */ jsx("span", { children: "Confirmed lineage path" })
        ] })
      ] }),
      layers.medieval && /* @__PURE__ */ jsxs("div", { className: styles.legendSection, children: [
        /* @__PURE__ */ jsx("span", { className: styles.legendTitle, children: "Medieval Anchors" }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendDot, style: { background: C.purple, width: 12, height: 12 } }),
          /* @__PURE__ */ jsx("span", { children: "Pre-1600 attestation" })
        ] })
      ] }),
      layers.coverage && /* @__PURE__ */ jsxs("div", { className: styles.legendSection, children: [
        /* @__PURE__ */ jsx("span", { className: styles.legendTitle, children: "Research Coverage" }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendRing, style: { borderColor: C.greenMuted } }),
          /* @__PURE__ */ jsx("span", { children: "Births searched" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendRing, style: { borderColor: C.amber } }),
          /* @__PURE__ */ jsx("span", { children: "In progress" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.legendItem, children: [
          /* @__PURE__ */ jsx("span", { className: styles.legendRing, style: { borderColor: C.textMuted, borderStyle: "dashed" } }),
          /* @__PURE__ */ jsx("span", { children: "Not started" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ResearchMap as default
};
