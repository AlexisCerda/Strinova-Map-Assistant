import React, { useState, useEffect, useRef } from 'react'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 })

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // If clicking on the canvas container but not on an item, deselect
      if (target.closest('.drawCanvas') && !target.closest('.canvas-item-container')) {
        setSelectedId(null)
      }
    }
    window.addEventListener('mousedown', handleOutsideClick)
    return () => window.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    const sync = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      
      // We know Pikaso stage is 1000x1000 and it "fits" into the container
      const scale = Math.min(rect.width / 1000, rect.height / 1000)
      const x = (rect.width - 1000 * scale) / 2
      const y = (rect.height - 1000 * scale) / 2
      
      setTransform({ x, y, scale })
    }
    
    sync()
    window.addEventListener('resize', sync)
    // Small delay to ensure Pikaso has finished its own rescale
    const timeout = setTimeout(sync, 100)
    
    return () => {
      window.removeEventListener('resize', sync)
      clearTimeout(timeout)
    }
  }, [items.length]) // Also sync when items added/removed as a proxy for redraws

  return (
    <div
      ref={containerRef}
      className="canvas-overlay no-select"
      style={{ 
        ...style, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        overflow: 'hidden' 
      }}
    >
      <div style={{
        position: 'absolute',
        left: `${transform.x}px`,
        top: `${transform.y}px`,
        width: `${1000 * transform.scale}px`,
        height: `${1000 * transform.scale}px`,
        pointerEvents: 'none'
      }}>
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
    </div>
  )
}

export default CanvasOverlay
