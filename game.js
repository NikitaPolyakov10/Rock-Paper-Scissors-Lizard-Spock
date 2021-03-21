let playerScore = document.querySelector('.player-score');
playerScore.value;

let computerScore = document.querySelector('.computer-score');
computerScore.value;

let gameInfo = document.querySelector('.game-info');
let gameControls = document.querySelector('.game-controls');
let headingOne = document.querySelector('.heading');
let headingTwo = document.querySelector('.heading2');

let rockButton = document.querySelector('.rock-btn');
let paperButton = document.querySelector('.paper-btn');
let scissorsButton = document.querySelector('.sciss-btn');
let lizardButton = document.querySelector('.lizard-btn');
let spockButton = document.querySelector('.spock-btn');
let playBtn = document.querySelector('.play-btn');
let timer = document.querySelector('.timer');
let container = document.querySelector('.container');
let copyright = document.querySelector('.copyright');

let resultText = document.querySelector('.resultText');

let endGameBtn = document.querySelector('.endGame');

let weapons = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
let playerWeapon = '';
let computerWeapon = '';

playBtn.onclick = function () {
  gameInfo.classList.remove('hidden');
  headingTwo.classList.remove('hidden');
  resultText.classList.remove('hidden');
  gameControls.classList.remove('hidden');
  endGameBtn.classList.remove('hidden');
  timer.classList.remove('hidden');
  playBtn.classList.add('hidden');
  headingOne.style = `margin-top: 10px`;
  container.style = `height: 750px; margin-top: 35px;`;
  copyright.style = `bottom: -31px`;
};

function timerFunc() {
  let count = 3;
  timer.innerHTML = count;

  let x = setInterval(() => {
    count--;
    timer.innerHTML = count;

    if (count <= 0) {
      clearInterval(x);
      timer.innerHTML = '';
    }
  }, 1000);
}

rockButton.onclick = function () {
  timerFunc();

  setTimeout(() => {
    playerWeapon = weapons[0];
    console.log(weapons[0]);

    let randomNumber = Math.floor(Math.random() * 5);

    computerWeapon = weapons[randomNumber];
    console.log(computerWeapon);

    if (computerWeapon === 'Paper') {
      resultText.innerHTML = `Rock vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Scissors') {
      resultText.innerHTML = `Rock vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Lizard') {
      resultText.innerHTML = `Rock vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Spock') {
      resultText.innerHTML = `Rock vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else {
      resultText.innerHTML = `Rock vs ${computerWeapon}. It is a tie!`;
    }
  }, 3000);
};

paperButton.onclick = function () {
  timerFunc();

  setTimeout(() => {
    playerWeapon = weapons[1];
    console.log(weapons[1]);

    let randomNumber = Math.floor(Math.random() * 3);

    computerWeapon = weapons[randomNumber];
    console.log(computerWeapon);

    if (computerWeapon === 'Rock') {
      resultText.innerHTML = `Paper vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Scissors') {
      resultText.innerHTML = `Paper vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Lizard') {
      resultText.innerHTML = `Paper vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Spock') {
      resultText.innerHTML = `Paper vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else {
      resultText.innerHTML = `Paper vs ${computerWeapon}. It is a tie!`;
    }
  }, 3000);
};

scissorsButton.onclick = function () {
  timerFunc();

  setTimeout(() => {
    playerWeapon = weapons[2];
    console.log(weapons[2]);

    let randomNumber = Math.floor(Math.random() * 3);

    computerWeapon = weapons[randomNumber];
    console.log(computerWeapon);

    if (computerWeapon === 'Rock') {
      resultText.innerHTML = `Scissors vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Paper') {
      resultText.innerHTML = `Scissors vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Lizard') {
      resultText.innerHTML = `Scissors vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Spock') {
      resultText.innerHTML = `Scissors vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else {
      resultText.innerHTML = `Scissors vs ${computerWeapon}. It is a tie!`;
    }
  }, 3000);
};

lizardButton.onclick = function () {
  timerFunc();

  setTimeout(() => {
    playerWeapon = weapons[3];
    console.log(weapons[3]);

    let randomNumber = Math.floor(Math.random() * 3);

    computerWeapon = weapons[randomNumber];
    console.log(computerWeapon);

    if (computerWeapon === 'Rock') {
      resultText.innerHTML = `Lizard vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Paper') {
      resultText.innerHTML = `Lizard vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Scissors') {
      resultText.innerHTML = `Lizard vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Spock') {
      resultText.innerHTML = `Lizard vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else {
      resultText.innerHTML = `Lizard vs ${computerWeapon}. It is a tie!`;
    }
  }, 3000);
};

spockButton.onclick = function () {
  timerFunc();

  setTimeout(() => {
    playerWeapon = weapons[4];
    console.log(weapons[4]);

    let randomNumber = Math.floor(Math.random() * 3);

    computerWeapon = weapons[randomNumber];
    console.log(computerWeapon);

    if (computerWeapon === 'Rock') {
      resultText.innerHTML = `Spock vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Paper') {
      resultText.innerHTML = `Spock vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else if (computerWeapon === 'Scissors') {
      resultText.innerHTML = `Spock vs ${computerWeapon}. Player won the round!`;
      playerScore.value++;
    } else if (computerWeapon === 'Lizard') {
      resultText.innerHTML = `Spock vs ${computerWeapon}. Computer won the round!`;
      computerScore.value++;
    } else {
      resultText.innerHTML = `Spock vs ${computerWeapon}. It is a tie`;
    }
  }, 3000);
};

endGameBtn.onclick = function () {
  if (+playerScore.value === 0 && +computerScore.value === 0) {
    resultText.innerHTML = `Start the game!`;
  } else if (playerScore.value > computerScore.value) {
    resultText.innerHTML = `Player won the game!`;
  } else if (playerScore.value < computerScore.value) {
    resultText.innerHTML = `Computer won the game!`;
  } else {
    resultText.innerHTML = `Friendship won!`;
  }
  playerScore.value = 0;
  computerScore.value = 0;
};
