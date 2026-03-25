import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Kokona,
	defense: {
		canvasImage: '/images/remote/57e842c4_jtlryiY8WHIGAMq.png',
		bodyImage: '/images/remote/dde3a8d4_nEpdV1chgeNuiry.png',
		skills: {
			active: {
				skillIcon: '/images/remote/d917929f_9zFsMYumpwJZrTg.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/140afe74_V8NijM5onGulX9m.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/6bd891e4_7lenAEosyt96kbZ.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/0d9fa0f8_tilQp18zRheBMaJ.png',
				generateOnCanvas: ultimate
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