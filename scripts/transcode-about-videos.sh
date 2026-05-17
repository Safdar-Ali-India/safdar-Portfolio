#!/usr/bin/env bash
# Transcode About page clips: silent, web-friendly, max width 1280, faststart.
# Usage: set INPUT_* paths to your raw exports, then run from repo root:
#   bash scripts/transcode-about-videos.sh
#
# If any file is still >5MB, bump -crf to 32 (or 34) and re-run.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/about"
mkdir -p "$OUT"

# --- set your source files here ---
INPUT_DESK="${INPUT_DESK:-$HOME/Downloads/youtube-recording-video.mp4}"
INPUT_CYCLE="${INPUT_CYCLE:-$HOME/Downloads/bike-riding-video.mp4}"
INPUT_CRICKET="${INPUT_CRICKET:-$HOME/Downloads/cricket-bowling-video.mp4}"

ffmpeg -y -i "$INPUT_DESK" \
  -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -an -movflags +faststart \
  "$OUT/clip-desk-loop.mp4"

ffmpeg -y -i "$INPUT_CYCLE" \
  -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -an -movflags +faststart \
  "$OUT/clip-running-slowmo.mp4"

ffmpeg -y -i "$INPUT_CRICKET" \
  -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -an -movflags +faststart \
  "$OUT/clip-cricket-bowl.mp4"

FFMPEG="${FFMPEG:-ffmpeg}"
for pair in "clip-desk-loop:poster-desk-loop.webp" "clip-cricket-bowl:poster-cricket-bowl.webp" "clip-bike-riding:poster-bike-riding.webp"; do
  clip="${pair%%:*}"
  poster="${pair##*:}"
  if [[ -f "$OUT/${clip}.mp4" ]]; then
    "$FFMPEG" -y -ss 0.5 -i "$OUT/${clip}.mp4" -vframes 1 -vf "scale=960:-2" "$OUT/$poster" 2>/dev/null || true
  fi
done

echo "Done. Sizes:"
ls -lh "$OUT"/*.mp4 "$OUT"/poster-*.webp 2>/dev/null || ls -lh "$OUT"/*.mp4
