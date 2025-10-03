/**
 * Dynamic Sitemap Generator
 * 
 * This script generates a sitemap.xml file based on your project data.
 * Run this script whenever you add new projects to keep your sitemap updated.
 * 
 * Usage: node src/utils/generateSitemap.js
 */

import { projectsData } from '../data/projectsData.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://devendramali.tech';
const TODAY = new Date().toISOString().split('T')[0];

function generateSitemap() {
    const urls = [
        // Homepage
        {
            loc: `${DOMAIN}/`,
            lastmod: TODAY,
            changefreq: 'weekly',
            priority: '1.0'
        },
        // Home sections
        {
            loc: `${DOMAIN}/#about`,
            lastmod: TODAY,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            loc: `${DOMAIN}/#projects`,
            lastmod: TODAY,
            changefreq: 'weekly',
            priority: '0.9'
        },
        {
            loc: `${DOMAIN}/#contact`,
            lastmod: TODAY,
            changefreq: 'monthly',
            priority: '0.8'
        },
        // Dynamic case study pages
        ...projectsData.map(project => ({
            loc: `${DOMAIN}/case-study/${project.id}`,
            lastmod: TODAY,
            changefreq: 'monthly',
            priority: '0.7'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls.map(url => `    <!-- ${url.loc.split('/').pop() || 'Homepage'} -->
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('\n\n')}

</urlset>`;

    const publicPath = join(__dirname, '../../public/sitemap.xml');
    writeFileSync(publicPath, sitemap, 'utf-8');
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📄 Total URLs: ${urls.length}`);
}

generateSitemap();
