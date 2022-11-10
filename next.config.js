/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoiZGF3YS1zaGVycGEiLCJhIjoiY2xhN3gydXF2MGZlYjN2bXFucHVjMzlmbyJ9.wuYweVSUlwI9q0_x2_sSXA',
  },
};

module.export = nextConfig;
