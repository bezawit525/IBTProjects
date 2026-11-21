import type { Page } from './page';

export function toPage<T>(rows: T[], limit: number, offset: number): Page<T> {
  return {
    items: rows.slice(offset, offset + limit),
    total: rows.length,
    limit,
    offset,
  };
}
