import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import AddLink from './AddLink';
import db, { Content } from '@/db';

const fields = Array(5).fill({
  link: 'https://example.com',
  title: 'Example',
});

export default async function Profile() {
  const data = await getServerSession(authOptions);
  const userLinks = await db.content.findMany({
    where: {
      userId: data?.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    }
  }) as Content[];

  return (
    <div>
      {data && <AddLink />}
      <div className="my-4">
        {userLinks?.map(v => (
          <div
            key={v.id}
            className="w-full bg-red-200 my-4 p-2 rounded-lg"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-bold">{v.title}</p>
                <p>{v.url}</p>
              </div>
              {data && (
                <div>
                  <button className="btn btn-success">edit</button>
                  <button className="btn btn-error">delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
