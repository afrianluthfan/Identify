'use client';

/* eslint-disable max-len */

import React, { FC } from 'react';
import Image from 'next/image';
import { cExtended, lexn } from '@/utils/Font';
import { Separator } from '@/components/ui/separator';
import { ScrollShadow } from '@nextui-org/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const About: FC = () => (
  <section className='relative mb-32 flex h-full w-screen items-center bg-white p-5 bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2] md:mb-8 lg:p-20'>
    <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] dark:bg-black' />
    <div className='w-full'>
      <div className='flex w-full items-center gap-5'>
        <div className='flex gap-3'>
          <Image src='./fav.svg' width={70} height={70} alt='logo' />
          <p className='text-[40px] font-bold'>/</p>
        </div>
        <p
          className={`${cExtended.className} text-medium ph:text-2xl md:text-[60px]`}
        >
          about
        </p>
      </div>
      <Separator className='my-5 w-full' />
      <h1 className={`${lexn.className}`}>The Creators</h1>
      <div className='my-5 flex flex-col lg:flex-row lg:justify-between'>
        <div className='min-w-[30%] space-y-3 md:mb-8'>
          <div className='flex w-full gap-5'>
            <div
              className='h-[90px] min-w-[90px]'
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
            <div className='my-3 w-full'>
              <p className='text-tiny font-semibold'>Muhammad Alieza Nuriman</p>
              <div className='my-3 flex w-full gap-2'>
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
          <div className='flex w-full gap-5'>
            <div
              className='h-[90px] min-w-[90px]'
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
              <div className='my-3 flex gap-2'>
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
        <ScrollShadow className='mt-10 h-[500px] w-full space-y-10 sm:mt-0'>
          <div>
            <h1 className={`${lexn.className} text-large font-bold`}>
              What is Identify?
            </h1>
            <p className='text-medium'>
              Identify generates a personalized ID card based on your Spotify
              listening habits. We analyze five key track features from your top
              tracks: Happiness, Danceability, Speechiness, Acousticness, and
              Energy to create your unique musical fingerprint. We&apos;ve added a
              fun twist using Google&apos;s Gemini AI to generate playful roasts
              based on your music taste. Each roast is uniquely crafted to match
              your listening patterns, adding a personalized touch to your music
              ID card. Inspired by amazing projects like Obscurify and
              Receiptify - huge shoutouts to their creators! 🙌🏼 These innovative platforms helped shape our vision for creating a unique way to visualize your music preferences.
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
