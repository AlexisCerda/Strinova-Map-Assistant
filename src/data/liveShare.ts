//@ts-ignore
import { Peer } from "peerjs/dist/bundler.mjs";
import { Toast } from '@douyinfe/semi-ui';

import { getCurrentAppState, loadCurrentAppState } from './stateManagement';

export enum ConnectionState {
  "DISCONNECTED" = "DISCONNECTED",
  "CONNECTING" = "CONNECTING",
  "CONNECTED" = "CONNECTED",
  "DISCONNECTING" = "DISCONNECTING",
}

let lastAppState: any = null
export class Lobby {
  connectionState: ConnectionState = ConnectionState.DISCONNECTED
  peer: any
  conn: any
  connections: any[] = []
  id?: string
  peerIds: string[] = ['', '', '', '', '', '', '', '', '', '']
  args: any
  constructor(args: any) {
    this.connections = []
    this.args = args
  }
  listen() {
    const s = this
    if (s.peer) return
    s.peer = new Peer()
    s.connectionState = ConnectionState.CONNECTING
    s.peer.on("open", (id: string) => {
      s.id = id
      s.connectionState = ConnectionState.CONNECTED
      if (location.hash == '') {
        location.hash = id
        Toast.success('Sharing started')
      } else {
        s.connect({ id: location.hash.replace('#', '') })
        setTimeout(() => {
          if(location.hash) {
            let hash = location.hash.replace('#', '')
            let found = s.id === hash
            for (let i = 0; i < s.connections.length; i++) {
              if (s.connections[i].peer === hash) {
                found = true
                break
              }
            }
            if(!found) {
              location.hash = s.id as string
            }
          }
        }, 1000);
      }
      s.heartbeat()
      rebindShare()
    })

    s.peer.on("connection", (connection: any) => {
      s.connections.push(connection)
      let disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
      connection.on("data", (data: any) => {
        clearTimeout(disconnectConnectionTO)
        disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
        if (data.type === 'joinRequest') {
          if (s.peerIds.indexOf((s.id as string)) === -1 && s.peerIds.indexOf('') !== -1) {
            s.peerIds[s.peerIds.indexOf('')] = s.id as string
          }
          const joinPeerIdIndex = s.peerIds.indexOf('')
          if (joinPeerIdIndex !== -1) {
            s.peerIds[joinPeerIdIndex] = connection.peer
            const currentAppState = getCurrentAppState({ 
              presentMap: s.args.presentMap, 
              mapPrepareMode: s.args.mapPrepareMode, 
              drawCanvasEditor: s.args.drawCanvasEditor, 
              canvasItems: s.args.canvasItems 
            })
            const sendJoinResponse = { type: "joinResponse", peerIds: s.peerIds, state: currentAppState }
            connection.send(sendJoinResponse)
            for (let i = 0; i < s.peerIds.length; i++) {
              const peerId = s.peerIds[i];
              if (peerId != s.id && peerId != connection.peer) {
                const peerIdConnection = s.connections.find(c => c.peer === peerId)
                peerIdConnection?.send(sendJoinResponse)
              }
            }
          }
        } else if (data.type === 'state') {
          loadCurrentAppState({ 
            json: data.state, 
            setPresentMap: s.args.setPresentMap, 
            setPresentMapURL: s.args.setPresentMapURL, 
            setMapPrepareMode: s.args.setMapPrepareMode, 
            drawCanvasEditor: s.args.drawCanvasEditor, 
            setCanvasItems: s.args.setCanvasItems 
          })
          // Normalize lastAppState with the local editor export to prevent loops
          lastAppState = {
            ...data.state,
            editor: s.args.drawCanvasEditor?.export.toJson()
          }
        }
      })
    })
  }
  reconnect() {
    const s = this
    s.peer.reconnect()
  }
  heartbeat() {
    let s = this
    if (s.connectionState !== ConnectionState.DISCONNECTED || !s.connectionState) {
      setTimeout(() => { s.heartbeat() }, 5000)
    }
    for (let i = 0; i < s.connections?.length; i++) {
      const c = s.connections[i]
      if(c.open) {
        c.send({type:'heartbeat' })
      }
    }
  }
  connect({ id }: { id: string }) {
    const s = this
    const connection = s.peer.connect(id, { reliable: true })
    connection.on("open", () => {
      s.connections.push(connection)
      let disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
      connection.send({ type: 'joinRequest' })
      connection.on('data', function (data: any) {
        clearTimeout(disconnectConnectionTO)
        disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
        if (data.type === 'joinResponse') {
          s.peerIds = data.peerIds
          for (let i = 0; i < s.peerIds.length; i++) {
            const peerId = s.peerIds[i]
            if (peerId != s.id) {
              const peerIdConnection = s.connections.find(c => c.peer === peerId)
              if (!peerIdConnection) {
                s.connect({ id: peerId })
              }
            }
          }
          loadCurrentAppState({ 
            json: data.state, 
            setPresentMap: s.args.setPresentMap, 
            setPresentMapURL: s.args.setPresentMapURL, 
            setMapPrepareMode: s.args.setMapPrepareMode, 
            drawCanvasEditor: s.args.drawCanvasEditor, 
            setCanvasItems: s.args.setCanvasItems 
          })
          // Normalize lastAppState with the local editor export to prevent loops
          lastAppState = {
            ...data.state,
            editor: s.args.drawCanvasEditor?.export.toJson()
          }
        } else if (data.type === 'state') {
          loadCurrentAppState({ 
            json: data.state, 
            setPresentMap: s.args.setPresentMap, 
            setPresentMapURL: s.args.setPresentMapURL, 
            setMapPrepareMode: s.args.setMapPrepareMode, 
            drawCanvasEditor: s.args.drawCanvasEditor, 
            setCanvasItems: s.args.setCanvasItems 
          })
          // Normalize lastAppState with the local editor export to prevent loops
          lastAppState = {
            ...data.state,
            editor: s.args.drawCanvasEditor?.export.toJson()
          }
        }
      })
    })
    connection.on("close", () => {
      // silenced
    })
    connection.on("error", (err: any) => {
      Toast.error('Connect error!')
    })
    connection.on("disconnected", (err: any) => {
      Toast.error('Connect disconnected!')
    })
  }
  disconnectConnection(connection: any) {
    const s = this
    let i = s.connections.length
    while (i--) {
      if (s.connections[i].peer === connection.peer) {
        s.connections.splice(i, 1)
      }
    }
    const peerIdIndex = s.peerIds.indexOf(connection.peer)
    if (peerIdIndex !== -1) {
      s.peerIds[peerIdIndex] = ''
    }
    if(location.hash) {
      let hash = location.hash.replace('#', '')
      let found = s.id === hash
      for (let i = 0; i < s.connections.length; i++) {
        if (s.connections[i].peer === hash) {
          found = true
          break
        }
      }
      if(!found) {
        location.hash = s.id as string
      }
    }
  }
  destroy() {
    location.hash = ''
    this.peer && this.peer.disconnect()
    this.connectionState = ConnectionState.DISCONNECTED
    this.connections = []
    this.peerIds = ['', '', '', '', '', '', '', '', '', '']
    this.id = this.peer = this.conn = undefined
    lastAppState = null
    Toast.success('Sharing closed')
  }
}

