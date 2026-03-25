import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yugiri,
	defense: {
		canvasImage: '/images/remote/0d31fccb_Jq58o4vKDYUCcl1.png',
		bodyImage: '/images/remote/7b93e62f_JZ2543e9CUYDh8p.png',
		skills: {
			active: {
				skillIcon: '/images/remote/1c26d086_oW4UsSziGHnhLx2.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/00cf465b_jBC3dyGxKzmpQf2.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/4bfae5b3_T4QIuUewCitmjbM.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/ae2311b8_T3huK4YzAXmrV8N.png',
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