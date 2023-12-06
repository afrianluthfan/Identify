'use client';

import React, { FC } from 'react';
import SignIn from '@/components/dashboard/SignIn';

const Landing: FC = () => (
  <div>
    <h1>You&apos;re not logged in</h1>
    <SignIn />
  </div>
);

export default Landing;
