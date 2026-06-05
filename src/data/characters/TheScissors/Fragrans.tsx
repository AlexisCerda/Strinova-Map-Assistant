import { characterData } from '../characterRegistry';
import { factions, TheScissors } from '../factions';

const character: characterData = {
  faction: factions.TheScissors,
  id: TheScissors.Fragrans,
  attack: {
    canvasImage: '/src/assets/image/character/Fragrans/icon.png',
    bodyImage: '/src/assets/image/character/Fragrans/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Fragrans/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Fragrans/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Fragrans/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Fragrans/sub.png',
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
