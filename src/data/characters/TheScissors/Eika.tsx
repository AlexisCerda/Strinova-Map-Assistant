import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Eika,
	attack: {
		canvasImage: '/images/remote/a89bcd32_SrnDsxX5bAiBNcE.png',
		bodyImage: '/images/remote/3e3ce001_SMVIPh4fqWzRruy.png',
		skills: {
			active: {
				skillIcon: '/images/remote/6a86b439_SPYXJZwHGObnrmV.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/a5c351a1_JYfa5PdE6r4Kcio.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: '/images/remote/f519087c_sFgyUNK7iWtcvfp.png',
				generateOnCanvas: ultimate
			},
			tactical: {
				skillIcon: '/images/remote/ab52e6c0_to7dWPDVuUFRsIn.png',
				generateOnCanvas: tactical
			}
		}
	}
}

function active() {
	return;
}

function passive() {
	return;
}

function ultimate() {
	return;
}

function tactical() {
	return;
}

export default character;