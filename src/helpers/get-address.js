export async function getAddress(ip = '8.8.8.8') {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_NKLdwHbDg7FcbQz0vViEGAcdehoa2&ipAddress=${ip}`
  )
  return await response.json()
}
