export const getAllDownloadsRGFB = async () => {
  const packageName = 'react-github-fork-banner'

  const res = await fetch(`https://api.npmjs.org/downloads/point/last-year/${packageName}`)
  const data = await res.json()

  return data
}
