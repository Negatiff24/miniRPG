// let user = {};

// goGetSomeBread(10);

// function goGetSomeBread(breadCount) {
// 	console.log('Взять деньги');
// 	console.log('Пойти в магаз');
// 	console.log('Купить' + breadCount + 'хлеб');
// 	console.log('Пойти домой');
// }



// alert('Привет, давай заполним твою страницу!');

// user.name = prompt('Как тя зовут?') || 'Кеша';

// user.age = prompt('Сколько те лет?') || 19;

// if (confirm('Учишься в школе?')) {
//     user.school = prompt('В какой школе?') || 'Интернат';
// } else {
//     user.job = prompt('Кем работаешь?') || 'Стример';
// };

// user.avatar = prompt('Кинь ссылку на фото') || 'типо фото';

// document.getElementById('js-name').innerText = user.name;
// document.getElementById('js-age').innerText =  'Возраст: ' + setDeclinationByCount(user.age);
// if (user.school) {
// 	document.getElementById('js-school').innerText = user.school;
// } else {
// 	document.getElementById('js-job').innerText = user.job;
// }
// document.getElementById('js-avatar').innerText = user.avatar;

// function setDeclinationByCount(count) {
//     if (count == 1) {
//         return count + ' год'
//     } else if (count > 1 && count < 5) {
//         return count + ' года'
//     } else {
//         return count + ' лет'
//     }
// }



// function getSquareSum() {
// 	return getSquare(prompt('Введи первое число')) + getSquare(prompt('Введи второе число'));
// }

// function getSquare(a) {
// 	return a * a;
// }




// function getFindPercent() {
// 	return (prompt('Введи скока осталось') || 11) / (prompt('Введи 100%')) * 100;
// }

// // console.log(getSquareSum());
// // console.log(getFindPercent());


// function checkHomeworkStatus() {
// 	if (getSquareSum() === 265) {
// 		return 'perfect';
// 	}
// 	return 'nope';
// }

// function setMark(status) {
// 	if (status === 'perfect') {
// 		console.log('Ученик всё сделал збс')
// 	} else if (status === 'nope') {
// 		console.log('Всё плохо карач')
// 	} else {
// 		console.log('Чёт пошло не так')
// 	}
// }

// setMark(checkHomeworkStatus())



const baseConfig = {
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

const player = {
	name: '',
	class: '',
	level: 0,
	xp: 0,
	baseParams: {
		hp: null,
		mp: null
	},
	attack: {
		minDmg: null,
		maxDmg: null,
		action: null,
	}
};

document.getElementById('js-start').onclick = createPlayer;

function createPlayer() {
	setPlayerName();
	preparePlayerInfoByClass();
	console.log('Вот игрок ', player);
}

function setPlayerName() {
	const playerName = prompt('Укажите, как будут звать персонажа');

	if (!playerName) {
		alert('Сорян, но так низя ༼ つ ◕_◕ ༽つ')
		setPlayerName();
	} else {
		player.name = playerName;
	}
}

function preparePlayerInfoByClass() {
	let chosenClass = prompt('Выберите класс персонажа: "Titan" | "Hunter" | "Warlock"');

	if (!chosenClass) {
		alert('Ну типо хотя бы посторайся ¯\\_(ツ)_/¯');
		preparePlayerInfoByClass();
	} else {
		chosenClass = chosenClass.toLowerCase();
	}

	if (chosenClass === 'titan' || chosenClass === 'hunter' || chosenClass === 'warlock') {
		player.class = chosenClass;
		setBasePlayerParams(chosenClass);
	} else {
		alert('Ну ты дурашка - давай по новой');
		preparePlayerInfoByClass();
	}
}

function setBasePlayerParams(chosenClass) {
	player.baseParams = baseConfig.baseParams[chosenClass];
	player.attack = baseConfig.attack[chosenClass];
}