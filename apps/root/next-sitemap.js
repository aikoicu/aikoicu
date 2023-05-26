require('dotenv').config({ path: '../../.env' });

const pathsForIgnore = ['/admin'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.DOMAIN + process.env.SUBDOMAIN,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 4000,
  transform: async (config, path) => {
    if (ignorePath(path)) return null;

    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: pathsForIgnore,
      },
    ],
  },
};

function ignorePath(path) {
  if (!path) return false;

  return pathsForIgnore.some((ignore) => {
    if (!ignore) return false;

    return path.startsWith(ignore);
  });
}
