import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { useGetCardClassName } from '@/components/SymbolCard/src/hooks/useGetCardClassName';
import SymbolCardContent from './src/components/SymbolCardContent';
import SymbolCardHeader from './src/components/SymbolCardHeader';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap, showCardInfo } = useAppSelector((state) => ({
    ...state.stocks.entities[id],
    showCardInfo: state.store.showCardInfo
  }))
  const formattedPrice = Math.round(price);
  const { className, onAnimationEnds } = useGetCardClassName(id, formattedPrice);
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div onClick={handleOnClick} className={className} onAnimationEnd={onAnimationEnds}>
      <SymbolCardHeader id={id} trend={trend}/>
      <SymbolCardContent
        showCardInfo={showCardInfo}
        price={formattedPrice}
        companyName={companyName}
        industry={industry}
        marketCap={marketCap}
      />
    </div>
  );
};
export default SymbolCard;
