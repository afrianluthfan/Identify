'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import ThemeButton from './ThemeButton';

const Navibar = () => (
  <Navbar>
    <NavbarBrand>
      <p className='font-bold text-2xl text-black dark:text-white'>Identify</p>
    </NavbarBrand>
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
  </Navbar>
);

export default Navibar;
