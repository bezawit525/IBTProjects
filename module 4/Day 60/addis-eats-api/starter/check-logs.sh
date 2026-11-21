#!/usr/bin/env bash
set -euo pipefail
FILE="${1:-logs.jsonl}"
if [[ ! -f "$FILE" ]]; then echo "Usage: redirect app stdout to logs.jsonl, then run: bash starter/check-logs.sh logs.jsonl"; exit 2; fi
patterns=(
  'SECRET_TOKEN_SHOULD_NOT_APPEAR'
  'SECRET_API_KEY_SHOULD_NOT_APPEAR'
  '0999999999'
  '0912345678'
  'Bearer [A-Za-z0-9._-]+'
)
failed=0
for pattern in "${patterns[@]}"; do
  if grep -E -n "$pattern" "$FILE"; then echo "FAIL: unredacted value matched: $pattern"; failed=1; fi
done
if (( failed )); then exit 1; fi
echo "PASS: no configured secret or phone test values found in $FILE"
