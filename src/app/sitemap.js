import { SERVICES_DATA } from './data/servicesData';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://company.invexix.com';

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/OurServices/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const staticRoutes = [
    '',
    '/AboutUs',
    '/ContactUs',
    '/OurServices',
    '/Solutions',
    '/Team',
    '/Technologies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
