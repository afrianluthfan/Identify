import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <>
    <div className='dark:hidden'>
      <Link href='/'>
        <Image src='/logo-dark.svg' alt='logo' width={150} height={150} />
      </Link>
    </div>

    <div className='hidden dark:block'>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' width={150} height={150} />
      </Link>
    </div>
  </>
);
export default Logo;
