import React, { useEffect, useRef, useState } from 'react'
import { CanvasItem as CanvasItemType } from '../appShell'

interface MagnifierProps {
  visible: boolean
  onClose: () => void
  items: CanvasItemType[]
  targetPos: { x: number, y: number }
  canvasTransform: { x: number, y: number, scale: number }
}

const Magnifier: React.FC<MagnifierProps> = ({ visible, onClose, items, targetPos, canvasTransform }) => {
  const [zoom, setZoom] = useState(2)
  const [size, setSize] = useState(300)
  const [pos, setPos] = useState({ x: 200, y: 200 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  
  const dragOffset = useRef({ x: 0, y: 0 })
  const resizeStartSize = useRef(size)
  const resizeStartPos = useRef({ x: 0, y: 0 })
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()

  const updateCanvas = () => {
    if (!canvasRef.current || !visible) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    // Find main canvases
    const mapContainer = document.querySelector('.drawMap')
    const drawContainer = document.querySelector('.drawCanvas')
    
    const mapCanvas = mapContainer?.querySelector('canvas')
    const drawCanvas = drawContainer?.querySelector('canvas')

    if (!mapCanvas || !drawCanvas) {
      requestRef.current = requestAnimationFrame(updateCanvas)
      return
    }

    // Clear and draw
    ctx.clearRect(0, 0, size, size)
    
    // Calculate source region based on targetPos (logical 0-1000)
    // We need to convert logical targetPos to pixel coordinates on the source canvases
    // Source canvases are 1000 * canvasTransform.scale in size
    const sourcePixelX = (targetPos.x / 1000) * (1000 * canvasTransform.scale)
    const sourcePixelY = (targetPos.y / 1000) * (1000 * canvasTransform.scale)

    const sourceW = (size / zoom)
    const sourceH = (size / zoom)
    
    const sx = sourcePixelX - sourceW / 2
    const sy = sourcePixelY - sourceH / 2

    // Draw Map
    ctx.drawImage(
      mapCanvas,
      sx, sy, sourceW, sourceH,
      0, 0, size, size
    )

    // Draw Drawings
    ctx.drawImage(
      drawCanvas,
      sx, sy, sourceW, sourceH,
      0, 0, size, size
    )

    requestRef.current = requestAnimationFrame(updateCanvas)
  }

  useEffect(() => {
    if (visible) {
      requestRef.current = requestAnimationFrame(updateCanvas)
    } else if (requestRef.current) {
      cancelAnimationFrame(requestRef.current)
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [visible, zoom, targetPos, size, canvasTransform.scale])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    }
  }

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    resizeStartSize.current = size
    resizeStartPos.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y
      })
    } else if (isResizing) {
      const delta = Math.max(e.clientX - resizeStartPos.current.x, e.clientY - resizeStartPos.current.y)
      setSize(Math.max(150, Math.min(600, resizeStartSize.current + delta)))
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isResizing])

  if (!visible) return null

  // Calculate icon overlay transform
  // targetPos is the center of the loupe view in logical units.
  // sourceW/H in logical units is (size / zoom) / canvasTransform.scale
  const logicalSourceW = (size / zoom) / canvasTransform.scale
  const logicalSourceH = (size / zoom) / canvasTransform.scale
  
  const logicalSX = targetPos.x - logicalSourceW / 2
  const logicalSY = targetPos.y - logicalSourceH / 2

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.2)'
      }}
    >
      {/* Mirror Canvas (Map + Drawings) */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />

      {/* Icon Overlay */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden'
      }}>
          <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%'
          }}>
              {items.map(item => {
                  const x = (item.x - logicalSX) * (size / logicalSourceW)
                  const y = (item.y - logicalSY) * (size / logicalSourceH)
                  
                  if (x < -50 || x > size + 50 || y < -50 || y > size + 50) return null

                  return (
                      <div key={item.id} style={{
                          position: 'absolute',
                          left: x,
                          top: y,
                          transform: `translate(-50%, -50%) scale(${zoom})`,
                          userSelect: 'none'
                      }}>
                          {item.type === 'image' ? (
                              <img src={item.value} draggable={false} style={{ width: item.width ? `${item.width}px` : '35px' }} />
                          ) : (
                              <div style={{ color: item.color, fontSize: item.fontSize, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                  {item.value}
                              </div>
                          )}
                      </div>
                  )
              })}
          </div>
      </div>

      {/* Control Overlay */}
      <div style={{
        position: 'absolute',
        width: 'calc(100% - 20px)',
        height: '32px',
        left: '10px',
        top: '10px',
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderRadius: '6px',
        justifyContent: 'space-between',
        pointerEvents: 'auto',
        cursor: 'move',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
      onMouseDown={handleMouseDown}
      >
        <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px', userSelect: 'none' }}>LOUPE x{zoom.toFixed(1)}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setZoom(prev => Math.max(1, prev - 0.5))} style={{ width: '24px', height: '24px', padding: 0, borderRadius: '4px', border: '1px solid #444', background: '#333', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
          <button onClick={() => setZoom(prev => Math.min(8, prev + 0.5))} style={{ width: '24px', height: '24px', padding: 0, borderRadius: '4px', border: '1px solid #444', background: '#333', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
          <button onClick={onClose} style={{ width: '24px', height: '24px', padding: 0, borderRadius: '4px', background: '#ff4d4f', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>×</button>
        </div>
      </div>
      
      {/* Resize Handle */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '20px',
          height: '20px',
          cursor: 'nwse-resize',
          pointerEvents: 'auto',
          background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.3) 50%)'
        }}
        onMouseDown={handleResizeMouseDown}
      />

      {/* Status Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 'calc(100% - 20px)',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.6)',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '9px',
        padding: '2px 0'
      }}>
        Alt + Click to target area
      </div>
    </div>
  )
}

export default Magnifier
