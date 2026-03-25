import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Fuchsia,
	attack: {
		canvasImage: '/images/remote/86ba76e3_5Vbc3mYw8KJtTDC.png',
		bodyImage: '/images/remote/62d2ef4e_4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: '/images/remote/f68f21f7_tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/81449a18_5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/1a82db67_PxS2mWOR6TILZF9.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/d4121809_rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: '/images/remote/5c952eb1_TU81atfzDKiRV2o.png',
		bodyImage: '/images/remote/62d2ef4e_4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: '/images/remote/f68f21f7_tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/81449a18_5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/1a82db67_PxS2mWOR6TILZF9.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/d4121809_rOxFKuLX7e5QWhw.png',
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