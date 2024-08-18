/* eslint-disable no-nested-ternary */

'use client';

import React, { FC } from 'react';
import { Avatar, Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import RunningText from '@/components/RunningText';
// import RadarChartComponent from './RadarChart';
import UserCardViewModel from './UserCard.viewModel';

const UserCard: FC = () => {
  const { session, waktu, arrayText, convert, ref } = UserCardViewModel();

  return (
    <>
      <div className='my-5 flex'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
      <div className='flex flex-col items-center justify-center px-4'>
        <Card ref={ref} className='w-full max-w-[1080px] xs:h-fit lg:px-8'>
          <div className='absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
          <div className='absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#8349FF] blur-[80px]' />
          <div className='absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#FFCDFF] blur-[80px]' />
          <div className='absolute bottom-[-30px] h-48 w-[600px] rotate-0 rounded-[100%] bg-[#0013FF] blur-[80px]' />
          <div className='absolute bottom-[-300px] left-24 h-96 w-96 rotate-90 rounded-[100%] bg-[#00FFFF] blur-3xl' />
          <Image
            src='/pita-rainbow.png'
            alt='rainbow-ribbon'
            height={400}
            width={645}
            className='absolute left-0 top-[-100px] blur-sm'
          />
          <CardHeader className='p-5'>
            <div className='flex items-center justify-center'>
              <Avatar
                src={session?.user?.image ?? ''}
                size='lg'
                className='mr-5 rounded-[100%]'
                isBordered
              />
              <p className='h-fit text-[25px] font-bold ph:text-[30px]'>
                {session?.user?.name}
              </p>
            </div>
          </CardHeader>
          <CardBody className='relative flex max-w-full overflow-hidden'>
            <div className='flex flex-col items-center md:flex-row lg:justify-center'>
              <div className='-order-first flex h-[35%] items-center justify-center p-8 ph:mt-0 ph:h-full ph:p-12 md:order-first md:min-h-[400px] md:max-w-[50%] md:py-0'>
                <Card className='p-5 xs:mb-8 xs:min-w-[232px] ph:min-w-[319px] ph:p-10 md:mb-0 md:min-w-[400px]'>
                  <CardHeader className='font-bold ph:text-lg lg:text-xl '>
                    <p>
                      Spotify Profile Analysis:
                      {/* {session?.user?.name} seems to enjoy music that are
                      {target === 1 ? (
                        <span>&nbsp;happy</span>
                      ) : target === 2 ? (
                        <span>&nbsp;danceable</span>
                      ) : target === 3 ? (
                        <span>&nbsp;energetic</span>
                      ) : target === 4 ? (
                        <span>&nbsp;accoustic</span>
                      ) : target === 5 ? (
                        <span>&nbsp;speechy</span>
                      ) : (
                        <span>....</span>
                      )}
                      . */}
                    </p>
                  </CardHeader>
                  <CardBody className='text-[12px] ph:text-small'>
                    <ul className='flex flex-col gap-5'>
                      <li>
                        <h1 className='font-bold'>Danceability: 69%</h1>
                        <p className='text-tiny'>
                          You&apos;re clearly trying to compensate for something
                          with those frantic dance moves.
                        </p>
                      </li>
                      <li>
                        <h1 className='font-bold'>Energetic: 75%</h1>
                        <p className='text-tiny'>
                          You&rsquo;re the human equivalent of a caffeinated
                          squirrel on crack.
                        </p>
                      </li>
                      <li>
                        <h1 className='font-bold'>Acousticness: 20%</h1>
                        <p className='text-tiny'>
                          Nature is calling, but you&apos;re too busy blasting
                          electronic beats to answer.
                        </p>
                      </li>
                      <li>
                        <h1 className='font-bold'>Speechiness: 7%</h1>
                        <p className='text-tiny'>
                          You probably talk more during your music than the
                          actual vocals do.
                        </p>
                      </li>
                      <li>
                        <h1 className='font-bold'>Happiness: 53% </h1>
                        <p className='text-tiny'>
                          Half-hearted optimism? That&apos;s a mood disorder,
                          not a music genre.
                        </p>
                      </li>
                    </ul>
                    {/* <p>
                      Well, from what we can see, your music sound pretty
                      {target === 1 ? (
                        <span>&nbsp;joyous.</span>
                      ) : target === 2 ? (
                        <span>&nbsp;groovy.</span>
                      ) : target === 3 ? (
                        <span>&nbsp;full of energy.</span>
                      ) : target === 4 ? (
                        <span>&nbsp;organic.</span>
                      ) : target === 5 ? (
                        <span>&nbsp;full of vocals</span>
                      ) : (
                        <span>....</span>
                      )}
                      &nbsp;Not to sound judgemental, but you really seem like
                      the embodiment of
                      {target === 1 ? (
                        <span>&nbsp;happiness</span>
                      ) : target === 2 ? (
                        <span>&nbsp;dance</span>
                      ) : target === 3 ? (
                        <span>&nbsp;hype</span>
                      ) : target === 4 ? (
                        <span>&nbsp;life</span>
                      ) : target === 5 ? (
                        <span>&nbsp;vocal</span>
                      ) : (
                        <span>....</span>
                      )}
                      &nbsp;itself.
                    </p> */}
                    {/* <p>
                      Quite the
                      {target === 1 ? (
                        <span>&nbsp;rapture</span>
                      ) : target === 2 ? (
                        <span>&nbsp;moving sounds</span>
                      ) : target === 3 ? (
                        <span>&nbsp;hypeman you are</span>
                      ) : target === 4 ? (
                        <span>&nbsp;lively persona</span>
                      ) : target === 5 ? (
                        <span>&nbsp;vocal person you are</span>
                      ) : (
                        <span>....</span>
                      )}
                      , I see.
                    </p> */}
                  </CardBody>
                </Card>
              </div>
              <div className='relative flex w-full justify-center md:justify-end lg:px-12'>
                <Card className='p-5 xs:mb-8 xs:min-w-[232px] ph:min-w-[319px] ph:p-10 md:mb-0 md:min-w-[400px]'>
                  <CardHeader className='font-bold ph:text-lg lg:text-xl '>
                    <p>Well,</p>
                  </CardHeader>
                  <CardBody className='text-xl ph:text-small'>
                    Your Spotify profile screams &quot;attention-seeking,
                    hyperactive, and emotionally stunted.&quot; You&nbsp;re the
                    human equivalent of a jackhammer with a terrible taste in
                    music. Maybe try listening to something that requires more
                    than two brain cells to appreciate?
                  </CardBody>
                </Card>
                {/* <RadarChartComponent
                    scaledAccousticness={Math.round(
                      scaledFeatures.accousticness,
                    )}
                    scaledDanceability={Math.round(scaledFeatures.danceability)}
                    scaledEnergy={Math.round(scaledFeatures.energy)}
                    scaledSpeechiness={Math.round(scaledFeatures.speechiness)}
                    scaledValence={Math.round(scaledFeatures.valence)}
                  /> */}
              </div>
            </div>
            <div className='sticky bottom-0 flex w-full justify-between xs:mb-2 md:mt-8'>
              <div className='relative flex w-full items-center justify-between'>
                {/* Issue Date */}
                <div className='flex w-96 xs:text-xs ph:text-sm lg:text-xl lg:font-bold'>
                  Issued at{' '}
                  {waktu.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <div className='mb-3 w-[175px]'>
                  <Image src='/wm-dark.svg' alt='wm' width={175} height={175} />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Button
          radius='sm'
          onClick={convert}
          type='button'
          className='mt-5 h-12 w-fit text-xl font-bold xs:px-12 ph:px-4 lg:w-[20%]'
        >
          <p className='text-small ph:text-lg'> Obtain card</p>
        </Button>
      </div>
      <div className='my-5 flex'>
        <RunningText length='100%' overflow='hidden' text={arrayText} />
      </div>
    </>
  );
};

export default UserCard;
