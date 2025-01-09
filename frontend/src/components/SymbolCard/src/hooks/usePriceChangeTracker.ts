import { useEffect, useRef, useState } from 'react';

const MAJOR_CHANGE_THRESHOLD = 25;

export const usePriceChangeTracker = (currentPrice: number) => {
  const prevPrice = useRef(currentPrice);

  const [priceChangeDirection, setPriceChangeDirection] = useState<
    'positive' | 'negative' | undefined
  >(undefined);
  const [isMajorChange, setIsMajorChange] = useState(false);

  useEffect(() => {
    if (currentPrice && prevPrice.current) {
      if (currentPrice === prevPrice.current) {
        setPriceChangeDirection(undefined)
        return
      }

      setPriceChangeDirection(currentPrice > prevPrice.current ? 'positive' : 'negative');

      const percentageChange = ((currentPrice - prevPrice.current) / prevPrice.current) * 100;

      setIsMajorChange(Math.abs(percentageChange) > MAJOR_CHANGE_THRESHOLD);
    }

    prevPrice.current = currentPrice;
  }, [currentPrice]);

  const resetValues = () => {
    setIsMajorChange(false);
    setPriceChangeDirection(undefined);
  };

  return { priceChangeDirection, isMajorChange, resetValues };
};