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
import ProfileButton from '@/app/_home/ProfileButton';
import ThemeButton from './ThemeButton';
import Logo from './Logo';

const Navibar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
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
