#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="$SCRIPT_DIR/ppt-master"
DEST_ROOT="${CODEX_HOME:-$HOME/.codex}/skills"
DEST="$DEST_ROOT/ppt-master"

if [ ! -d "$SOURCE" ]; then
  echo "Source skill not found: $SOURCE" >&2
  exit 1
fi

mkdir -p "$DEST_ROOT"
rm -rf "$DEST"
cp -R "$SOURCE" "$DEST"

echo "Installed ppt-master skill to $DEST"
