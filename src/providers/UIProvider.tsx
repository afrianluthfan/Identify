'use client';

import React, { FC } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider: FC<UIProviderProps> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default UIProvider;
