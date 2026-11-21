# Addis Eats API standard

## Naming
- Plural nouns, lowercase, hyphenated. No verbs in paths.
- Nest to two levels only, to express belonging.

## Versioning
- URI versioning: /api/v1. The whole surface moves together.

## Methods
- POST creates, PATCH changes part, DELETE is idempotent.
- PUT is not used; clients never hold a whole representation.

## Responses
- Collections: { items, total, limit, offset }
- Members: the object itself.
- Errors: Nest standard { statusCode, error, message }; Day 58 adds path and requestId.

## Query controls
- Reserved: limit, offset, after, sort, fields, q.
- Filters are query parameters; multi-value filters are comma-separated.
- Sort uses a leading minus for descending; fields selects sparse representations.

## Status codes
- 201 on create, with Location. 204 on delete. 400 on validation. 404 when absent.
