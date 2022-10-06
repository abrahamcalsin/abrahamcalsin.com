export const getAllPackageDownloads = async (q: string) => {
  const res = await fetch(`https://api.npmjs.org/downloads/point/last-year/${q}`)
  const data = await res.json()

  return data
}
