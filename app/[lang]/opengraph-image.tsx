import { ImageResponse } from 'next/og'
import { getDictionary } from '@/lib/get-dictionary'
import { Locale } from '@/lib/i18n-config'
 
// Image metadata
export const alt = 'Olle Langwagen Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang)
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ fontSize: 64, color: '#666' }}>
            {dictionary.page.home.title}
        </div>
        <div style={{ color: '#2563eb', fontWeight: 'bold' }}>
            {dictionary.page.home.name}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}