import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/authOptions';
import Image from 'next/image';
import ThemeButton from './ThemeButton';
import ProfileButton from './home/ProfileButton';

const Navibar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Navbar>
      <NavbarBrand>
        <Image src='/logo.svg' alt='logo' width={150} height={150} />
      </NavbarBrand>
      {session ? (
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <ProfileButton session={session} />
          </NavbarItem>
          <NavbarItem>
            <ThemeButton />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#home'>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#about'>
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#footer'>
              Contact Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeButton />
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
};

export default Navibar;
