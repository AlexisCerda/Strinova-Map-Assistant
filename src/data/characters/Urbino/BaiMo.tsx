import { characterData } from '../characterRegistry';
import { factions, Urbino } from '../factions';

const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.BaiMo,
  attack: {
    canvasImage: '/src/assets/image/character/BaiMo/a_icon.png',
    bodyImage: '/src/assets/image/character/BaiMo/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/BaiMo/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/BaiMo/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/BaiMo/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/BaiMo/sub.png',
        generateOnCanvas: sub,
      },
    },
  },
  defense: {
    canvasImage: '/src/assets/image/character/BaiMo/d_icon.png',
    bodyImage: '/src/assets/image/character/BaiMo/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/BaiMo/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/BaiMo/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/BaiMo/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/BaiMo/sub.png',
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
