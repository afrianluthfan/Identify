import React, { FC } from 'react';
import Image from 'next/image';
import { StretchPro, lexn } from '@/Font';
import { Separator } from '@/components/ui/separator';
import { ScrollShadow } from '@nextui-org/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const About: FC = () => (
  <section className='h-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center p-20'>
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]' />
    <div>
      <div className='flex items-center gap-5'>
        <div className='flex gap-3'>
          <Image src='./fav.svg' width={70} height={70} alt='logo' />
          <p className='font-bold text-[40px]'>/</p>
        </div>
        <p className={`${StretchPro.className} text-[40px]`}>about</p>
      </div>
      <Separator className='w-[400px] sm:w-[1375px] my-5' />
      <h1 className={`${lexn.className}`}>The Creators</h1>
      <div className='flex flex-col sm:flex-row sm:justify-between my-5'>
        <div className='space-y-3'>
          <div className='w-[400px] flex gap-5'>
            <div
              className='h-[90px] w-[90px]'
              style={{
                position: 'relative',
              }}
            >
              <Image
                src='/alie.jpg'
                alt='image'
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50px',
                }}
              />
            </div>
            <div className='my-3'>
              <p className='text-tiny font-semibold'>Muhammad Alieza Nuriman</p>
              <div className='flex my-3 gap-2'>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='https://github.com/aliezan'
                >
                  <>
                    <Image
                      src='/github-mark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/github-mark-white.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'
                >
                  <>
                    <Image
                      src='/linkedin-light.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/linkedin-dark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='mailto:muhammadalieza4@gmail.com'
                >
                  <>
                    <Image
                      src='/gmail-light.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/gmail-dark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[400px] flex gap-5'>
            <div
              className='h-[90px] w-[90px]'
              style={{
                position: 'relative',
              }}
            >
              <Image
                src='/ian.jpg'
                alt='image'
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50px',
                }}
              />
            </div>
            <div className='my-3'>
              <p className='text-tiny font-semibold'>Afrian Luthfan</p>
              <div className='flex my-3 gap-2'>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='https://github.com/afrianluthfan'
                >
                  <>
                    <Image
                      src='/github-mark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/github-mark-white.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='https://www.linkedin.com/in/afrian-luthfan/'
                >
                  <>
                    <Image
                      src='/linkedin-light.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/linkedin-dark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='mailto:afrian.luthfan@gmail.com'
                >
                  <>
                    <Image
                      src='/gmail-light.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='dark:hidden'
                    />
                    <Image
                      src='/gmail-dark.svg'
                      width={20}
                      height={20}
                      alt='github'
                      className='hidden dark:block'
                    />
                  </>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ScrollShadow className='w-[400px] sm:w-[800px] h-[500px] space-y-10 mt-10 sm:mt-0'>
          <div>
            <h1 className={`${lexn.className} text-large font-bold`}>
              What is Identify?
            </h1>
            <p className='text-medium'>
              Identify can generate an ID card for you based on your listening
              habits on Spotify. The web app takes the five track features from
              each track from your top tracks on Spotify, which are Happiness,
              Danceability, Speechiness, Accousticness, and Energy. Webs like
              obscurify and receiptify inspired the creation of this website, so
              huge props and shoutouts to the creators of those websites!🙌🏼
            </p>
          </div>
          <div>
            <h1 className={`${lexn.className} text-large font-bold`}>
              Project Goals
            </h1>
            <p className='text-medium'>
              The goal of the creation of this website is for the creators of
              this website to showcase the implementation of Spotify Web
              API&apos;s features such as authorization and API consumption.
              Some examples of API consumption include getting user&apos;s
              spotify data, user&apos;s top tracks and audio features, and
              user&apos;s top items. The data is provided by Spotify API through
              OAuth which was made possible by utilizing NextAuthJS. For the
              front-end, we use NextJS and for the server state handilng, we use
              TanStack Query (React Query).
            </p>
          </div>
          <div>
            <h1 className={`${lexn.className} text-large font-bold`}>
              Privacy Policy
            </h1>
            <p className='text-medium'>
              We as developers don&apos;t keep any forms of user&apos;s personal
              data since those data are handled securely by Spotify API. The
              source code for this website is available for the public to see on
              the GitHub repository that we have provided.
            </p>
          </div>
          <div>
            <h1 className={`${lexn.className} text-large font-bold`}>
              Inquiries (Suggestions, issues, etc.)
            </h1>
            <p className='text-medium'>
              Feel free to contact us through our email regarding any inquiries
            </p>
          </div>
        </ScrollShadow>
      </div>
    </div>
  </section>
);

export default About;
