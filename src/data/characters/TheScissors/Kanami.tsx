import { characterData } from '../characterRegistry';
import { factions, TheScissors } from '../factions';

const character: characterData = {
  faction: factions.TheScissors,
  id: TheScissors.Kanami,
  attack: {
    canvasImage: '/src/assets/image/character/Kanami/icon.png',
    bodyImage: '/src/assets/image/character/Kanami/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Kanami/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Kanami/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Kanami/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Kanami/sub.png',
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
