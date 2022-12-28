const { default: next } = require("next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://checkout.stripe.com",
      },
    ];
  },
};

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
