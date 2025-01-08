import { memo } from 'react'
import TrendIcon from '@/components/SymbolCard/src/components/TrendIcon'
import './symbolCardHeader.css'

type SymbolCardHeaderProps = {
  id: string,
  trend: 'UP' | 'DOWN' | null
}

export const SymbolCardHeader = ({id, trend}: SymbolCardHeaderProps) => {
  return (
    <div className="symbolCardHeader__trend">
      {id}
      <div className="symbolCardHeader__trend__icon">
        <TrendIcon direction={trend} />
      </div>
    </div>
  )
}

export default memo(SymbolCardHeader)
