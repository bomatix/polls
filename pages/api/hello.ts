// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import { Database } from 'sqlite3'
import User from '../../models/User'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const db = await open({filename: 'poll-database.sqlite', driver: Database})
  const users = await db.all('SELECT * FROM users') as User[]
  res.json(users)
}
