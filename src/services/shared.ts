const DEFAULT_HEADERS = {
  'X-Api-Public-Key': process.env.API_ROUTE_SECRET as string,
  'Content-Type': 'application/json',
}

export { DEFAULT_HEADERS }
