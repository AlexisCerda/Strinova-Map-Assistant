import React, { useState } from 'react'
import { CanvasItem as CanvasItemType } from '../../appShell'
import CanvasItem from './CanvasItem'

interface CanvasOverlayProps {
  items: CanvasItemType[]
  onUpdateItem: (id: string, updates: Partial<CanvasItemType>) => void
  onDeleteItem: (id: string) => void
  style?: React.CSSProperties
}

const CanvasOverlay: React.FC<CanvasOverlayProps> = ({ items, onUpdateItem, onDeleteItem, style }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div
      className="canvas-overlay no-select"
      style={{ 
        ...style, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', // Background is transparent
        overflow: 'hidden' 
      }}
    >
        {items.map(item => (
          <CanvasItem
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onSelect={setSelectedId}
            onUpdate={onUpdateItem}
            onDelete={onDeleteItem}
          />
        ))}
    </div>
  )
}

export default CanvasOverlay
