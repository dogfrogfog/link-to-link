import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import AddLink from './AddLink';

const fields = Array(5).fill({
  link: 'https://example.com',
  title: 'Example',
});

export default async function Profile() {
  const data = await getServerSession(authOptions);

  return (
    <div>
      {data && <AddLink />}
      <div className="my-4">
        {fields.map((v, idx) => (
          <div
            key={v.title + idx}
            className="w-full bg-red-200 my-4 p-2 rounded-lg"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-bold">{v.title}</p>
                <p>{v.link}</p>
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
