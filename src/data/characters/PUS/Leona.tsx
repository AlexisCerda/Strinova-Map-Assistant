import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Leona,
	defense: {
		canvasImage: 'https://cdn.sa.net/2025/01/23/WY9ijCwS7e4OPNM.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/snfMAvm1384Qc5h.png',
		skills: {
			active: {
				skillIcon: 'https://cdn.sa.net/2025/01/23/8bA3kca54WlQi96.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://cdn.sa.net/2025/01/23/A45ZR1MXwovaijc.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: 'https://cdn.sa.net/2025/01/23/so6fhJX7Lp1YAPN.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: 'https://cdn.sa.net/2025/01/23/snt2Q9EovlWj7Nx.png',
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