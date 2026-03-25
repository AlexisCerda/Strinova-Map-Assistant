import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Celestia,
	attack: {
		canvasImage: '/images/remote/0933c39d_PI6eiLuZfcAQ2aR.png',
		bodyImage: '/images/remote/4a9f2b64_xYLHks7NzduUmWP.png',
		skills: {
			active: {
				skillIcon: '/images/remote/7083ac7c_WmtSU2hFLBPaf85.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/a26eb4e2_O5dXCxh3R1wVINQ.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/9c6b29e6_xm5Io68zcXSZAn1.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/f08e0d0b_bJalMyBfZ7iXVtx.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: '/images/remote/1fddb488_Zt93QEgreUnvaxX.png',
		bodyImage: '/images/remote/4a9f2b64_xYLHks7NzduUmWP.png',
		skills: {
			active: {
				skillIcon: '/images/remote/7083ac7c_WmtSU2hFLBPaf85.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/a26eb4e2_O5dXCxh3R1wVINQ.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/9c6b29e6_xm5Io68zcXSZAn1.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/f08e0d0b_bJalMyBfZ7iXVtx.png',
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