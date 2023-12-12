import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import HomeText from '../HomeText';
import RunningText from '../RunningText';

const Hero: FC = () => (
  <section
    id='home'
    className='flex items-center align-middle justify-center h-[1080px]'
  >
    <div className=' my-52'>
      <div className='mt-[100px]'>
        <HomeText />
        <Chip size='lg'>Chip</Chip>
      </div>
      <div className='mt-[275px]'>
        <RunningText
          length='100%'
          overflow='hidden'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        pellentesque dapibus est, nec aliquet ipsum efficitur at. Suspendisse
        dictum ullamcorper massa id luctus. Integer vitae erat pulvinar, euismod
        risus in, bibendum odio. Ut ligula tortor, facilisis ac ipsum vitae,
        varius tristique neque. Mauris ut rhoncus odio. Nam ultricies, velit
        blandit fermentum aliquam, nisi nisl viverra felis, ac pharetra diam mi
        ultricies sem. Integer convallis est nec lacus auctor pretium. Curabitur
        vestibulum ligula a velit bibendum interdum. Duis neque sem, blandit nec
        enim et, tincidunt consectetur elit. Sed at sodales metus. Duis dictum
        in ligula vel facilisis. In porta aliquam purus sit amet suscipit. Cras
        quis facilisis neque. Morbi lectus massa, mattis vitae sagittis ut,
        gravida a nibh. Suspendisse quis eros cursus purus hendrerit cursus at
        sed risus. Phasellus iaculis ante id nunc pharetra, vel dapibus eros
        ultrices. Aliquam mollis sed nisl nec pellentesque. Morbi vehicula velit
        augue, nec et.'
        />
      </div>
    </div>
  </section>
);

export default Hero;
