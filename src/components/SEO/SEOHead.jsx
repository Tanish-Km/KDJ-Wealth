import { Helmet } from 'react-helmet-async';

export default function SEOHead() {
  return (
    <Helmet>
      <title>KDJ Wealth | Trusted Financial Partner for Lasting Wealth</title>
      <meta
        name="description"
        content="KDJ Wealth — AMFI-registered Mutual Fund Distributor offering personalized investment solutions, financial planning, and wealth management services."
      />
      <link rel="canonical" href="https://www.kdjcapitalresearch.com/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="KDJ Wealth | Trusted Financial Partner for Lasting Wealth" />
      <meta
        property="og:description"
        content="KDJ Wealth — AMFI-registered Mutual Fund Distributor offering personalized investment solutions, financial planning, and wealth management services."
      />
      <meta property="og:url" content="https://www.kdjcapitalresearch.com/" />
      <meta property="og:site_name" content="KDJ Wealth" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kdjcapitalresearch" />
      <meta name="twitter:title" content="KDJ Wealth | Trusted Financial Partner for Lasting Wealth" />
      <meta
        name="twitter:description"
        content="KDJ Wealth — AMFI-registered Mutual Fund Distributor offering personalized investment solutions, financial planning, and wealth management services."
      />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="11 minutes" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://www.kdjcapitalresearch.com/',
              url: 'https://www.kdjcapitalresearch.com/',
              name: 'KDJ Wealth | Trusted Financial Partner for Lasting Wealth',
              description:
                'KDJ Wealth — AMFI-registered Mutual Fund Distributor offering personalized investment solutions, financial planning, and wealth management services.',
              isPartOf: { '@id': 'https://www.kdjcapitalresearch.com/#website' },
            },
            {
              '@type': 'Organization',
              '@id': 'https://www.kdjcapitalresearch.com/#organization',
              name: 'KDJ Wealth',
              alternateName: 'KDJ Wealth',
              url: 'https://www.kdjcapitalresearch.com/',
              sameAs: [],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kdjcapitalresearch.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services' },
              ],
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
