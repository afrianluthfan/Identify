import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/authOptions';
import PageFooter from '@/components/sections/PageFooter';
import SessionProvider from '@/providers/SessionProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import UIProvider from '@/providers/UIProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import Navibar from '../components/Navibar';

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
