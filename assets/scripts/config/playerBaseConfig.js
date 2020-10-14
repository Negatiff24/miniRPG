const playerBaseConfig = {
	baseParams: {
		titan: {
			hp: 200,
			mp: 50,
		},
		hunter: {
			hp: 150,
			mp: 100,
		},
		warlock: {
			hp: 100,
			mp: 200,
		}
	},

	attack: {
		titan: {
			minDmg: 45,
			maxDmg: 55,
			action: (minDmg, maxDmg) => {
				const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
				console.log('Герой нанёс мощный удар по противнику, снеся ' + finalDmg + ' урона!')
			}
		},
		hunter: {
			minDmg: 70,
			maxDmg: 80,
			action: (minDmg, maxDmg) => {
				const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
				console.log('Герой нанёс быстрый удар ножом по противнику, снеся ' + finalDmg + ' урона!')
			}
		},
		warlock: {
			minDmg: 30,
			maxDmg: 40,
			action: (minDmg, maxDmg) => {
				const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
				console.log('Герой оттолкнул противника телекинезом, снеся ' + finalDmg + ' урона!')
			}
		}
	}
}