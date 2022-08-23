/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: "/api/fetchUserProfile",
        destination: "https://moog3.herokuapp.com/api/fetchUserProfile",
        permanent: true,
      },
      {
        source: "/api/fetchUserProfileById",
        destination: "https://moog3.herokuapp.com/api/fetchUserProfileById",
        permanent: true // permanent redirect
      },
      {
        source: "/api/fetchContributionByProjId",
        destination: "https://moog3.herokuapp.com/api/fetchContributionByProjId",
        permanent: true // permanent redirect
      },
      {
        source: "/api/fetchPostById",
        destination: "https://moog3.herokuapp.com/api/fetchPostById",
        permanent: true // permanent redirect
      },
      {
        source: "/api/fetchProjectByProfile",
        destination: "https://moog3.herokuapp.com/api/fetchProjectByProfile",
        permanent: true // permanent redirect
      },
      {
        source: "/api/fetchProjectProfile",
        destination: "https://moog3.herokuapp.com/api/fetchProjectProfile",
        permanent: true // permanent redirect
      },
      {
        source: "/api/fetchProjectProfileById",
        destination: "https://moog3.herokuapp.com/api/fetchProjectProfileById",
        permanent: true // permanent redirect
      },

    ];
  },
  nextConfig,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}