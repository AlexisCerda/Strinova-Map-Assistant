import React, { useLayoutEffect, useRef, useCallback, useState } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../../../utils/canvasConstants'
import { getDragValue, setDragValue } from '../../../data/dragAndDrop.ts'

// Converts a hex color (#rrggbb or #rgb) to rgba with the given opacity
const hexToRgba = (hex: string, alpha: number): string => {
  const sanitized = hex.replace('#', '')
  const full = sanitized.length === 3
    ? sanitized.split('').map(c => c + c).join('')
    : sanitized
  const r = parseInt(full.substring(0, 2), 16)
  const g = parseInt(full.substring(2, 4), 16)
  const b = parseInt(full.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  penColor: string
  canvasTool: mapTools
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  penWidth: number
  lineWidth: number
  fontSize: number
  panelcollaps: boolean
  load: React.Dispatch<React.SetStateAction<void>>
  style?: React.CSSProperties
  onAddItem: (item: any) => void
  canvasTransform: { x: number, y: number, scale: number }
  meterScale: number
}

const DrawMap: React.FC<PikasoMapProps> = ({
  pikasoRef,
  pikasoEditor,
  currentMap,
  penColor,
  canvasTool,
  setTool,
  penWidth,
  lineWidth,
  fontSize,
  panelcollaps,
  load,
  style,
  onAddItem,
  canvasTransform,
  meterScale
}) => {
  const [isMeasuring, setIsMeasuring] = useState(false)
  const [measureStart, setMeasureStart] = useState({ x: 0, y: 0 })
  const [measureEnd, setMeasureEnd] = useState({ x: 0, y: 0 })

  const rescaleTO = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rescaleEditor = useCallback((timeout: number = 0) => {
    if (rescaleTO.current !== null) clearTimeout(rescaleTO.current)
    rescaleTO.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const size = 1000 * canvasTransform.scale
        pikasoEditor.board.stage.setSize({
          width: size,
          height: size
        })
        pikasoEditor.board.rescale()
      })
    }, timeout)
  }, [pikasoEditor, canvasTransform.scale])

  useLayoutEffect(() => {
    switch (canvasTool) {
      case DrawType.Arrow:
        pikasoEditor?.shapes.arrow.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Line:
        pikasoEditor?.shapes.line.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Pencil:
        pikasoEditor?.shapes.pencil.draw({
          stroke: penColor,
          strokeWidth: penWidth
        })
        break
      case DrawType.Circle:
        pikasoEditor?.shapes.circle.draw({
          stroke: penColor,
          strokeWidth: lineWidth,
          fill: hexToRgba(penColor, 0.3)
        })
        break
      case DrawType.Rect:
        pikasoEditor?.shapes.rect.draw({
          stroke: penColor,
          strokeWidth: lineWidth,
          fill: hexToRgba(penColor, 0.3)
        })
        break
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
      case 'TEXT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
      case 'RULER':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
    }
  }, [
    currentMap,
    penColor,
    canvasTool,
    setTool,
    penWidth,
    lineWidth,
    fontSize,
    pikasoEditor?.board.background,
    pikasoEditor?.board.stage,
    pikasoEditor?.shapes.line,
    pikasoEditor?.shapes.pencil,
    pikasoEditor?.shapes.arrow,
    pikasoEditor?.shapes.circle,
    pikasoEditor?.shapes.rect,
  ])

  useLayoutEffect(() => {
    const handleResize = () => rescaleEditor()
    rescaleEditor()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [rescaleEditor, currentMap, pikasoEditor?.board.background])

  useLayoutEffect(() => {
    rescaleEditor(100)
  }, [rescaleEditor, panelcollaps])

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    switch (canvasTool) {
      case DrawType.Line:
        pikasoEditor?.shapes.line.stopDrawing()
        pikasoEditor?.shapes.line.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Arrow:
        pikasoEditor?.shapes.arrow.stopDrawing()
        pikasoEditor?.shapes.arrow.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Pencil:
        pikasoEditor?.shapes.pencil.stopDrawing()
        pikasoEditor?.shapes.pencil.draw({
          stroke: penColor,
          strokeWidth: penWidth
        })
        break
      case DrawType.Circle:
        pikasoEditor?.shapes.circle.stopDrawing()
        pikasoEditor?.shapes.circle.draw({
          stroke: penColor,
          strokeWidth: lineWidth,
          fill: hexToRgba(penColor, 0.3)
        })
        break
      case DrawType.Rect:
        pikasoEditor?.shapes.rect.stopDrawing()
        pikasoEditor?.shapes.rect.draw({
          stroke: penColor,
          strokeWidth: lineWidth,
          fill: hexToRgba(penColor, 0.3)
        })
        break
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
      case 'TEXT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        const diff = { x: e.clientX - rect!.left, y: e.clientY - rect!.top }
        
        const scale = Math.min(rect.width / 1000, rect.height / 1000)
        const offsetX = (rect.width - 1000 * scale) / 2
        const offsetY = (rect.height - 1000 * scale) / 2
        
        const textPos = { 
          x: (diff.x - offsetX) / scale, 
          y: (diff.y - offsetY) / scale 
        }

        onAddItem({
          type: 'text',
          value: 'Type here',
          x: textPos.x,
          y: textPos.y,
          color: penColor,
          fontSize: fontSize * 16
        })
        setTool('SELECT')
        break
      case 'RULER':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (canvasTool === 'RULER') {
      const rect = e.currentTarget.getBoundingClientRect()
      const diff = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      const scale = Math.min(rect.width / 1000, rect.height / 1000)
      const offsetX = (rect.width - 1000 * scale) / 2
      const offsetY = (rect.height - 1000 * scale) / 2
      const pos = { x: (diff.x - offsetX) / scale, y: (diff.y - offsetY) / scale }
      
      setIsMeasuring(true)
      setMeasureStart(pos)
      setMeasureEnd(pos)
      e.currentTarget.setPointerCapture(e.pointerId)
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (canvasTool === 'RULER' && isMeasuring) {
      const rect = e.currentTarget.getBoundingClientRect()
      const diff = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      const scale = Math.min(rect.width / 1000, rect.height / 1000)
      const offsetX = (rect.width - 1000 * scale) / 2
      const offsetY = (rect.height - 1000 * scale) / 2
      const pos = { x: (diff.x - offsetX) / scale, y: (diff.y - offsetY) / scale }
      setMeasureEnd(pos)
    }
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (canvasTool === 'RULER' && isMeasuring) {
      setIsMeasuring(false)
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>| any) => {
    const clientPos = e.clientX ? e : e.changedTouches[0]
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const diff = { x: clientPos.clientX - rect.left, y: clientPos.clientY - rect.top }

    const dragValue = getDragValue()
    const imgLink = dragValue?.type == 'imageLink' ? dragValue.value : null
    if(imgLink) {
      const img = new Image()
      img.src = imgLink
      img.onload = () => {
        const size = 35
        const ratio = img.width / img.height

        const scale = Math.min(rect.width / 1000, rect.height / 1000)
        const offsetX = (rect.width - 1000 * scale) / 2
        const offsetY = (rect.height - 1000 * scale) / 2
        
        const imgPos = { 
          x: (diff.x - offsetX) / scale, 
          y: (diff.y - offsetY) / scale 
        }
  
        onAddItem({
          type: 'image',
          value: imgLink,
          x: imgPos.x,
          y: imgPos.y,
          width: size * ratio,
          height: size
        })
      }
    } else if (dragValue?.type === 'areaEffect') {
      const effectData = dragValue.data
      const scale = Math.min(rect.width / 1000, rect.height / 1000)
      const offsetX = (rect.width - 1000 * scale) / 2
      const offsetY = (rect.height - 1000 * scale) / 2
      
      const pos = { 
        x: (diff.x - offsetX) / scale, 
        y: (diff.y - offsetY) / scale 
      }
      
      // Calculate size in 1000x1000 space
      const sizeInMeters = effectData.shape === 'circle' ? effectData.radius * 2 : effectData.width
      const heightInMeters = effectData.shape === 'circle' ? effectData.radius * 2 : effectData.height
      const itemWidth = sizeInMeters * meterScale
      const itemHeight = heightInMeters * meterScale

      onAddItem({
        type: 'areaEffect',
        value: effectData.id,
        name: effectData.name,
        color: effectData.color,
        shape: effectData.shape,
        x: pos.x,
        y: pos.y,
        width: itemWidth,
        height: itemHeight
      })
    } else if(e.dataTransfer && e.dataTransfer.files[0]?.type == 'application/json') {
      let reader = new FileReader();
      reader.onload = function(re) {
        const json = JSON.parse(re.target!.result as string);
        load(json)
      };
      reader.readAsText(e.dataTransfer.files[0]);
      e.preventDefault()
    }
    setDragValue(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', touchAction: 'none', ...style }}
      className='drawCanvas'
      onDrop={handleOnDrop}
      onTouchEnd={handleOnDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasMouseDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}>
      <div ref={pikasoRef} style={{ width: '100%', height: '100%' }}></div>
      {isMeasuring && (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>
          {(() => {
            const dx = measureEnd.x - measureStart.x
            const dy = measureEnd.y - measureStart.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const meters = (distance / meterScale).toFixed(1)
            
            const scale = canvasTransform.scale
            const offsetX = (1000 * scale - 1000 * scale) / 2 // in relative to container it's 0 if container is sized perfectly
            // the SVG covers the whole container, which is 1000 * scale
            // measureStart is in 0-1000 scale.
            const startX = measureStart.x * scale
            const startY = measureStart.y * scale
            const endX = measureEnd.x * scale
            const endY = measureEnd.y * scale
            
            const midX = (startX + endX) / 2
            const midY = (startY + endY) / 2
            
            return (
              <>
                <line x1={startX} y1={startY} x2={endX} y2={endY} stroke={penColor} strokeWidth={lineWidth + 2} strokeDasharray="5,5" />
                <circle cx={startX} cy={startY} r={lineWidth + 2} fill={penColor} />
                <circle cx={endX} cy={endY} r={lineWidth + 2} fill={penColor} />
                <text x={midX} y={midY - 10} fill={penColor} fontSize="16" fontWeight="bold" textAnchor="middle" style={{ textShadow: '1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black' }}>
                  {meters} m
                </text>
              </>
            )
          })()}
        </svg>
      )}
    </div>
  )
}

export default DrawMap
