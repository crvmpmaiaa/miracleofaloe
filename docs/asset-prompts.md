# Asset Generation Prompts — Ready to Paste

Everything below is tuned for **Nano Banana Pro** (stills) and **Seedance** (video). Paste the brand-locked block at the top of every Nano Banana session, then paste the individual still prompt below it.

Generation priority, from highest impact / longest lead time:
1. Hero video (2 Nano Banana frames + 1 Seedance motion pass)
2. 4× UltraAloe® documentary stills (single session, shared mood reference)
3. 4× Pillar tiles
4. Before/After heels (2) + Brand hero (1)

---

## BRAND-LOCKED BLOCK (paste at top of every session)

```
Brand: Miracle of Aloe — 40-year family-owned aloe skincare brand. National DTC, no regional references.
Colour palette locked to: Paper #F6F2EA · Forest #0F3B2C · Aloe #8DC735 · Jungle #00965E · Mist #D8E4D1.
Aesthetic: Editorial Botanical — warm editorial photography, subtle film grain, macro botanical detail, linen and paper surfaces, soft natural window light.
Reference direction: premium DTC botanical — grounded, quiet confidence, premium-without-corporate.
Forbidden: typography or logos in-scene EXCEPT what already exists on the product packaging in the reference image (keep those intact), corporate stock models smiling at camera, bright synthetic neons outside palette, lens flares, heavy retouching, cluttered compositions.
Output: photorealistic, landscape or portrait as noted per still, shot on 50mm at f/4–f/8 unless specified, subtle 35mm film grain texture.
```

---

## ⚠ HOW TO USE REFERENCE IMAGES (important — read before generating)

Several of the stills below feature specific Miracle of Aloe SKUs (Foot Repair jar, Aloe All Over bottle, etc.). For these, **attach the actual product photo as a reference image in the Nano Banana session** — the file paths are listed next to each prompt. Without references, Nano Banana will invent a generic white jar (which is what happened to you the first time).

Pattern: when a prompt says **Reference: `assets/products/xxx.png`** — in Nano Banana Pro, upload that file as an input image and tell the model something like "keep the product's label design, colour, shape, and proportions pixel-accurate to this reference; only the surrounding scene changes."

You'll find all the product photos already in the repo at `/Users/admin/Desktop/miracleofaloe/assets/products/`:
- `foot-repair-front.png` — Foot Repair jar (front label)
- `foot-repair-back.jpg` — Foot Repair jar (back panel)
- `hand-repair.png` — Hand Repair jar
- `aloe-all-over.png` — All Over Lotion bottle
- `miracle-rub.png` — Miracle Rub bottle
- `all-day-moisturizer.jpg` — All Day Moisturizer bottle
- `facial-gel.jpg` — Facial Gel tube
- `ultra-aloe-juice.jpg` — Ultra Aloe Juice bottle
- `assets/brand/logo.png` — brand wordmark

