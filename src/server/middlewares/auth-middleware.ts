import type { NextApiRequest, NextApiResponse } from 'next'

export default async function authMiddelware(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<void>((resolve, reject) => {
    const key = 'x-api-public-key'

    const value = req.headers[key] || req.query[key]

    if (!value) {
      return reject(
        res.status(400).json({
          error: {
            message: 'The api public key is required',
          },
        }),
      )
    }

    if (value === process.env.API_ROUTE_SECRET) {
      return resolve()
    }

    return reject(
      res.status(401).json({
        error: {
          message: 'You are not authorized to call this API',
        },
      }),
    )
  })
}
