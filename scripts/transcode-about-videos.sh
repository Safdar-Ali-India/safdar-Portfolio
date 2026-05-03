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

echo "Done. Sizes:"
ls -lh "$OUT"/*.mp4
