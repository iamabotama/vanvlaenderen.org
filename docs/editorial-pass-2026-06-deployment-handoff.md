# Editorial Pass 2026-06 — Deployment Handoff (Phase 2 → push)

**For:** a fresh thread that applies the two ready Research-page packets and deploys via `mvf → main` on Michael's machine.
**From:** the editorial-pass thread, 2026-06-14. Phase 0 (scaffold) and Phase 1 (audit) are signed off; this bundles the two Research-page packets that are ready to ship.

## Hard gates (non-negotiable)

1. **No push without Michael's explicit in-chat approval** for that specific push. `mvf → main` is itself a deploy decision — gate it the same way. Never commit to `main` directly.
2. **`pnpm check:i18n` → `pnpm build` → `pnpm lint` all green** before any merge to main.
3. **Sandbox git is unreliable** (CRLF phantom via the Linux mount; `index.lock` resurrection). Do real git ops on Michael's machine; use `git diff --ignore-cr-at-eol` to see true diffs. Never bulk-commit phantom changes.
4. **On-page citations name source documents, never findings slugs.** Findings slugs go in commit messages only.
5. Work on a branch `site-update-2026-06` off `mvf`; one commit per logical change; present per-page diffs to Michael; merge and push only on approval.

---

## Packet A — Research page: Nevers + cluster text

**Spec:** `docs/editorial-pass-2026-06-nevers-packet-handoff.md` (complete — every `research.*` key with final EN + draft NL, the commit message, and the canonical-name gate notes). Apply those edits to `src/i18n/locales/en.json` + `nl.json`.

Also: add **De Raadt, *Sceaux armoriés des Pays-Bas* (1898)** and **Vandermaesen 1999** to `public/data/bibliography.json` (both now cited on the Research page; update `lastUpdated`). Audit rows B-1/B-2.

NL strings are drafts → flag for native Flemish review (standing queue item).

---

## Packet B — Research (and Name) page: cluster timeline map

**Assets (in `public/new_images/`):**
- `flandria-comitatus-1600.jpg` — antique north-up base (Flandria Comitatus c. 1567, pre-1659 extent; 1024×622). **Use the clean reupload** — the copy the editorial thread saw was 45 bytes short (truncated upload). Confirm it ends with `FF D9` (`tail -c 2 … | xxd`); if not, re-export a complete JPG before regenerating.
- `van-vlaenderen-clusters-pre1500.jpg` / `-16thc.jpg` / `-1600.jpg` — the three baked composites (LOCKED positions, Michael-approved 2026-06-14).
- `van-vlaenderen-clusters-timeline.html` — framework-agnostic swap component.

**Regenerate the composites from the clean base** (one command — do this on Michael's machine where the clean file lives):

```python
from PIL import Image
import numpy as np
base=Image.open('flandria-comitatus-1600.jpg'); base.load(); base=base.convert('RGBA')
W,H=base.size; XX,YY=np.meshgrid(np.arange(W),np.arange(H))
YELLOW=np.array([255,206,20]); ORANGE=np.array([216,66,12])
def blob(cx,cy,count,peak):
    R=min(10.5,3.5+np.sqrt(count)*0.52)/100*W/2
    d=np.sqrt((XX-cx)**2+(YY-cy)**2); t=np.clip(d/R,0,1); a=((1-t)**1.3)*peak
    col=YELLOW[None,None,:]*(1-t)[:,:,None]+ORANGE[None,None,:]*t[:,:,None]
    r=np.zeros((H,W,4)); r[:,:,:3]=col; r[:,:,3]=a*255; return r
def compose(blobs,name):
    acc=np.zeros((H,W,4))
    for hx,hy,cnt in blobs:
        cx=hx/100*W; cy=hy/100*H; peak=0.97 if cnt>=100 else (0.95 if cnt>=25 else 0.88)
        b=blob(cx,cy,cnt,peak); sel=b[:,:,3]>acc[:,:,3]; acc=np.where(sel[:,:,None],b,acc)
    Image.alpha_composite(base,Image.fromarray(acc.astype('uint8'),'RGBA')).convert('RGB').save(f'van-vlaenderen-clusters-{name}.jpg',quality=90)
compose([(23,60,59),(22,53,4)],'pre1500')
compose([(55,39,5),(63,36,1),(62,33,1)],'16thc')
compose([(61,36,213),(60,33,34),(58,39,25),(57,33,18),(65,44,20),(75,54,46),(76,53,9)],'1600')
```
(Coordinates are % of the base image; counts are Geneanet per-municipality. Full parameter record: `docs/editorial-pass-2026-06-map-packet-spec.md` → "LOCKED".)

**Integration:**
- Port `van-vlaenderen-clusters-timeline.html` → `src/components/.../TimelineClusterMap.tsx` (image-swap, three buttons pre-1500 / 16th c. / by 1600, per-window caption, yellow→orange legend, Geneanet credit + link). Use absolute `/new_images/…` paths in the React version.
- Swap it in for the DB-driven `ResearchMap` on `/research` and `/name`; frame the database map as "in progress, a future release."
- EN + NL captions (parity). Geneanet attribution + link to `https://en.geneanet.org/surnames/van%20VLAENDEREN` + the "our DB is fuller for medieval/parish but thin in the 1500s" note (already in the component).
- Delete scratch files: `_grid.jpg`, `_cal-1600.jpg`, `preview-clusters-*.jpg`.

---

## Build & deploy sequence

1. Branch `site-update-2026-06` off `mvf`.
2. Apply Packet A (i18n + bibliography), commit. Apply Packet B (component + page swap + assets), commit.
3. `pnpm check:i18n` → fix any name/tier/parity failures → `pnpm build` → `pnpm lint`.
4. Present per-page redline diffs (prose) + before/after for the map to Michael; iterate.
5. On approval: merge `site-update-2026-06` → `mvf` → `main`; **push `main` only with explicit approval**. CI (`deploy.yml`) builds + prerenders + publishes to gh-pages.
6. Confirm live; log the wave in `docs/vanvlaenderen.org-todo.md`.

---

## Supporting documents (context, not to ship)

- `docs/messaging-scaffold.md` — Phase 0 scaffold (the measuring stick).
- `docs/editorial-pass-2026-06-audit.md` — Phase 1 per-page audit (all drift rows).
- `docs/editorial-pass-2026-06-map-packet-spec.md` — map design + LOCKED parameters.
- Corpus: `findings-guy-richebourg-parentage-1331-chronology-2026-06-13` (justifies the Nevers tiering; in the research tree, indexed).

## Deferred (next pass, not in this deployment)

- **Packet C — family on-ramp** on the Research page (plain-language orientation + family-facing DNA/lineage CTA). Audit-flagged, optional.
- Remaining audit packets: Home geography + spine rebalance; the diagram **star → "Comital line"** relabel (`DiagramEngine.tsx`); the count sweep on Home (`three`→`five`, `thirteen`→`eighteen`), Name, DNA notes. Schedule as a second wave.
