export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://company.invexix.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Kigali BF Tech Group',
    alternateName: ['BF Tech Group', 'Kigali BF Tech', 'BF Tech Group Rwanda'],
    url: baseUrl,
    logo: `${baseUrl}/icon.jpeg`,
    image: `${baseUrl}/icon.jpeg`,
    description: 'Premier Software Engineering Company & IT Solutions Provider in Kigali, Rwanda & East Africa. Expert Custom Web Development, Mobile Apps, Cyber Security, Cloud Architecture & Digital Transformation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gisozi',
      addressLocality: 'Kigali',
      addressRegion: 'Kigali City',
      addressCountry: 'RW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-1.9441',
      longitude: '30.0619',
    },
    telephone: '+250789321535',
    email: 'bflabscompany@gmail.com',
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Rwanda',
      },
      {
        '@type': 'Place',
        name: 'Kigali',
      },
      {
        '@type': 'Place',
        name: 'East Africa',
      },
      {
        '@type': 'Continent',
        name: 'Africa',
      },
    ],
    knowsAbout: [
      'Software Engineering',
      'Custom Web Development',
      'Mobile Application Development',
      'Cyber Security Services',
      'Cloud Computing & Infrastructure',
      'UI/UX Design',
      'IT Consulting Rwanda',
      'Enterprise Software Solutions',
    ],
    sameAs: [
      'https://github.com/BF-TECH-GROUP-ORG',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Kigali BF Tech Group | Premier Tech Company in Rwanda',
    url: baseUrl,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/OurServices?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
