'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextUIProvider>
    <NextThemesProvider attribute='class' defaultTheme='dark'>
      {children}
    </NextThemesProvider>
  </NextUIProvider>
);

export default ThemeProvider;
