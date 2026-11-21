#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${BASE_URL:-http://localhost:3000/api/v1/orders}"
DIR="$(cd "$(dirname "$0")" && pwd)"
failures=0
for file in "$DIR"/bad-requests/*.json; do
  name="$(basename "$file")"
  case "$name" in
    01-*|02-*|03-*|04-*|05-*|06-*|07-*|08-*|12-*) expected=400 ;;
    09-*) expected=404 ;;
    10-*) expected=409 ;;
    11-*) expected=422 ;;
    *) expected=0 ;;
  esac
  response="$(curl -sS -w '\nHTTP_STATUS:%{http_code}' -X POST "$BASE_URL" -H 'Content-Type: application/json' --data-binary "@$file")"
  code="${response##*HTTP_STATUS:}"
  body="${response%$'\n'HTTP_STATUS:*}"
  result="$(printf '%s' "$body" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{try{const x=JSON.parse(s);const keys=['statusCode','message','path','timestamp','requestId'];const ok=keys.every(k=>Object.hasOwn(x,k));const msg=Array.isArray(x.message)?x.message.join(' | '):String(x.message);console.log((ok?'SHAPE_OK':'BAD_SHAPE')+'\\t'+msg)}catch{console.log('BAD_JSON\\t'+s)}})")"
  shape="${result%%$'\t'*}"
  message="${result#*$'\t'}"
  if [[ "$code" != "$expected" || "$shape" != "SHAPE_OK" ]]; then
    failures=$((failures + 1))
    mark="FAIL (expected $expected and five-field shape)"
  else
    mark="PASS"
  fi
  printf '%-34s HTTP %-3s %-4s %s\n' "$name" "$code" "$mark" "$message"
done
if (( failures > 0 )); then
  echo "$failures request(s) failed. Compare with starter/expected.md."
  exit 1
fi
echo "All twelve requests returned the expected status and five-field error shape."
