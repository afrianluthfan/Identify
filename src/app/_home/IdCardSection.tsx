import React, { FC } from 'react';
import UserCard from './userCard/UserCard';

const IdCardSection: FC = () => (
  <section className='xs:px-4 ph:px-0 relative min-h-screen items-center justify-center'>
    <UserCard />
  </section>
);
export default IdCardSection;
