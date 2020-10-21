const playerConstructionStageList = {
    SET_NAME: 'SET_NAME',
    SET_CLASS: 'SET_CLASS'
}

const playerConstructionMarkdown = {
    SET_NAME: '<label for="name">Введите ник</label>' +
        '<input type="text" id="js-name" placeholder="Overlord">' +
        '<button class="button -success" id="js-continue">Сохранить имя</button>',
    // SET_CLASS: (username) => '<p>Имя игорька</p>'
}

class PlayerConstructor {
    name = '';
    class = '';

    constructor() {
        this.setStage(playerConstructionStageList.SET_NAME);
    }

    setStage = (stage) => {
        this.stage = stage;
        this.renderStage();
    }

    renderStage = () => {
        document.getElementById('js-content').innerHTML = playerConstructionMarkdown[this.stage];
        if (this.stage === playerConstructionStageList.SET_NAME) {
        	this.nameInput = document.getElementById('js-name');
            document.getElementById('js-continue').onclick = this.checkUsernameInput;
        }
    }

    checkUsernameInput = () => {
    	const username = this.nameInput.value;
    	console.log(username);
    	if (!username) {
    		alert('Сорри, так не выйдет, так что давай нормально ༼ つ ◕_◕ ༽つ');
    		this.setNameInputError();
    	} else if (username.length === 1) {
    		alert('Ну типо хотя бы посторайся ¯\\_(ツ)_/¯');
    		this.setNameInputError();
    	} else {
    		this.name = username;
    		this.setStage(playerConstructionStageList.SET_CLASS);
    	}
    }

    setNameInputError = () => {
		this.nameInput.classList.toggle('-error');
	}
}