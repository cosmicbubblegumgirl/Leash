/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isPagesBuild = Boolean(process.env.GITHUB_ACTIONS && repoName)
const basePath = isPagesBuild ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
}

module.exports = nextConfig