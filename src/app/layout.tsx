import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/provider/SessionProvider';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import { authOptions } from '@/server/authOptions';
import UIProvider from '@/provider/UIProvider';
import PageFooter from '@/components/sections/PageFooter';
import Navibar from '../components/Navibar';
import ThemeProvider from '../provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Identify',
  description: 'Identify your musical affinities',
  icons: '/fav.svg',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <UIProvider>
              <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
              >
                <Navibar />
                {children}
                <PageFooter />
              </ThemeProvider>
            </UIProvider>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
