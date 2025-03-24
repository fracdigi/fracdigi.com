import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const SEO = ({ title, description, canonical, ogImage = '/images/og-image.jpg' }: SEOProps) => {
  const siteTitle = `${title} - Fracdigi`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default SEO;