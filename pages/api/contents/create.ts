import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import db from '@/db';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method === 'POST') {
    if (session.user.id) {
      try {
        const data = JSON.parse(req.body);

        await db.content.create({
          data: {
            userId: session.user.id,
            title: data.title,
            url: data.url,
          },
        });
        res.status(202).json({});
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }
}
