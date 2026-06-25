#!/usr/bin/env bash
#
# update-records-editor.sh
#
# Sync the records editor from the research-tree source into the site's
# unindexed public path — run on THIS machine (git bash), never through the
# Cowork sandbox mount, which serves torn/truncated reads of large files (that
# shipped a half-truncated editor to production twice). Injects the noindex
# meta and verifies the result, so a bad copy fails here instead of going live.
#
# Usage:  bash scripts/update-records-editor.sh
#
set -euo pipefail

SRC="/c/Users/MikeVF/My Drive/Ancestry VF Family/Van Vlaenderen research/Database/supabase/records-editor.html"
DEST="public/r/e1e3b0852b/index.html"

# Always operate from the repo root, regardless of where this is invoked.
cd "$(dirname "$(readlink -f "$0")")/.."

if [ ! -f "$SRC" ]; then
  echo "ERROR: source not found: $SRC" >&2
  echo "       (is Google Drive synced / the file present locally?)" >&2
  exit 1
fi

cp "$SRC" "$DEST"

# Inject the noindex meta right after the viewport meta, once.
if ! grep -q 'name="robots"' "$DEST"; then
  awk '1; /<meta name="viewport"/ && !ins { print "<meta name=\"robots\" content=\"noindex,nofollow\">"; ins=1 }' "$DEST" > "$DEST.tmp"
  mv "$DEST.tmp" "$DEST"
fi

# Cheap truncation check: dest must have at least as many lines as the source.
s=$(grep -c '' "$SRC"); d=$(grep -c '' "$DEST")
echo "source lines: $s   dest lines: $d"
if [ "$d" -lt "$s" ]; then
  echo "ERROR: dest has fewer lines than source — copy looks truncated. Aborting." >&2
  exit 1
fi

# Deep check: NUL bytes, </html> sentinel, inline-script syntax.
node scripts/check-static-assets.mjs

echo "OK: records editor synced from source and verified. Safe to commit."
