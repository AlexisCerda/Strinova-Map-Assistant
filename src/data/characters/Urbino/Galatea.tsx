import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Galatea,
  attack: {
    canvasImage: '/src/assets/image/character/Galatea/a_icon.png',
    bodyImage: '/src/assets/image/character/Galatea/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Galatea/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Galatea/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Galatea/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Galatea/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/Galatea/d_icon.png',
    bodyImage: '/src/assets/image/character/Galatea/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Galatea/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Galatea/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Galatea/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Galatea/sub.png',
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
