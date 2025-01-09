import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import { setSelectedSymbol } from '@/store/dashboardOptionsSlice';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import './symbolsView.css';

const SymbolsView = () => {
  const { activeSymbol } = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();
  const handleSymbolClick = (symbolId: string) => {
    dispatch(setSelectedSymbol(symbolId));
  };

  return (
    <div className="symbolsView">
      <DesktopInfo />
      <div className="symbolsView__content">
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>
        <div className="symbolsView__cards-wrapper">
          <div className="symbolsView__cards">
            <SymbolsGrid onSymbolClick={handleSymbolClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
