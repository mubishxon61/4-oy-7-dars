export function checkWinner(ai, player) {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  const lizard = "lizard";
  const spock = "spock";

  if (ai === player) return "draw";

  if (
    (ai === rock && (player === scissors || player === lizard)) ||
    (ai === paper && (player === rock || player === spock)) ||
    (ai === scissors && (player === paper || player === lizard)) ||
    (ai === lizard && (player === spock || player === paper)) ||
    (ai === spock && (player === scissors || player === rock))
  ) {
    return "ai";
  }

  return "player";
}
