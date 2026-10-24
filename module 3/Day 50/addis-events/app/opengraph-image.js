import { ImageResponse } from 'next/og';
export const alt = 'Addis Events: events and workshops in Addis Ababa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#14382b', color: '#fff7e0' }}>
        <div style={{ display: 'flex', width: 120, height: 12, background: '#e8a317', marginBottom: 40 }} />
        <div style={{ fontSize: 96, fontWeight: 700, display: 'flex' }}>Addis Events</div>
        <div style={{ fontSize: 40, marginTop: 24, display: 'flex' }}>Events and workshops in Addis Ababa</div>
      </div>
    ),
    size
  );
}
