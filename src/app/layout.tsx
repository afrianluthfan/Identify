import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/authOptions';
import PageFooter from '@/components/PageFooter';
import SessionProvider from '@/providers/SessionProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import UIProvider from '@/providers/UIProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import { Toaster } from 'sonner';
import Script from 'next/script';
import Navibar from '../components/navbar/Navibar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Identify',
  description: 'Identify your musical affinities',
  metadataBase: new URL('https://identi-fy.live'),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en' suppressHydrationWarning>
      <Script
        defer
        src='https://analytics.aliezan.me/script.js'
        data-website-id='b15f8f63-2d78-4b77-931d-4943520bc63e'
      />
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <UIProvider>
              <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
              >
                <Toaster position='top-right' richColors />
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
