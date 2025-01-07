import ListItem from '../ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { memo } from 'react';
import './SymbolCardContentStatic.css'

type SymbolCardContentStaticProps = {
  marketCap: number;
  industry: string;
  companyName: string;
  showCardInfo: boolean;
};

const SymbolCardContentStatic = ({
  companyName,
  marketCap,
  industry,
  showCardInfo
}: SymbolCardContentStaticProps) => {
  const infoItems = [
    {
      label: companyName,
      icon: <CompanyIcon />
    },
    {
      label: industry,
      icon: <IndustryIcon />
    },
    {
      label: new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 1,
        currency: 'USD'
      }).format(marketCap),
      icon: <MarketCapIcon />
    }
  ];

  return (
    <>
      {showCardInfo && (
        <div className="symbolCardContentStatic">
          {infoItems.map(({ label, icon }) => (
            <ListItem Icon={icon} label={label} key={label} spacing="space-between" />
          ))}
        </div>
      )}
    </>
  );
};

export default memo(SymbolCardContentStatic)