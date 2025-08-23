import {aiChoose}from "./ai-choose.js"
import { elAi, elHands, elPlayer, elRefreshGameButton, elStatusText } from "./html-selection.js";
import { swichZone } from "./swich-zone.js";
import { checkWinner } from "./check-winner.js";
elHands.forEach((el)=>{
    el.addEventListener("click",(e)=>  {
        const player = e.target.alt;
        const playerSrc = e.target.src;
        elPlayer.src = playerSrc ;
        swichZone(true);
        setTimeout(()=>{
            const ai = aiChoose()
            const winner = checkWinner(ai, player)         
            elAi.src = `images/${ai}.svg`
            elStatusText.textContent = winner;
        }, 1000)
    })
    
})
elRefreshGameButton.addEventListener("click", ()=>{
    swichZone(false);
});