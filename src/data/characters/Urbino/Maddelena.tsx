import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Maddelena,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/OGgXKe6pPERflQL.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/3djgpfyBbxWzUAD.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/q61FltINbyrA8YV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/yerm1tuq97ZnaWp.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/dxqSrs3ivIJlF5h.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/3djgpfyBbxWzUAD.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/q61FltINbyrA8YV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/yerm1tuq97ZnaWp.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png',
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