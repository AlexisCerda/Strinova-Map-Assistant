import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Michele,
	defense: {
		canvasImage: '/images/remote/72af1d33_29JH5SlaTdCwgFR.png',
		bodyImage: '/images/remote/c4014084_2MLSe7fg8tsQ3br.png',
		skills: {
			active: {
				skillIcon: '/images/remote/721cbee2_8iCzWDaNQPSxqvw.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: '/images/remote/e0b6aedf_ANhKZ6GDzOIjPtf.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: '/images/remote/421def9e_fvrVnE8Ocl21Dpz.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: '/images/remote/23cfae05_UGeEvYfXiSgD4zr.png',
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