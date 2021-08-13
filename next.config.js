/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    NEXT_API_URL: 'http://localhost:8000',
    NEXT_FRONT_URL: 'http://localhost:3000'
  },
}

module.exports = nextConfig