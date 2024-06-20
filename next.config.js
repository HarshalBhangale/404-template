const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // add your own icons to src/app/manifest.ts
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
});

module.exports = withNextIntl(nextConfig);
