import React, { FC } from 'react';
import UserCard from './userCard/UserCard';

const IdCardSection: FC = () => (
  <section className='relative min-h-fit items-center justify-center xs:px-4 ph:px-0'>
    <UserCard />
  </section>
);
export default IdCardSection;
