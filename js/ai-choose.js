import { hands } from "./constants.js";

export function aiChoose(mode) {
  const hard = 5;
  const easy = 3;
  const randIndex = Math.trunc(Math.random() * (mode === "easy" ? easy : hard));
  return hands[randIndex];
}