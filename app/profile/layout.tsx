import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import SignOutButton from './SignOutButton';

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getServerSession(authOptions);
  return (
    <div className="p-4 bg-gray-300">
      <div className="text-center lg:text-left">
        <h1 className="my-4 text-md font-bold">
          {data && `Hi, ${data.user?.name}. Email: ${data.user?.email}!`}
          {data && <SignOutButton />}
        </h1>
      </div>
      {children}
    </div>
  );
}
