import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Cielle,  
  attack: {
    canvasImage: '/src/assets/image/character/Cielle/a_icon.png',
    bodyImage: '/src/assets/image/character/Cielle/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Cielle/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Cielle/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Cielle/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Cielle/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/Cielle/d_icon.png',
    bodyImage: '/src/assets/image/character/Cielle/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Cielle/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Cielle/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Cielle/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Cielle/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
};

function active() {
  return;
}

function passive() {
  return;
}

function ultimate() {
  return;
}

function sub() {
  return;
}

export default character;
