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
import ProfileButton from '@/components/navbar/ProfileButton';
import { cLight } from '@/utils/Font';
import ThemeButton from '../ThemeButton';
import Logo from '../Logo';

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
          <NavbarContent className='hidden gap-4 sm:flex' justify='end'>
            <NavbarItem>
              <Link
                color='foreground'
                href='/'
                className={`${cLight.className} font-semibold`}
              >
                home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color='foreground'
                href='/about'
                className={`${cLight.className} font-semibold`}
              >
                about
              </Link>
            </NavbarItem>
            <NavbarItem>
              <ThemeButton />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify='end' className='sm:hidden'>
            <NavbarItem>
              <ThemeButton />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <NavbarItem>
              <Link color='foreground' href='/'>
                home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color='foreground' href='/about'>
                about
              </Link>
            </NavbarItem>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
};

export default Navibar;
