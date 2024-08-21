import { Urbanist } from 'next/font/google';
import localFont from 'next/font/local';

export const lexn = Urbanist({ weight: ['400', '600'], subsets: ['latin'] });

export const StretchPro = localFont({
  src: '../fonts/StretchPro.otf',
  display: 'swap',
});

export const cLight = localFont({
  src: '../fonts/CruyffSans-Light.woff2',
  display: 'swap',
});

export const cExtended = localFont({
  src: '../fonts/CruyffSansExpanded-Heavy.woff2',
  display: 'swap',
});
