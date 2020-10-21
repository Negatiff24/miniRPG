const gameStageTypeList = {
	NOT_STARTED: 'NOT_STARTED',
	CREATE_PLAYER: 'CREATE_PLAYER',
	ONBOARD_PLAYER: 'ONBOARD_PLAYER',
	GAME_OVER: 'GAME_OVER'
}

const stageMarkdown = {
	NOT_STARTED: '<button class="button -success" id="js-start">Start</button>',
	CREATE_PLAYER: '<h1>Тут будем создавать игорька!</h1><div class="content" id="js-content"></div>'
}

class Game {
	constructor(stage) {
		this.setStage(stage);
	}

	setStage(newStage) {
		this.stage = newStage;
		this.renderStage();
	}

	renderStage() {
		document.getElementById('js-body').innerHTML = stageMarkdown[this.stage];
		if (this.stage === gameStageTypeList.CREATE_PLAYER) {
			this.playerConstructor = new PlayerConstructor();
		}
	}
}