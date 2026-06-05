import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Fuchsia,
  attack: {
    canvasImage: '/src/assets/image/character/Fuchsia/a_icon.png',
    bodyImage: '/src/assets/image/character/Fuchsia/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Fuchsia/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Fuchsia/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Fuchsia/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Fuchsia/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/Fuchsia/d_icon.png',
    bodyImage: '/src/assets/image/character/Fuchsia/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Fuchsia/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Fuchsia/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Fuchsia/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Fuchsia/sub.png',
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
