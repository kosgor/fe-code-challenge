import upIcon from '@/assets/up.png';
import downIcon from '@/assets/down.png';
import './TrendIcon.css'
import {memo} from 'react';

type TrendIconProps = {
  direction: 'UP' | 'DOWN' | null;
};

const TrendIcon = ({ direction }: TrendIconProps) => {
  if (direction === null) {
    return null;
  }

  switch (direction) {
    case 'DOWN':
      return <img src={upIcon} className='trendIcon' alt='' />;
    case 'UP':
      return <img src={downIcon} className='trendIcon' alt='' />;
    default:
      return direction;
  }
};
export default memo(TrendIcon);
