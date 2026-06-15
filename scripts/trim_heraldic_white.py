# One-off utility: trims the baked-in white scan margins from the three heraldic
# images that are used as page heroes and figures. The white is a scan artifact
# (the document photographed on a white background) and bleeds into hero `cover`
# crops. Idempotent — re-running on an already-tight image is a no-op.
#
#   pip install pillow
#   python scripts/trim_heraldic_white.py
#
# Safe to delete this file afterwards; it is not referenced by the build.
from PIL import Image, ImageChops
from pathlib import Path

base = Path("src/assets/images/heraldic")
names = [
    "cronike-van-vlaenderen-shields-double-page",
    "cronike-van-vlaenderen-countess-of-flanders",
    "cronike-van-vlaenderen-philip-of-alsace-knight",
]

for name in names:
    p = base / f"{name}.jpg"
    im = Image.open(p).convert("RGB")
    w, h = im.size
    bg = Image.new("RGB", im.size, (255, 255, 255))
    mask = ImageChops.difference(im, bg).convert("L").point(lambda x: 255 if x > 12 else 0)
    bbox = mask.getbbox()
    if not bbox:
        print(f"{name}: blank?  skipped")
        continue
    l, t, r, b = bbox
    pad = 4
    box = (max(0, l - pad), max(0, t - pad), min(w, r + pad), min(h, b + pad))
    if box == (0, 0, w, h):
        print(f"{name}: already tight ({w}x{h})")
        continue
    out = im.crop(box)
    out.save(p, quality=92)
    print(f"{name}: {w}x{h} -> {out.size[0]}x{out.size[1]}")
