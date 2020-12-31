const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    LOCAL_URL: process.env.LOCAL_URL,
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
});
