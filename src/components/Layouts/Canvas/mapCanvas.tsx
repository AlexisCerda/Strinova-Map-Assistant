import React, { useLayoutEffect, useRef, useCallback } from 'react'
import { Pikaso, type BaseShapes } from 'pikaso'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  style?: React.CSSProperties
  panelcollaps: boolean
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style, panelcollaps }) => {
  const rescaleTO = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rescaleEditor = useCallback((timeout: number = 0) => {
    if (rescaleTO.current !== null) clearTimeout(rescaleTO.current)
    rescaleTO.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const scaleSize = 1000
        pikasoEditor?.board.stage.setSize({width: scaleSize, height: scaleSize})
        pikasoEditor?.board.rescale()
    
        const image = new Image()
        image.src = currentMap
        
        image.onload = () => {
          const scale = image.height / pikasoEditor!.board.stage.height()
          pikasoEditor?.board.background.setImageFromUrl(currentMap, {
            size: 'contain',
            x: pikasoEditor.board.stage.width() / 2 - image.width / 2 / scale
          })
        }
      })
    }, timeout)
  }, [pikasoEditor, currentMap])

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

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%' }}
      className='drawMap'></div>
  )
}

export default MapCanvas
