import { characterData } from '../characterRegistry';
import { factions, PUS } from '../factions';

const character: characterData = {
  faction: factions.PUS,
  id: PUS.Chiyo,
  /**
   * TODO: This image links are mock. Pls impl chiyo images.
   */
  defense: {
    canvasImage: '/src/assets/image/character/Chiyo/icon.png',
    bodyImage: '/src/assets/image/character/Chiyo/body.png',
    skills: {
      active: {
        skillIcon: '/src/assets/image/character/Chiyo/active.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: '/src/assets/image/character/Chiyo/passive.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: '/src/assets/image/character/Chiyo/ultimate.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: '/src/assets/image/character/Chiyo/sub.png', 
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
