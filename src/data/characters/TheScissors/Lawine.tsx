import { characterData } from '../characterRegistry';
import { factions, TheScissors } from '../factions';

const character: characterData = {
  faction: factions.TheScissors,
  id: TheScissors.Lawine,
  attack: {
    canvasImage: '/src/assets/image/character/Lawine/icon.png',
    bodyImage: '/src/assets/image/character/Lawine/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Lawine/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Lawine/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Lawine/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Lawine/sub.png',
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
