// Name of our GitHub repository
const GITHUB_REPO_NAME = 'github-actions-test';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${GITHUB_REPO_NAME}`,
  assetPrefix: `/${GITHUB_REPO_NAME}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
