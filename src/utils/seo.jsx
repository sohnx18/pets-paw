import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEOHead({ title, description, image, canonical, schema }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

// Legacy function for backward compatibility - will be removed later
export function setTitleAndMeta({ title, description, image, canonical }) {
  console.warn('setTitleAndMeta is deprecated. Use SEOHead component instead.')
  // This function is now a no-op since Helmet handles meta tags
}
