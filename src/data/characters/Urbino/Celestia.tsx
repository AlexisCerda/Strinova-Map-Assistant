import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Celestia,
  attack: {
    canvasImage: '/src/assets/image/character/Celestia/a_icon.png',
    bodyImage: '/src/assets/image/character/Celestia/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Celestia/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Celestia/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Celestia/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Celestia/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/Celestia/d_icon.png',
    bodyImage: '/src/assets/image/character/Celestia/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Celestia/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Celestia/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Celestia/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Celestia/sub.png',
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
