import { characterData } from '../characterRegistry';
import { factions, PUS } from '../factions';

const character: characterData = {
  faction: factions.PUS,
  id: PUS.Kokona,
  defense: {
    canvasImage: '/src/assets/image/character/Kokona/icon.png',
    bodyImage: '/src/assets/image/character/Kokona/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Kokona/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Kokona/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Kokona/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Kokona/sub.png',
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
