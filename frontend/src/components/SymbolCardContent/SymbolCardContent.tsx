import { memo } from 'react';
import SymbolCardContentStatic from '../SymbolCardContentStatic';
import './SymbolCardContent.css';

type SymbolCardContentProps = {
  price: number;
  marketCap: number;
  industry: string;
  companyName: string;
  showCardInfo: boolean;
};

const SymbolCardContent = ({
   price,
   companyName,
   marketCap,
   industry,
   showCardInfo
}: SymbolCardContentProps) => {
  const formattedPrice = price
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
    : '--';

  return (
    <>
      <div className="symbolCardContent__price">
        <div>PRICE:</div>
        <div className="symbolCardContent__price__number">{formattedPrice}</div>
      </div>
      <SymbolCardContentStatic
        marketCap={marketCap}
        industry={industry}
        companyName={companyName}
        showCardInfo={showCardInfo}
      />
    </>
  );
};

export default memo(SymbolCardContent);