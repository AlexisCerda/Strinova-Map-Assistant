import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Ming,
	attack: {
		canvasImage: '/images/remote/ffe4bebb_nuhFZjpVGgJSEyc.png',
		bodyImage: '/images/remote/d94a9819_tgNeOR5Iow6Cakc.png',
		skills: {
			active: {
				skillIcon: '/images/remote/c128e142_NQ2TdSqhseRZY7b.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/81dbb06e_bsAzZemy4uEcaHt.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/6419b68a_CkhMrw23RbmBv5T.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/3668d1dd_B6KC72wphAdt4Ri.png',
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