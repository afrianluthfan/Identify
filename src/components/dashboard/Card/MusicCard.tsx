import React, { FC } from 'react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  //   CardHeader,
  //   CardTitle,
} from '@/components/ui/card';

interface MusicCardProps {
  title: string;
  artist: string;
  image: string;
}

const MusicCard: FC<MusicCardProps> = ({ title, artist, image }) => (
  <Card className='w-[300px] mb-2'>
    <CardContent className='flex'>
      <div>
        <Image src={image} alt='album' width={64} height={64} />
      </div>
      <div>
        <h1>{artist}</h1>
        <p>{title}</p>
      </div>
    </CardContent>
  </Card>
);

export default MusicCard;
