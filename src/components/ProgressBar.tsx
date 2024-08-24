import React, { FC } from 'react';
import { Progress } from '@nextui-org/react';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value }) => (
  <Progress
    aria-label='Value'
    size='md'
    value={value}
    color='primary'
    // showValueLabel
    className='max-w-md'
  />
);
export default ProgressBar;
