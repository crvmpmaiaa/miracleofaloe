# Video Generation Brief — Seedance

## Hero Video Spec

- **`hero.mp4`** — Cinematic hero video
  - Spec: 1920×1080, 4–5s duration, 24–30fps source, H.264
  - First frame: pure white seamless background, single aloe leaf centred, studio light per SKILLassets input contract
  - Motion arc: aloe leaf cleanly sliced → inner gel catches morning light → dissolves into Foot Repair jar landing centred in frame
  - Last frame: Foot Repair jar composed on warm cream/linen surface, soft natural light
  - Palette: aloe-green + cream + warm neutrals

---

## FFmpeg Verifier

Run this after placing `hero.mp4` in this directory to verify specs and first-frame whiteness:

```bash
VIDEO=hero.mp4
ffprobe -v quiet -print_format json -show_streams -show_format "$VIDEO" | \
  jq '{duration: .format.duration, width: .streams[0].width, height: .streams[0].height, fps: .streams[0].r_frame_rate}'

# First frame must be white-dominant (mean luminance > 240/255)
ffmpeg -y -i "$VIDEO" -vf "select=eq(n\,0),signalstats" -f null - 2>&1 | \
  grep -o 'YAVG:[0-9.]*' | head -1
# If YAVG < 230, regenerate — first frame is not white enough.
```

---

## Frame Extraction

Run this from `assets/` after the real video replaces the placeholder:

```bash
rm -f frames/*.jpg
ffmpeg -i video/hero.mp4 -vf "fps=24,scale=1920:-2" -q:v 2 frames/frame_%04d.jpg
ls frames/ | wc -l
# Update FRAME_COUNT in js/home.js to match this number.
```

---

## Expected Output

- Filename: `hero.mp4` (drops into `assets/video/`)
- Resolution: 1920×1080
- Duration: 4–5 seconds
- Frame rate: 24–30 fps
- Codec: H.264
