# Addis Eats Performance Report

## Test Environment

- Browser: Chrome
- Device: Record your device
- Network: Record your network or throttling setting
- CPU: Record your test setting
- Build command: `npm run build`

## Before Optimization

| Metric            | Result           |
| ----------------- | ---------------- |
| Performance score | Not measured yet |
| LCP               | Not measured yet |
| CLS               | Not measured yet |
| INP               | Not measured yet |

## Changes Made

### Images

- Added a reusable component using `next/image`.
- Added image dimensions and responsive `sizes`.
- Added meaningful alt text.
- Reserved image space to help prevent layout shift.
- Configured remote image hosts where needed.

### Fonts

- Configured `next/font` with the Latin subset.

### Scripts

- Documented deferred loading with `next/script`.
- Will use a real analytics provider when configured.

### JavaScript

- Kept display-only components as Server Components.
- Avoided adding `"use client"` to the dish card.

### Environment

- Created `.env.example`.
- Created local `.env.local`.
- Checked `.gitignore`.
- Kept secrets out of public environment variables.

## After Optimization

| Metric            | Before           | After            |
| ----------------- | ---------------- | ---------------- |
| Performance score | Not measured yet | Not measured yet |
| LCP               | Not measured yet | Not measured yet |
| CLS               | Not measured yet | Not measured yet |
| INP               | Not measured yet | Not measured yet |

## Analysis

### Biggest Improvement

Complete after comparing the actual Lighthouse results.

### Remaining Performance Problem

Complete after testing.

### Next Optimization

Complete after testing.
