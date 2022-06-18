const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameBoard = document.querySelector(".game-board");
let score = document.querySelector(".score");
let point = 0;
const audio = document.querySelector('.audio');
audio.volume = 0.03;


setInterval(
  (pontuacao = () => {
    point += 10;
    score.innerHTML = `${point}`;
  }),
  500
);

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

gameOverDashboard = () => {
  gameBoard.innerHTML += `<div class="lose"><h2>Game Over</h2><p>sua pontuação: ${point} </p><button id="restart" >Tentar novamente</button></div>`;
  const restartButton = document.querySelector("#restart");

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    
    audio.src = './assets/audio/gameOver.wav';
    audio.loop = false;

    clearInterval(loop);
    gameOverDashboard();
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener('click', jump);

