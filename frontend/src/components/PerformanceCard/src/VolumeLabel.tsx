import { memo } from 'react';
import './performanceInfo.css';
import { ReactComponent as UpArrow } from '@/assets/up-arrow.svg';
import { ReactComponent as DownArrow } from '@/assets/down-arrow.svg';
import ListItem from '@/components/ListItem';

type TrendLabelProps = {
  volume: number;
  change: number;
};

const VolumeLabel = ({ volume, change }: TrendLabelProps) => {
  const formattedVolume = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
    currency: 'USD'
  }).format(volume)
  const arrow = change > 1 ? <UpArrow /> : <DownArrow />;
  return <ListItem Icon={arrow} label={formattedVolume} />;
};
export default memo(VolumeLabel);
