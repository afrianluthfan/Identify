import { getServerSession } from 'next-auth';
import SignOut from '@/components/dashboard/SignOut';
import TopTracks from '@/components/dashboard/TopTracks';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken ?? '';

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      <SignOut />
      <TopTracks accessToken={accessToken} />
    </div>
  );
};

export default Home;
