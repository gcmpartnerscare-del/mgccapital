import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, author, ogImage, ogUrl }) => {
  return (
    <Helmet>
      <title>{title || 'GCM Partners'}</title>
      <meta name="description" content={description || 'Default GCM Partners description'} />
      <meta name="keywords" content={keywords || 'investment, wealth, finance, GCM Partners'} />
      <meta name="author" content={author || 'GCM Partners'} />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title || 'GCM Partners'} />
      <meta property="og:description" content={description || 'Default GCM Partners description'} />
      <meta property="og:image" content={ogImage || '/default-og-image.jpg'} />
      <meta property="og:url" content={ogUrl || 'https://gcmpartners.net'} />
      <meta property="og:type" content="website" />

      {/* Twitter Card (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'GCM Partners'} />
      <meta name="twitter:description" content={description || 'Default GCM Partners description'} />
      <meta name="twitter:image" content={ogImage || '/default-og-image.jpg'} />
    </Helmet>
  )
}

export default SEO


/*
import React from 'react'
import SEO from '../components/SEO'

function HomePage() {
  return (
    <>
      <SEO 
        title="Home | GCM partners"
        description="Global private wealth and investment solutions."
        keywords="GCM partners, investment, finance, offshore wealth"
        ogUrl="https://gcmpartners.com/"
        ogImage="/images/GCM-home-preview.jpg"
      />
      <main>
        Your Page content here
      </main>
    </>
  )
}
export default HomePage

*/