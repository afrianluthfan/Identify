/* eslint-disable no-console */

'use client';

import React, { FC } from 'react';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const SignOut: FC = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('roastCache');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <DropdownMenuItem onClick={handleSignOut} className='gap-3'>
      <LogOut />
      Sign Out
    </DropdownMenuItem>
  );
};

export default SignOut;
