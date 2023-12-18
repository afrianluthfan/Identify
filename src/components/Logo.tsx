import Image from 'next/image';

const Logo = () => (
  <>
    <div className='dark:hidden'>
      <Image src='/logo-dark.svg' alt='logo' width={150} height={150} />
    </div>

    <div className='hidden dark:block'>
      <Image src='/logo.svg' alt='logo' width={150} height={150} />
    </div>
  </>
);
export default Logo;
