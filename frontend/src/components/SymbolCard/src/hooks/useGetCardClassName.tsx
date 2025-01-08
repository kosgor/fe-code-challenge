import { useAppSelector } from '@/hooks/redux';
import { usePriceChangeTracker } from './usePriceChangeTracker';

export const useGetCardClassName = (id: string, price: number) => {
  const classNames = ['symbolCard'];
  const { activeSymbol } = useAppSelector((state) => state.store);

  const { priceChangeDirection, isMajorChange, resetValues } = usePriceChangeTracker(price);

  const isCardSelected = activeSymbol === id;

  if (activeSymbol) {
    if (isCardSelected) {
      classNames.push('symbolCard--selected');
    } else {
      classNames.push('symbolCard--unselected');
    }
  }

  if (priceChangeDirection) {
    if (isMajorChange) {
      classNames.push(`symbolCard--${priceChangeDirection}-with-shake`);
    } else {
      classNames.push(`symbolCard--${priceChangeDirection}-trend`);
    }
  }

  const onAnimationEnds = () => {
    resetValues()
  }

  return {
    className: classNames.join(' '),
    onAnimationEnds,
  };
};
