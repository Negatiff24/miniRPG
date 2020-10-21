const game = new Game(gameStageTypeList.NOT_STARTED);
document.getElementById('js-start').onclick = startGame;

function startGame() {
	game.setStage(gameStageTypeList.CREATE_PLAYER);
}

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
	player.baseParams = playerBaseConfig.baseParams[chosenClass];
	player.attack = playerBaseConfig.attack[chosenClass];
}