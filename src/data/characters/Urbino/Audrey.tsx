import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Audrey,
  attack: {
    canvasImage: '/src/assets/image/character/Audrey/a_icon.png',
    bodyImage: '/src/assets/image/character/Audrey/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Audrey/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Audrey/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Audrey/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Audrey/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/Audrey/d_icon.png',
    bodyImage: '/src/assets/image/character/Audrey/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Audrey/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Audrey/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Audrey/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Audrey/sub.png',
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
