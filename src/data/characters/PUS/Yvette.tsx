import { characterData } from '../characterRegistry';
import { factions, PUS } from '../factions';

const character: characterData = {
  faction: factions.PUS,
  id: PUS.Yvette,
  defense: {
    canvasImage: '/src/assets/image/character/Yvette/icon.png',
    bodyImage: '/src/assets/image/character/Yvette/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Yvette/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Yvette/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Yvette/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Yvette/sub.png', 
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