**Stills that DO need a reference image:** pillar tiles 1–4, ultraaloe-bottle (#8), hero-first, hero-last, spotlight-jar (if generating separately).

**Stills that DON'T need a reference image** (scene/concept only, no specific SKU): ultraaloe-grow, ultraaloe-harvest, ultraaloe-process, before-heel, after-heel, brand-hero.

---

## STILLS

### 1. `pillar-foot.jpg` — Foot & Hand collection tile (3:4 portrait)

**Reference: `assets/products/foot-repair-front.png`** (attach to session — this is the Foot Repair pump bottle with the real Miracle of Aloe label)

```
Use the attached reference image for the product. Preserve the bottle's exact shape, dimensions, cap style, label layout, label colour, brand typography, and all graphics pixel-accurate to the reference. Only the scene around it changes.

Scene: editorial still life — a pair of well-cared-for hands cradling the Miracle Foot Repair pump bottle from above, with the bottle centred on a raw linen napkin laid over a pale cream paper surface. A single fresh aloe leaf sprig placed beside the bottle for a pop of green. Morning north-window light from the left, soft diffused shadow beneath. Composition: centred, ¾ overhead angle, product clearly the hero. Paper + linen + bottle + aloe sprig only — nothing else in frame. Shot on 50mm at f/4. 3:4 portrait.
```

### 2. `pillar-body.jpg` — Body collection tile (3:4 portrait)

**Reference: `assets/products/aloe-all-over.png`** (attach — this is the Aloe All Over 32oz pump bottle)

```
Use the attached reference for the product. Preserve the bottle's exact shape, pump style, label layout, colours, brand typography, and all graphics pixel-accurate. Only the scene around it changes.

Scene: editorial still life — the Aloe All Over 32oz pump bottle standing on a honed travertine bathroom slab, shot from a low ¾ angle. Morning light through a sheer linen curtain casts a soft vertical light down the bottle. Folded white bath towel in soft-focus background; a sprig of fresh aloe leaf on the counter beside the bottle. Palette: warm stone, cream towel, one aloe-green accent from the leaf. Quiet, premium, early-morning feel. Shot on 50mm at f/4. 3:4 portrait.
```

### 3. `pillar-face.jpg` — Face & Hair collection tile (3:4 portrait)

**Reference: `assets/products/facial-gel.jpg`** (attach — this is the Rehydrating Facial Gel tube/bottle)

```
Use the attached reference for the product. Preserve the bottle's exact shape, cap, label layout, colours, brand typography, and all graphics pixel-accurate. Only the scene around it changes.

Scene: editorial still life — the Rehydrating Facial Gel lying on its side on a folded muslin cloth next to two round cotton pads and a single aloe leaf tip. Soft-focus fresh aloe plant blurred in background. Shot on 85mm, shallow depth of field — product tack-sharp, background dreamy. Palette: mist green, cream, one aloe-green highlight from the leaf. Morning light from the right. Editorial, not clinical. 3:4 portrait.
```

### 4. `pillar-supps.jpg` — Supplements collection tile (3:4 portrait)

**Reference: `assets/products/ultra-aloe-juice.jpg`** (attach — this is the Ultra Aloe Juice quart bottle)

```
Use the attached reference for the product. Preserve the bottle's exact shape, cap, label layout, colours, brand typography, and all graphics pixel-accurate. Only the scene around it changes.

Scene: editorial still life — the Ultra Aloe Juice quart bottle on a reclaimed oak counter, with a small cut-crystal drinking glass half-filled with the juice beside it. Fresh aloe leaf fillet on a small wooden cutting board just behind. Morning light from the side, warm and honeyed. Composition ¾ angle slightly above. Palette: warm wood brown, aloe-green liquid, cream wall behind. Nothing else in frame. Shot on 50mm at f/5.6. 3:4 portrait.
```

### 5–8. UltraAloe® Documentary — ⚠ GENERATE AS ONE SESSION

> Before generating any of 5–8: tell Nano Banana "these four images must share the same grader — warm golden light, 35mm film grain, consistent white balance and colour cast. They tell one continuous story: grow, harvest, process, bottle." Pin a mood reference if the tool allows. Regenerate the whole set if any one drifts tonally.

### 5. `ultraaloe-grow.jpg` — Grow (16:9 landscape)

```
Documentary photograph: rows of mature aloe vera plants under an open sky at dawn, warm golden light skimming the leaves from the horizon. Low wide angle showing the field stretching into soft-focus distance, a single workers' path visible, no people in frame. Desaturated greens with a warm amber cast on the ridges of the leaves. Shot on 35mm, f/8, mild anamorphic feel, subtle film grain. Palette: warm gold + jungle green + pale sky. No text, no logos. 16:9 landscape.
```

### 6. `ultraaloe-harvest.jpg` — Harvest (16:9 landscape)

```
Documentary photograph: a pair of hands (weathered, middle-aged, no jewellery, no gloves) cutting a large outer aloe leaf from the plant with a clean short blade. Close up on the hands and the cut surface — the clean slice visible, a bead of inner gel just beginning to appear. Natural sun from 45° right, same warm golden grade as the Grow still. Foreground sharp, plant mass soft behind. Shot on 50mm macro, f/4. Palette: warm skin tone + deep aloe green + amber light. 16:9 landscape.
```

### 7. `ultraaloe-process.jpg` — Process (16:9 landscape)

```
Documentary photograph: the proprietary process step — a gloved hand (surgical white cotton, not latex) lifting a ribbon of translucent inner-fillet aloe gel from a shallow white ceramic bowl onto a clean glass plate. Warm-lit workspace with a honed stone counter, linen cloth, lab beaker in soft-focus background. Intentionally NOT a sterile factory — this should feel human-scale, artisanal-meets-scientific, like a natural-products apothecary. Same warm golden grade as the previous two. Shot on 85mm macro, f/2.8, shallow depth on the gel ribbon. Palette: warm cream + translucent aloe + soft neutrals. 16:9 landscape.
```

### 8. `ultraaloe-bottle.jpg` — Bottle (16:9 landscape)

**Reference: `assets/products/foot-repair-front.png`** (attach — real Foot Repair bottle)

```
Use the attached reference for the product. Preserve the Foot Repair bottle's exact shape, pump, label layout, colours, brand typography, and all graphics pixel-accurate. Only the scene around it changes. Continue the same warm golden documentary grade used across stills 5–7.

Scene: documentary photograph — the finished Foot Repair bottle being dispensed onto a warm folded linen napkin, a small cream ribbon of product curling onto the fabric. Bottle in tight focus mid-frame. Same warm golden grade as Grow/Harvest/Process stills. Relaxed hand visible at the pump. Shot on 50mm at f/5.6. Palette: cream + warm linen + aloe-green label accent. 16:9 landscape.
```

### 9. `before-heel.jpg` — Day 1 (16:9 landscape)

```
Editorial beauty close-up: a bare heel resting on a raw linen cloth, showing realistic dryness and fine cracks — honest, not grotesque, not retouched-perfect. Neutral warm skin tone, soft diffused natural light (north-facing window), shallow depth of field so only the heel and a few inches of skin are sharp. Intentional composition — this is a Vogue-Beauty-column kind of honesty, not a medical brochure. No blood, no redness, no dramatic staging. Palette: warm skin + cream linen + soft shadow. Square-shoulders framing, tasteful, calm. 16:9 landscape.
```

### 10. `after-heel.jpg` — Day 14 (16:9 landscape)

```
Editorial beauty close-up: SAME composition, same lighting, same framing as before-heel.jpg — now showing the heel healed, skin smooth and nourished, still natural (not airbrushed, not waxy-perfect, believably improved). The goal is a believable 14-day transformation, not a CGI-perfect result. Same warm cream-linen surface, same window light. If your tool supports same-session consistency, use it — framing must be identical to the Before shot for the PDP side-by-side slider to work. 16:9 landscape.
```

### 11. `brand-hero.jpg` — Full-width brand moment (21:9 cinematic OR 16:9)

```
Single editorial photograph: a fresh aloe plant in a simple terracotta pot on a long raw linen runner draped across an oak table. Morning light streaming from the left, long dappled shadows. Ample negative space on the right side of the frame (that's where a serif pull-quote overlay will sit in code). Composition: rule of thirds, plant in the left-third, empty cream-linen on the right two-thirds. Warm and grounded. Palette: cream + warm wood + aloe green + soft shadow. 21:9 cinematic if supported, else 16:9 landscape.
```

---

## HERO VIDEO (Seedance, image-to-video) — V2

**V2 concept:** aloe leaf → slice → gel glow → **white flash** → reveal a lush aloe-themed end scene (no product, no jar). The end scene is a cinematic aloe "destination" shot with built-in negative space for text overlay, and the flash gives the reveal a clean, premium-cinematic edit point rather than a slow product-ad dissolve.

Seedance needs a **first frame** and a **last frame** plus a motion directive. Generate both frames in Nano Banana first, then paste into Seedance.

### HERO FIRST FRAME — Nano Banana (`hero-first.jpg`)

Unchanged from V1. If you've already generated this frame and YAVG > 230, keep reusing it — no need to regenerate.

```
Centred composition: a single fresh aloe vera leaf placed flat on a seamless pure-white studio background, subject dead-centre. The leaf is whole, uncut, sharp and fresh. Studio product lighting from above and slightly in front, soft diffused shadow directly beneath the leaf (very short, tight to the subject — indicates studio light, not natural). ZERO other objects, ZERO text, ZERO watermark. Ultra-sharp focus across the whole leaf, shot on 50mm at f/8. The first frame of a hero video — critical requirement: background is ≥95% pure white pixel mass, luminance YAVG > 240. Palette: white + aloe green + the barest hint of warm neutral shadow. 1920×1080 landscape. This is a hero frame, not a scene.
```

### HERO LAST FRAME — Nano Banana (`hero-last.jpg`) ⟵ NEW

**Reference: NONE.** This is an ambient scene, not a product shot — do NOT attach any product photo.

```
Scene: a dense, editorial aloe plant composition — either (a) a garden of mature aloe plants shot at golden hour with warm backlight catching the leaf ridges, OR (b) a macro arrangement of 3–4 aloe leaves overlapping naturally against a soft-focus warm-green background. The plant is the subject; the shot feels like a quiet destination, not a product reveal. No humans, no hands, no products, no typography, no logos.

Lighting: warm golden-hour natural light from the upper-right, long soft shadows, highlights on the cut edges and leaf ridges glowing aloe-green. A subtle warm bloom on the ridges.

Composition: plant mass occupies roughly 60–70% of the frame (upper-right and right-of-centre primarily). Leave the BOTTOM-LEFT third softer, lower-contrast, and out-of-focus so a serif headline overlay reads cleanly there — but keep it as a natural continuation of the scene (same palette, slightly more bokeh), NOT an empty void or solid colour block.

Palette: warm amber-green + deep aloe green + cream highlights + faint warm-neutral sky if visible. Colour palette locked to #F6F2EA paper cream + #0F3B2C deep forest + #8DC735 aloe + warm golden light. No synthetic neons.

Style: editorial botanical photography, shot on 50mm at f/2.8 for dreamy shallow depth of field, 35mm film grain, slightly desaturated. Cinematic, not stock. 1920×1080 landscape.

Output filename: hero-last.jpg (replaces the previous version that showed the Foot Repair jar — delete the old one).
```

### SEEDANCE MOTION PROMPT ⟵ NEW

Paste this into Seedance with `hero-first.jpg` as the start frame and the NEW `hero-last.jpg` as the end frame:

```
Image-to-video, 4 seconds at 24fps, 1920×1080.

Motion sequence:
0.0s – 0.4s: hold on the aloe leaf, extremely subtle breathing (0.5% scale oscillation), no other movement.
0.4s – 1.6s: a thin blade enters cleanly from the right side of the frame and makes a single slow slice lengthwise down the centre of the leaf. No violence, no flashes, no particles — just a clean, considered cut. The two halves part gently by 2–3 pixels.
1.6s – 2.2s: the inner gel catches a gentle beam of light. A soft white-to-cream glow pulses across the exposed fillet surface. The glow intensifies sharply over the last 0.2s.
2.2s – 2.4s: WHITE FLASH — the glow blows out to a full-white frame for 2–3 frames (≈80–125ms). Clean, cinematic, like a camera flash or a momentary overexposure. No staged particle effect, no lens flare — just a peak-exposure moment.
2.4s – 3.0s: from the white flash, rapidly reveal the new aloe-themed end scene (match hero-last.jpg). The reveal is a fast 0.5s reverse-exposure: pure white → the aloe scene materialises through increasing saturation and contrast, like eyes adjusting after looking at the sun. No crossfade — an exposure recovery.
3.0s – 4.0s: hold on the aloe-themed end scene with a very subtle 1.02x → 1.00x slow zoom-out and ambient breathing on the leaves. The frame settles into its final composition.

Style: seamless, cinematic. The white flash is the ONE dramatic moment — everything else is slow and considered. No secondary cuts, no conventional lens flares, no text overlays, no particle effects. Natural physics throughout.

Hard requirements:
- First frame ≥95% pure white pixel mass (no early drift).
- Last frame matches the NEW hero-last.jpg pixel-for-pixel composition (aloe scene, no product).
- White flash is INSTANTANEOUS — 2–3 frames, no dissolve through grey.
- Post-flash reveal is a clean exposure recovery, not a crossfade.
- End scene is LOOPABLE — last frame should feel like it could cut cleanly back to the first white frame for an autoplay loop without jarring.

Colour grade: warm cream → white flash → warm golden-green end scene.
```

⚠ **When you regenerate:** delete the OLD `hero-last.jpg` (Foot Repair jar composition) and the OLD `hero.mp4` from `assets/stills/originals/` and `assets/video/` respectively, so we don't accidentally keep the outdated payoff shot around. I'll re-extract frames + adjust the playback mechanic (see next message) when you drop the new `hero.mp4` in.

### If Seedance produces a bad output

Common fixes (pulled from SKILLassets):

| Problem | Fix |
|---|---|
| First frame not white enough (verifier reports YAVG < 230) | Re-run with a stronger "pure white seamless background, studio light, no environment" in the start-frame prompt |
| Seedance introduces a hard cut halfway | Reduce the motion directive complexity, regenerate with a single clearer directive |
| Subject leaves frame | Re-prompt with "subject stays centred throughout" |
| Colours drift off-brand | Add `colour palette locked to #F6F2EA / #0F3B2C / #8DC735 / #00965E / #D8E4D1` to both the still prompts AND the motion prompt |

### Post-generation

Drop `hero.mp4` into `/Users/admin/Desktop/miracleofaloe/assets/video/` and run the FFmpeg verifier + frame extraction from `/Users/admin/Desktop/miracleofaloe/assets/video/README.md`.

---

## Final checklist

- [ ] Hero video generated, YAVG > 230 first frame, 4s duration, 1920×1080
- [ ] 4 UltraAloe stills generated in one session, tonally continuous
- [ ] 4 pillar stills generated
- [ ] Before/after heels with IDENTICAL framing
- [ ] Brand hero with right-side negative space
- [ ] All stills dropped into `assets/stills/` with exact filenames above
- [ ] `hero.mp4` dropped into `assets/video/`

Once everything is in place, ping me and I'll swap placeholders for real assets across the site + re-extract frames + update FRAME_COUNT.
