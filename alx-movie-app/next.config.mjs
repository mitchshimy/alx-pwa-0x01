import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: 'public', // 👈 where the service worker + manifest will live
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // for remote image support
  },
};

export default withPWA({
  ...nextConfig
});
