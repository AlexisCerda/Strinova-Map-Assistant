import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Leona,
	defense: {
		canvasImage: '/images/remote/7994385d_WY9ijCwS7e4OPNM.png',
		bodyImage: '/images/remote/91422b07_snfMAvm1384Qc5h.png',
		skills: {
			active: {
				skillIcon: '/images/remote/0b05116b_8bA3kca54WlQi96.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/f2bfc901_A45ZR1MXwovaijc.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/0b6bd9eb_so6fhJX7Lp1YAPN.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/b30ab458_snt2Q9EovlWj7Nx.png',
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