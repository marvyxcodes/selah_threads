const { default: next } = require("next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// Remote images must be explicity allowed via hostname and path for security purposes. I am just using hostname for now

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "image.uniqlo.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "ih1.redbubble.net",
      },
      {
        protocol: "https",
        hostname: "onepiece.store",
      },
      {
        protocol: "https",
        hostname: "litb-cgis.rightinthebox.com",
      },
      {
        protocol: "https",
        hostname: "cdn.media.amplience.net",
      },
      {
        protocol: "https",
        hostname: "nikifilini.com",
      },
      {
        protocol: "https",
        hostname: "i.etsystatic.com",
      },
      {
        protocol: "https",
        hostname: "attackontitanstuff.com",
      },
      {
        protocol: "https",
        hostname: "myheroacademia.store",
      },
      {
        protocol: "https",
        hostname: "onepiece.store",
      },
      {
        protocol: "https",
        hostname: "onepiece.store",
      },
    ],
  },
};
