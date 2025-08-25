import { aiChoose } from "./ai-choose.js";
import { elAi, elHands, elModeChanger, elPlayer, elRefreshGameButton, elStatusText } from "./html-selection.js";
import { swichZone } from "./swich-zone.js";
import { checkWinner } from "./check-winner.js";
import { mode, modeChenger } from "./constants.js";

let score = 0;
const elScore = document.getElementById("score");

// Hands
elHands.forEach((el) => {
  el.addEventListener("click", (e) => {
    const player = e.target.alt;
    const playerSrc = e.target.src;
    elPlayer.src = playerSrc;
    swichZone(true);

    setTimeout(() => {
      const ai = aiChoose(mode);
      const winner = checkWinner(ai, player);
      elAi.src = `./images/${ai}.svg`;

      if (winner === "player") {
        elStatusText.textContent = "You Win!";
        score++;
      } else if (winner === "ai") {
        elStatusText.textContent = "You Lose!";
        score = Math.max(0, score - 1);
      } else {
        elStatusText.textContent = "Draw!";
      }

      elScore.textContent = score;
    }, 1000);
  });
});

// Refresh game
elRefreshGameButton.addEventListener("click", () => {
  swichZone(false);
});

// Mode Changer
elModeChanger.addEventListener("click", () => {
  if (mode === "easy") {
    modeChenger("hard");
    elModeChanger.textContent = "Hard mode";
  } else {
    modeChenger("easy");
    elModeChanger.textContent = "Easy mode";
  }
});