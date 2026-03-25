import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Maddelena,
	attack: {
		canvasImage: '/images/remote/d4869c13_OGgXKe6pPERflQL.png',
		bodyImage: '/images/remote/991384ba_3djgpfyBbxWzUAD.png',
		skills: {
			active: {
				skillIcon: '/images/remote/6e2d18e3_2r7wkizoLbpqMOZ.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/114d7f43_q61FltINbyrA8YV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/91b62917_yerm1tuq97ZnaWp.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/7e607042_tazvXEJNs5HuyeD.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: '/images/remote/1f86757b_dxqSrs3ivIJlF5h.png',
		bodyImage: '/images/remote/991384ba_3djgpfyBbxWzUAD.png',
		skills: {
			active: {
				skillIcon: '/images/remote/6e2d18e3_2r7wkizoLbpqMOZ.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/114d7f43_q61FltINbyrA8YV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/91b62917_yerm1tuq97ZnaWp.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/7e607042_tazvXEJNs5HuyeD.png',
				generateOnCanvas: ultimate
			}
		}
	},
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