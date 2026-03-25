import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Cielle,
  attack: {
    canvasImage: 'https://s2.loli.net/2024/09/29/PI6eiLuZfcAQ2aR.png',
    bodyImage: 'https://cdn.sa.net/2025/04/22/xYLHks7NzduUmWP.png',
    skills: {
      active: {
        skillIcon: 'https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: 'https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: 'https://cdn.sa.net/2024/11/19/xm5Io68zcXSZAn1.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: 'https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png',
        generateOnCanvas: ultimate
      }
    }
  },
  defense: {
    canvasImage: 'https://s2.loli.net/2024/09/29/Zt93QEgreUnvaxX.png',
    bodyImage: 'https://cdn.sa.net/2025/04/22/xYLHks7NzduUmWP.png',
    skills: {
      active: {
        skillIcon: 'https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: 'https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: 'https://cdn.sa.net/2024/11/19/xm5Io68zcXSZAn1.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: 'https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png',
        generateOnCanvas: ultimate
      }
    }
  },
}

function active() {
  return;	
}

function passive() {
  return;
}

function ultimate() {
  return;
}

function tactical() {
  return;
}

export default character;