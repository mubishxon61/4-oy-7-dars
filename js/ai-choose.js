export function aiChoose(){
    const hands = ["rock", "paper", "scissors"]
    const randIndex = Math.trunc(Math.random()*hands.length);
    return hands[randIndex]
}