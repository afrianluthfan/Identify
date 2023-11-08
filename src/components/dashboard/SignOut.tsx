'use client';

import React, { FC } from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

const SignOut: FC = () => <Button onClick={() => signOut()}>Sign out</Button>;

export default SignOut;
