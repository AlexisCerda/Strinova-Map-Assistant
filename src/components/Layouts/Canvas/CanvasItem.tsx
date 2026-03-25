import React, { useState, useRef } from 'react'
import { CanvasItem as CanvasItemType } from '../../appShell'

interface CanvasItemProps {
  item: CanvasItemType
  onUpdate: (id: string, updates: Partial<CanvasItemType>) => void
  onDelete: (id: string) => void
  isSelected: boolean
  onSelect: (id: string) => void
}

const CanvasItem: React.FC<CanvasItemProps> = ({ item, onUpdate, onDelete, isSelected, onSelect }) => {
  const [isDragging, setIsDragging] = useState(false)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const itemStartPos = useRef({ x: 0, y: 0 })

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation()
    onSelect(item.id)
    setIsDragging(true)
    dragStartPos.current = { x: e.clientX, y: e.clientY }
    itemStartPos.current = { x: item.x, y: item.y }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    
    // Calculate movement in pixels
    const dx = e.clientX - dragStartPos.current.x
    const dy = e.clientY - dragStartPos.current.y
    
    // Convert pixels to 1000x1000 units
    // We need the container size for this
    const container = (e.currentTarget.parentElement as HTMLElement)
    const rect = container.getBoundingClientRect()
    
    const scaleX = 1000 / rect.width
    const scaleY = 1000 / rect.height
    
    onUpdate(item.id, {
      x: itemStartPos.current.x + dx * scaleX,
      y: itemStartPos.current.y + dy * scaleY
    })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${(item.x / 1000) * 100}%`,
    top: `${(item.y / 1000) * 100}%`,
    transform: 'translate(-50%, -50%)',
    cursor: isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
    pointerEvents: 'auto',
    border: isSelected ? '2px solid rgba(77, 238, 234, 1)' : '2px solid transparent',
    padding: '2px',
    borderRadius: '4px',
    zIndex: isSelected ? 100 : 10,
    transition: isDragging ? 'none' : 'border 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={(e) => e.key === 'Delete' && isSelected && onDelete(item.id)}
      tabIndex={0}
    >
      {item.type === 'image' ? (
        <img 
          src={item.value} 
          alt={item.name} 
          style={{ width: item.width ? `${item.width}px` : '35px', pointerEvents: 'none' }} 
        />
      ) : (
        <div style={{ color: item.color, fontSize: item.fontSize, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          {item.value}
        </div>
      )}
      {isSelected && (
        <button 
          onClick={() => onDelete(item.id)}
          style={{ 
            position: 'absolute', 
            top: '-10px', 
            right: '-10px', 
            background: '#ff4d4f', 
            color: 'white', 
            border: 'none', 
            borderRadius: '50%', 
            width: '20px', 
            height: '20px', 
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ×
        </button>
      )}
    </div>
  )
}

export default CanvasItem
