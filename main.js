SignsWithNames = {
  "🪨": "Rock",
  "📃": "Paper",
  "✂️": "Scissors",
};

let computer = 0,
  player = 0;
let playerChoice;
const emoji = document.querySelectorAll(".emoji");
const playAgain = document.querySelector("button");
let mainHead = document.querySelector(".mainHead div");
let headNotice = document.querySelector(".headNotice");
const playerSign = document.querySelector(".playerSign");
const playerScore = document.querySelector(".playerScore");
const computerSign = document.querySelector(".computerSign");
const overlayPopup = document.querySelector("#overlayPopup");
const computerScore = document.querySelector(".computerScore");

emoji.forEach((emojis) => {
  emojis.addEventListener("click", (e) => {
    playerChoice = e.currentTarget.innerHTML;
    playGame();
  });
});

function getComputerChoice() {
  let currentDate = new Date();
  Signs = ["🪨", "📃", "✂️"];
  let randomSign = currentDate.getMilliseconds() % 3;
  return Signs[randomSign];
}

function playGame() {
  let computerChoice = getComputerChoice();
  roundPlay(playerChoice, computerChoice);
}

function roundPlay(playerChoice, computerChoice) {
  playerSign.innerHTML = playerChoice;
  computerSign.innerHTML = computerChoice;
  wonOrLose(playerChoice, computerChoice);
}

function wonOrLose(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    mainHead.innerText = "Tie!!!";
    headNotice.innerText =
      SignsWithNames[playerChoice] +
      " ties with " +
      SignsWithNames[computerChoice];
  } else if (
    (playerChoice === "🪨" && computerChoice === "📃") ||
    (playerChoice === "📃" && computerChoice === "✂️") ||
    (playerChoice === "✂️" && computerChoice === "🪨")
  ) {
    mainHead.innerText = "You lost!!!";
    headNotice.innerText =
      SignsWithNames[computerChoice] + " beats " + SignsWithNames[playerChoice];
    computerScore.innerText = `Computer: ${++computer}`;
  } else {
    mainHead.innerText = "You Won!!!";
    headNotice.innerText =
      SignsWithNames[playerChoice] + " beats " + SignsWithNames[computerChoice];
    playerScore.innerText = `Player: ${++player}`;
  }

  playOrStop();
}

function playOrStop() {
  const txt = document.querySelector(".text");
  if (computer === 5 || player === 5) {
    if (computer === 5) {
      txt.innerText = "You Lost!!!";
    } else {
      txt.innerText = "You Win!!!";
    }
    overlayPopup.style.display = "block";
    overlayPopup.classList.add("active");
  }
}

playAgain.onclick = () => {
  (computer = 0), (player = 0);
  overlayPopup.style.display = "none";
  overlayPopup.classList.remove("active");
  playerScore.innerText = `Player: 0`;
  computerScore.innerText = `Computer: 0`;
  mainHead.innerText = "Select any one from below";
  headNotice.innerText = "First to score 5 points wins the game";
};
