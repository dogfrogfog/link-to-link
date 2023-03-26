import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import db from '@/db';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method === 'DELETE') {
    if (session.user.id) {
      const contentId = req.body;

      await db.content.delete({
        where: {
          id: contentId,
        },
      });
      res.status(202).json({});
    }
  }
}
