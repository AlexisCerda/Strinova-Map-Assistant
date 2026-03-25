import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Kanami,
	attack: {
		canvasImage: '/images/remote/3641a973_7DHOLqvWMzmlch3.png',
		bodyImage: '/images/remote/50e37fd5_v843gf6RWlFsPx7.png',
		skills: {
			active: {
				skillIcon: '/images/remote/e0ef7cad_UBJqoYz835GvVxy.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/f43489b8_OHbINYGSQhFazcd.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/81331af2_jOP3fQIlYxCvZSN.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/84dbc8a7_YH3Phg5XQumsbCM.png',
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