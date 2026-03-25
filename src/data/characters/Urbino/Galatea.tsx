import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Galatea,
	attack: {
		canvasImage: '/images/remote/399e47c3_wpBbSjafRNFD43K.png',
		bodyImage: '/images/remote/f2eadf27_n3XUCkglqNYsyJP.png',
		skills: {
			active: {
				skillIcon: '/images/remote/29932aaa_UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/0c3d212d_VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/d9e2b922_bNl54Ze1D7wWkJH.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/35e3fca7_xGpjiLgcUtTJbno.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: '/images/remote/ef48fbb2_t1vlASe5DNRHVZq.png',
		bodyImage: '/images/remote/f2eadf27_n3XUCkglqNYsyJP.png',
		skills: {
			active: {
				skillIcon: '/images/remote/29932aaa_UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/0c3d212d_VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/d9e2b922_bNl54Ze1D7wWkJH.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/35e3fca7_xGpjiLgcUtTJbno.png',
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