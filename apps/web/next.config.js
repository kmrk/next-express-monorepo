/** @type {import('next').NextConfig} */
const utwm = require('unplugin-tailwindcss-mangle/webpack');
// import { webpackPlugin as utwm } from 'unplugin-tailwindcss-mangle';

module.exports = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    serverComponentsExternalPackages: ['oslo'],
  },
  webpack: (config) => {
    config.plugins.push(utwm());
    return config;
  },
};
