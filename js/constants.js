import { elHands, elHandsHard, elZoneGrid } from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
  rock: "rock",
  scissors: "scissors",
  paper: "paper",
  spock: "spock",
  lizard: "lizard"
};

export const hands = [rock, paper, scissors, spock, lizard];

export let mode = "easy";

export function modeChenger(value) {
  mode = value;
  elHands.forEach((el) => {
    if (el.alt === "scissors") {
      if (value === "hard") {
        el.parentElement.classList.remove("col-start-1", "col-end-3", "place-items-center");
        el.parentElement.classList.add("place-items-end");
      } else {
        el.parentElement.classList.add("col-start-1", "col-end-3", "place-items-center");
        el.parentElement.classList.remove("place-items-end");
      }
    }
    if (el.alt === "rock") {
      if (value === "hard") {
        el.parentElement.classList.add("col-start-1", "col-end-3", "place-items-center");
      } else {
        el.parentElement.classList.remove("col-start-1", "col-end-3", "place-items-center");
      }
    }
  });

  elHandsHard.forEach((hand) => {
    if (value === "hard") {
      hand.classList.remove("hidden");
      elZoneGrid.classList.remove("grid-cols-2", "grid-rows-2", "gap-x-20", "gap-y-6");
      elZoneGrid.classList.add("grid-cols-2", "grid-rows-3", "gap-x-10", "gap-y-5");
    } else {
      elZoneGrid.classList.remove("grid-cols-2", "grid-rows-3", "gap-x-10", "gap-y-5");
      elZoneGrid.classList.add("grid-cols-2", "grid-rows-2", "gap-x-20", "gap-y-6");
      hand.classList.add("hidden");
    }
  });
}