export const initShare = (args: any) => {
  if (!lobby) {
    lobby = new Lobby(args)
  }
}

export const cleanUpShare = () => {
  if (lobby) {
    lobby.destroy()
  }
}

let drawTO: any = null
export const delayUpdateLiveMap = () => {
  clearTimeout(drawTO)
  drawTO = setTimeout(updateLiveMap, 500)
}

export const rebindShare = () => {
  if (lobby && lobby.connectionState === ConnectionState.CONNECTED) {
    const { drawCanvasEditor } = lobby.args
    if (!drawCanvasEditor) return
    const drawEvents = '*'
    drawCanvasEditor.off(drawEvents, delayUpdateLiveMap)
    drawCanvasEditor.on(drawEvents, delayUpdateLiveMap)
  }
}

export const updateLiveMap = () => {
  if (lobby && lobby.connectionState === ConnectionState.CONNECTED) {
    const { presentMap, mapPrepareMode, drawCanvasEditor, canvasItems } = lobby.args
    const currentAppState = getCurrentAppState({ presentMap, mapPrepareMode, drawCanvasEditor, canvasItems })
    
    // Defensive comparison to avoid infinite loops: focus on items and map
    const isDifferent = !lastAppState || 
      JSON.stringify(lastAppState.items) !== JSON.stringify(currentAppState.items) ||
      lastAppState.map !== currentAppState.map ||
      lastAppState.mapHighlight !== currentAppState.mapHighlight ||
      JSON.stringify(lastAppState.editor) !== JSON.stringify(currentAppState.editor)

    if (isDifferent) {
      for (let i = 0; i < lobby.connections.length; i++) {
        const c = lobby.connections[i]
        if (c && lobby.id != c.peer && c.open) {
          c.send({ type: 'state', state: currentAppState })
        }
      }
      lastAppState = currentAppState
    }
  }
}

let lobby: Lobby
let shareTO: any
export const share = ({ ui }: any = {}) => {
  clearTimeout(shareTO)
  shareTO = setTimeout(() => {
    if (((!location.hash && ui) || (!ui && location.hash)) && lobby.connectionState === ConnectionState.DISCONNECTED) {
      if (lobby && !lobby.peer) {
        lobby.listen()
      } else if (lobby && !lobby.peer) {
        lobby.reconnect()
      }
    } else if (location.hash && ui) {
      lobby.destroy()
    }
  }, 1000)
}

export const updateLobbyRefs = ({ presentMap, mapPrepareMode, canvasItems, setCanvasItems, drawCanvasEditor }: any) => {
  if(lobby) {
    lobby.args.presentMap = presentMap
    lobby.args.mapPrepareMode = mapPrepareMode
    if (canvasItems !== undefined) lobby.args.canvasItems = canvasItems
    if (setCanvasItems !== undefined) lobby.args.setCanvasItems = setCanvasItems
    if (drawCanvasEditor !== undefined) lobby.args.drawCanvasEditor = drawCanvasEditor
  }
  return lobby
}
