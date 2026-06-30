import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object | object[];
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Skybolt Labs - Premium Web Development Agency in Cape Town',
  description = 'Professional web development services in Cape Town, South Africa. We build beautiful, modern websites with AI integration, e-commerce solutions, and cutting-edge technology.',
  keywords = 'web development Cape Town, web design South Africa, AI integration, e-commerce development, React development, UI/UX design Cape Town',
  image = 'https://skyboltlabs.co.za/og-image.jpg',
  url = 'https://skyboltlabs.co.za',
  schema,
  type = 'website',
  author,
  publishedTime,
  modifiedTime
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'Skybolt Labs'} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Skybolt Labs" />
      <meta property="og:locale" content="en_ZA" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@skyboltlabs" />
      <meta name="twitter:creator" content="@skyboltlabs" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="application-name" content="Skybolt Labs" />
      <meta name="apple-mobile-web-app-title" content="Skybolt Labs" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="ZA-WC" />
      <meta name="geo.placename" content="Cape Town" />
      <meta name="geo.position" content="-33.9249;18.4241" />
      <meta name="ICBM" content="-33.9249, 18.4241" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema], null, 2)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;