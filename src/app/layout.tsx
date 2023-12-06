import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/utils/SessionProvider';
import ReactQueryProvider from '@/utils/ReactQueryProvider';
import { authOptions } from '@/server/authOptions';
import Providers from '../utils/providers';
import Navibar from '../components/Navibar';
import ThemeProvider from '../utils/ThemeProvider';
import PageFooter from './sections/PageFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uncoverify',
  description: 'Uncover your musical aura',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <ThemeProvider>
              <Providers>
                <Navibar />
                {children}
                <PageFooter />
              </Providers>
            </ThemeProvider>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
