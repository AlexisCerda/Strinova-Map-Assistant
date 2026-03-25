// import { factions, PUS, TheScissors, Urbino } from "./factions";
// import { active, character, passive, ultimate } from "./PUS/Michele";

// export function getCharacterById(characters: characterData[], id: PUS | TheScissors | Urbino): characterData | undefined {
// 	return characters.find(character => character.id === id);
// }

// export function getCharactersByFaction(characters: characterData[], faction: factions): characterData[] {
// 	return characters.filter(character => character.faction === faction);
// }

// export function getCharacterAbilities(character: characterData): abilityData[] {
// 	const abilities: abilityData[] = [];
// 	if (character.attack) {
// 		abilities.push(character.attack.skills);
// 	}
// 	if (character.defense) {
// 		abilities.push(character.defense.skills);
// 	}
// 	return abilities;
// }

// 	[PUS.Yvette]: {
// 		faction: factions.PUS,
// 		id: PUS.Yvette,
// 		defense: {
// 			canvasImage: '/images/remote/27720b57_eIVFmswk3tUlOcR.png'
// 		}
// 	},
// 	[PUS.Flavia]: {
// 		faction: factions.PUS,
// 		id: PUS.Flavia,
// 		defense: {
// 			canvasImage: '/images/remote/1f571ffb_jC98Rq3NhrUXYWK.png'
// 		}
// 	},
// 	[TheScissors.Ming]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Ming,
// 		attack: {
// 			canvasImage: '/images/remote/ffe4bebb_nuhFZjpVGgJSEyc.png'
// 		}
// 	},
// 	[TheScissors.Lawine]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Lawine,
// 		attack: {
// 			canvasImage: '/images/remote/2c0a3294_DeK5afJoAhpyNcM.png'
// 		}
// 	},
// 	[TheScissors.Meredith]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Meredith,
// 		attack: {
// 			canvasImage: '/images/remote/e65fec21_C4QmVOhp1rB9Gd6.png'
// 		}
// 	},
// 	[TheScissors.Reiichi]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Reiichi,
// 		attack: {
// 			canvasImage: '/images/remote/3788ee06_txSOyYkT4pXhGBn.png'
// 		}
// 	},
// 	[TheScissors.Kanami]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Kanami,
// 		attack: {
// 			canvasImage: '/images/remote/3641a973_7DHOLqvWMzmlch3.png'
// 		}
// 	},
// 	[TheScissors.Eika]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Eika,
// 		attack: {
// 			canvasImage: '/images/remote/a89bcd32_SrnDsxX5bAiBNcE.png'
// 		}
// 	},
// 	[TheScissors.Fragrans]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Fragrans,
// 		attack: {
// 			canvasImage: '/images/remote/fa72cb3c_AM58XCKyixJlTGO.png'
// 		}
// 	},
// 	[Urbino.Audrey]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Audrey,
// 		attack: {
// 			canvasImage: '/images/remote/59e66937_qD7YufUpTmbzX1x.png'
// 		},
// 		defense: {
// 			canvasImage: '/images/remote/22f8a2ec_IVhuSTZvYmk4CNj.png'
// 		}
// 	},
// 	[Urbino.Maddelena]: {
// 		faction: factions.PUS,
// 		id: Urbino.Maddelena,
// 		attack: {
// 			canvasImage: "/images/remote/d4869c13_OGgXKe6pPERflQL.png"
// 		},
// 		defense: {
// 			canvasImage: "/images/remote/1f86757b_dxqSrs3ivIJlF5h.png"
// 		}
// 	},
// 	[Urbino.Fuchsia]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Fuchsia,
// 		attack: {
// 			canvasImage: "/images/remote/86ba76e3_5Vbc3mYw8KJtTDC.png"
// 		},
// 		defense: {
// 			canvasImage: "/images/remote/5c952eb1_TU81atfzDKiRV2o.png"
// 		}
// 	},
// 	[Urbino.Celestia]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Celestia,
// 		attack: {
// 			canvasImage: "/images/remote/0933c39d_PI6eiLuZfcAQ2aR.png"
// 		},
// 		defense: {
// 			canvasImage: "/images/remote/1fddb488_Zt93QEgreUnvaxX.png"
// 		}
// 	},
// 	[Urbino.BaiMo]: {
// 		faction: factions.Urbino,
// 		id: Urbino.BaiMo,
// 		attack: {
// 			canvasImage: "/images/remote/7c8c2d42_jt4621ivFRfbEqD.png"
// 		},
// 		defense: {
// 			canvasImage: "/images/remote/01ca04c5_2KrCPXp5k1e6wfm.png"
// 		}
// 	},
// 	[Urbino.Galatea]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Galatea,
// 		attack: {
// 			canvasImage: "/images/remote/399e47c3_wpBbSjafRNFD43K.png"
// 		},
// 		defense: {
// 			canvasImage: "/images/remote/ef48fbb2_t1vlASe5DNRHVZq.png"
// 		}
// 	}
// }
