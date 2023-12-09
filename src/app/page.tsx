import React, { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/authOptions';
import TopTracksSection from '@/components/home/TopTracksSection';

const Home: FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <TopTracksSection accessToken={session?.accessToken ?? ''} />
    </main>
  );
};

export default Home;
