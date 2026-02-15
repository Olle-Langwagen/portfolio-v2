import { ImageResponse } from 'next/og'
 
// Image metadata
export const alt = 'Olles Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030711', // Dark background
          backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '40px 80px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 50px -12px rgba(37, 99, 235, 0.5)', // Blue glow
          }}
        >
          {/* Namn */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-2px',
            }}
          >
            Olle
          </div>

          {/* Titel */}
          <div
            style={{
              fontSize: 30,
              color: '#60a5fa', // Blue-400
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontWeight: 700,
            }}
          >
            Fullstack Developer
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}