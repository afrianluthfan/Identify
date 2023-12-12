import React, { FC } from 'react';
import { Avatar } from '@nextui-org/react';
import { Session } from 'next-auth';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import SignOut from './SignOut';

interface ProfileButtonProps {
  session: Session;
}

const ProfileButton: FC<ProfileButtonProps> = ({ session }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='ghost' size='default' className='gap-4'>
        <Avatar
          src={session?.user?.image ?? ''}
          size='sm'
          isBordered
          color='success'
        />
        <ChevronDown />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
      <DropdownMenuLabel className='text-tiny font-normal'>{session?.user?.email}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <SignOut />
    </DropdownMenuContent>
  </DropdownMenu>
);

export default ProfileButton;
