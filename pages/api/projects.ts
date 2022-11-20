import type { NextApiRequest, NextApiResponse } from 'next'

import { notion } from '~/lib/notion/notion'
import authMiddelware from '~/server/middlewares/auth-middleware'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await authMiddelware(req, res)

  const response = await notion({
    notionApiKey: process.env.NOTION_API_KEY!,
    notionDatabaseId: process.env.NOTION_DATABASE_ID!,
    sorts: [
      {
        property: 'startedAt',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'status',
      select: { equals: 'published' },
    },
  })

  return res.status(200).json(response)
}
