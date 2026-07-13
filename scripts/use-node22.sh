#!/usr/bin/env sh
set -eu

NODE_DIR="${NODE_DIR:-$HOME/.local/node-v22}"

if [ ! -x "$NODE_DIR/bin/node" ]; then
  echo "Node 22 is not installed at $NODE_DIR." >&2
  echo "Install Node 22+ or set NODE_DIR to a Node installation path." >&2
  exit 1
fi

export PATH="$NODE_DIR/bin:$PATH"
exec "$@"
