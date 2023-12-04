import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Navibar from './components/Navibar';
import ThemeProvider from './components/ThemeProvider';
import PageFooter from './sections/PageFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uncoverify',
  description: 'Uncover your musical aura',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>
      <ThemeProvider>
        <Providers>
          {/* <Blob className='rounded-[30%] z-0 absolute blur-[80px]' /> */}
          <div>
            <Navibar />
            {children}
            <PageFooter />
          </div>
        </Providers>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
