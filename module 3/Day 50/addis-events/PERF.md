# PERF.md

Measure on the **deployed** build: Chrome → Lighthouse → Mobile, throttled. Fill both columns, then write what caused each change.

| Metric | Target | Before | After | What caused the change |
|---|---|---|---|---|
| LCP | < 2.5 s | _fill in_ | _fill in_ | |
| CLS | < 0.1 | _fill in_ | _fill in_ | |
| INP | < 200 ms | _fill in_ | _fill in_ | |
| Largest image | < 150 kB | n/a | none (no images) | |

Measured locally from `next build` (First Load JS, shared 87 kB): home 94 kB, events 95 kB, dashboard 94 kB. Design choices that help: system fonts (no font download), no images, generated og image, public pages prerendered, client JavaScript limited to forms and the event filter.
