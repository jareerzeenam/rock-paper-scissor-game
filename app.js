const game = () => {
  let pScore = 0;
  let cScore = 0;

  //   ! Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      match.classList.remove("fadeOut");
    });
  };
  //   ! Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    // ! Remove the Animation class once its used
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // ! Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // ! Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // console.log(computerNumber);
        // console.log(computerChoice);

        setTimeout(() => {
          // ! Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          // ! Update Images
          playerHand.src = `https://petinone.000webhostapp.com/assets/${this.textContent}.png`;
          computerHand.src = `https://petinone.000webhostapp.com/assets/${computerChoice}.png`;
        }, 2000);

        //! Update the score after the Animation happens
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // ! Update Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // ! Restart Game
  const restartGame = () => {
    const reStart = document.querySelector(".finalWinner button");
    reStart.addEventListener("click", () => {
      window.location.reload();
    });
  };
  restartGame();

  //! End Game
  const endGame = () => {
    const finalWinner = document.querySelector(".finalWinner");
    const match = document.querySelector(".match");
    const winnerText = document.querySelector(".winnerText");

    if (pScore === 5) {
      match.classList.remove("fadeIn");
      match.classList.add("fadeOut");
      setTimeout(() => {
        finalWinner.classList.add("fadeIn");
        finalWinner.classList.remove("fadeOut");
        winnerText.textContent = "Player Won The Game";
      }, 2000);
    } else if (cScore === 5) {
      match.classList.remove("fadeIn");
      match.classList.add("fadeOut");
      setTimeout(() => {
        finalWinner.classList.add("fadeIn");
        finalWinner.classList.remove("fadeOut");
        winnerText.textContent = "Computer Won The Game";
      }, 2000);
    }
  };

  //! Comparisons happens here
  const compareHands = (playerChoice, computerChoice) => {
    // ! Update text
    const winner = document.querySelector(".winner");

    // ! Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a Tie";
      return;
    }
    // ! Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        endGame();
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        endGame();
        updateScore();
        return;
      }
    }
    // ! Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        endGame();
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        endGame();
        updateScore();
        return;
      }
    }
    // ! Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        endGame();
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        endGame();
        updateScore();
        return;
      }
    }
  };

  // ! Call all the inner functions
  startGame();
  playMatch();
};

game();
