const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
  },
})
