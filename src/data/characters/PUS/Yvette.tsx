import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yvette,
	defense: {
		canvasImage: '/images/remote/27720b57_eIVFmswk3tUlOcR.png',
		bodyImage: '/images/remote/fa6cc966_AjGNVF4JLazbfHP.png',
		skills: {
			active: {
				skillIcon: '/images/remote/53aa8a5b_ESH6FNKQjbafMZn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/30617d8a_2hqoyUWsnbA83BP.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/d94a72ee_Hzo6W4y8ib5ceqf.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/15a053ce_32VnSv59tPwTIhl.png',
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