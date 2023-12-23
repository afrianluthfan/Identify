import { Urbanist } from 'next/font/google';
import localFont from 'next/font/local';

export const lexn = Urbanist({ weight: ['400', '600'], subsets: ['latin'] });

export const StretchPro = localFont({
  src: './app/StretchPro.otf',
  display: 'swap',
});
