# Addis Eats API Standard

## Naming
- Collection paths use plural, lowercase nouns; paths contain no action verbs.
- Nested resources express belonging and stay at no more than two levels.
- Filters and views belong in query strings, not path segments.
- No file extensions or trailing slashes.
- Reserved query names: `limit`, `offset`, `after`, `sort`, `fields`, `q`.

## Versioning
- URI versioning is used for the whole API: `/api/v1/...`.
- The default version is `1`; unversioned resource paths are not supported.
- Breaking changes require a new version. Additive optional fields and new endpoints do not.

## Methods
- `GET` reads and is safe.
- `POST` creates a resource and is not idempotent.
- `PATCH` partially updates a resource; omitted fields remain unchanged.
- `DELETE` removes a resource and is idempotent; deleting an already absent resource still returns 204.
- `PUT` is not used because clients do not own complete resource representations.

## Response shapes
- Collection responses use `{ items, total, limit, offset }`.
- Member responses return the resource itself.
- Create responses return 201, the created resource, and a `Location` header.
- Delete responses return 204 with no body.
- Nest's standard error shape is retained: `{ statusCode, error, message }`. Day 58 adds `path` and `requestId`.

## Query controls
- Equality filters use `?status=pending`.
- Multi-value filters are comma-separated: `?status=pending,preparing`.
- Sorting uses `?sort=name` ascending and `?sort=-totalSantim` descending. Multiple sort keys are comma-separated; the first key wins ties.
- Sparse fields use `?fields=id,name,area`.
- Free-text search reserves `q`.
- Offset pagination uses `limit` (default 10 or resource-specific default, maximum 50) and `offset` (default 0).
- The same query names and semantics apply across collection endpoints.

## Status codes
- 200 for successful reads and updates.
- 201 for resource creation, with `Location`.
- 204 for successful deletion, including repeated deletion.
- 400 for malformed or invalid request input.
- 404 when a requested member or parent resource does not exist.
- 409 for a valid request that conflicts with current state.
- 422 for a well-formed request that is semantically impossible, if introduced consistently.
- 500 is reserved for unexpected server defects and is never returned intentionally.
