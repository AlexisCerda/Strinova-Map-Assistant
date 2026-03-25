import React, { useLayoutEffect, useRef, useCallback } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../../../utils/canvasConstants'
import { getDragValue, setDragValue } from '../../../data/dragAndDrop.ts'

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
  onAddItem
}) => {
  const rescaleTO = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rescaleEditor = useCallback((timeout: number = 0) => {
    if (rescaleTO.current !== null) clearTimeout(rescaleTO.current)
    rescaleTO.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const scaleSize = 1000
        pikasoEditor?.board.stage.setSize({width: scaleSize, height: scaleSize})
        pikasoEditor?.board.rescale()
      })
    }, timeout)
  }, [pikasoEditor])

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
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
      case 'TEXT':
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
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
      case 'TEXT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        const rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect()
        const pikasoSize = pikasoEditor?.board.stage.getSize()
        const scale = { x: pikasoSize!.width / rect!.width, y: pikasoSize!.height / rect!.height }
        const diff = { x: e.clientX - rect!.left, y: e.clientY - rect!.top }
        const textPos = { x: diff.x * scale.x, y: diff.y * scale.y }

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
    }
  }

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>| any) => {
    const dragValue = getDragValue()
    const imgLink = dragValue?.type == 'imageLink' ? dragValue.value : null
    if(imgLink) {
      const img = new Image()
      img.src = imgLink
      img.onload = () => {
        const size = 35
        const ratio = img.width / img.height

        const clientPos = e.clientX ? e : e.changedTouches[0]
        const rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect()
        const pikasoSize = pikasoEditor?.board.stage.getSize()
        const scale = { x: pikasoSize!.width / rect!.width, y: pikasoSize!.height / rect!.height }
        const diff = { x: clientPos.clientX - rect!.left, y: clientPos.clientY - rect!.top }
        const imgPos = { x: diff.x * scale.x, y: diff.y * scale.y }
  
        onAddItem({
          type: 'image',
          value: imgLink,
          x: imgPos.x,
          y: imgPos.y,
          width: size * ratio,
          height: size
        })
      }
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
      ref={pikasoRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', touchAction: 'none', ...style }}
      className='drawCanvas'
      onDrop={handleOnDrop}
      onTouchEnd={handleOnDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasMouseDown}></div>
  )
}

export default DrawMap
