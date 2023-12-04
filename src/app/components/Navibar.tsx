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
      <p className='font-bold text-2xl text-inherit'>Identify</p>
    </NavbarBrand>
    <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='#/'>
          About Us
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href='#/' aria-current='page'>
          Contact Us
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='#/'>
          FAQs
        </Link>
      </NavbarItem>
      <NavbarItem>
        <ThemeButton />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default Navibar;
