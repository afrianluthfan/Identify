'use client';

import React, { FC, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import ProfileButton from '@/app/_home/ProfileButton';
import ThemeButton from './ThemeButton';
import Logo from './Logo';

const Navibar: FC = () => {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {session ? (
        <>
          <NavbarContent justify='start'>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className='flex gap-1' justify='end'>
            <NavbarItem>
              <ProfileButton session={session} />
            </NavbarItem>
            <NavbarItem>
              <ThemeButton />
            </NavbarItem>
          </NavbarContent>
        </>
      ) : (
        <>
          <NavbarContent className='sm:hidden'>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
          </NavbarContent>
          <NavbarContent justify='start'>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className='hidden sm:flex gap-4' justify='center'>
            <NavbarItem>
              <Link color='foreground' href='#home'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color='foreground' href='#about'>
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color='foreground' href='#footer'>
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify='end'>
            <NavbarItem>
              <ThemeButton />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <NavbarItem>
              <Link color='foreground' href='#home'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color='foreground' href='#home'>
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color='foreground' href='#home'>
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
};

export default Navibar;
