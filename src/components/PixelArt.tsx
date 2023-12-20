import Image from 'next/image';

const PixelArt = () => (
  <>
    {/* light mode */}
    <div className='dark:hidden'>
      <Image
        src='/card-deco-pix-black.png'
        alt='logo'
        width={700}
        height={1000}
      />{' '}
    </div>

    {/* dark mode */}
    <div className='hidden dark:block'>
      <Image src='/card-deco-pix.png' alt='logo' width={700} height={1000} />
    </div>
  </>
);
export default PixelArt;
