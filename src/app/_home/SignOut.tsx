'use client';

import React, { FC } from 'react';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const SignOut: FC = () => (
  <DropdownMenuItem onClick={() => signOut()} className='gap-3'>
    <LogOut />
    Sign Out
  </DropdownMenuItem>
);

export default SignOut;
