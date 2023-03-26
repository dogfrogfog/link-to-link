import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import AddLink from './AddLink';
import DeleteLinkButton from './DeleteContentButton';
import db, { Content } from '@/db';
import { Suspense } from 'react';
import DraggingArea from './DraggingArea';

export default async function Profile() {
  const data = await getServerSession(authOptions);
  const userLinks = (await db.content.findMany({
    where: {
      userId: data?.user.id,
    },
  })) as Content[];

  return (
    <div>
      {data && <AddLink />}
      <div className="my-4">
        <DraggingArea>
          {/* <Suspense fallback={<div>{console.log('wef')}Loading...</div>}> */}
            {userLinks?.map((v) => (
              <div key={v.id} className="w-full my-4 p-2 rounded-lg bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{v.title}</p>
                    <p>{v.url}</p>
                  </div>
                  <DeleteLinkButton contentId={v.id} />
                </div>
              </div>
            ))}
          {/* </Suspense> */}
        </DraggingArea>
      </div>
    </div>
  );
}
