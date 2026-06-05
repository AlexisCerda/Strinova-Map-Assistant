import { characterData } from '../characterRegistry';
import { factions, PUS } from '../factions';

const character: characterData = {
  faction: factions.PUS,
  id: PUS.Michele,
  defense: {
    canvasImage: '/src/assets/image/character/Michele/icon.png',
    bodyImage: '/src/assets/image/character/Michele/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Michele/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Michele/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Michele/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Michele/sub.png',
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
