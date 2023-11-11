import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Navbar from './components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-5xl font-bold mb-5 text-white'>
        Uncover your musical aura
      </h1>
      <p className='text-l mb-8 block whitespace-pre text-center text-white'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        <br />
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
      </p>
      <div className='flex items-center justify-center'>
        <Button className='font-bold' size='lg'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
            alt='spotify-icon'
            width={30}
            height={30}
          />
          Sign in with Spotify
        </Button>
      </div>
    </div>
  </>
);

export default Home;
