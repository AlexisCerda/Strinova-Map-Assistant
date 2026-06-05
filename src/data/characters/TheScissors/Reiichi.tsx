import { characterData } from '../characterRegistry';
import { factions, TheScissors } from '../factions';

const character: characterData = {
  faction: factions.TheScissors,
  id: TheScissors.Reiichi,
  attack: {
    canvasImage: '/src/assets/image/character/Reiichi/icon.png',
    bodyImage: '/src/assets/image/character/Reiichi/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Reiichi/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Reiichi/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Reiichi/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Reiichi/sub.png',
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
