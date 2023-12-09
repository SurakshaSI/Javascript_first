let comp;
let player;
let compWin;
let playerWin;

for(comp=0, player=0 ; comp<5 && player<5 ; )
{
let playerSel=prompt("Rock, Paper or Scissors?","null");
let playerSelection=playerSel.toLowerCase();
const computerSelection=getComputerChoice();
let returned=playRound(playerSelection,computerSelection);
if(returned==="compWin")
{
    comp++;
    console.log(`computer score:${comp}\nplayer score:${player}`);
}
else if(returned==="playerWin")
{
    player++;
    console.log(`computer score:${comp}\nplayer score:${player}`);
}
else if(returned==="tie")
{
    console.log(`computer score:${comp}\nplayer score:${player}`);
}
}
if(comp>player)
{
    game("comp");
}
else if(player>comp)
{
    game("player");
}

function playRound(playerSelection,computerSelection)
{   
    if(playerSelection===null)
    {
        console.log("Please select a valid choice");
        return;
    }
    if(playerSelection==="")
    {
        console.log("please select something");
        return;
    }
    if(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors")
    {
        console.log("please type correctly!");
        return;
    }
    if((playerSelection==="rock" && computerSelection==="paper") || (playerSelection==="scissors" && computerSelection==="rock") || (playerSelection==="paper" && computerSelection==="scissors"))
    {
          console.log(`computer chose ${computerSelection}`);
          console.log(`"${computerSelection}" beats "${playerSelection}", you lose!`);
          return "compWin";
    }
    else if((playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="paper"))
    {
          console.log(`computer chose ${computerSelection}`);  
          console.log(`"${playerSelection}" beats "${computerSelection}", you win!`)
          return "playerWin";
    }
    else if((playerSelection==="rock" && computerSelection==="rock") || (playerSelection==="paper" && computerSelection==="paper") || (playerSelection==="scissors" && computerSelection==="scissors"))
    {
        console.log("it's a tie");
        return "tie";
    }
}
function getComputerChoice()
{
    let choice=Math.floor(Math.random()*3);
    switch(choice)
    {
        case 0: return "rock";
                break;
        case 1: return "paper";
                break;
        case 2: return "scissors";
                break;
    }
}
function game(winner)
{
    if(winner==="player")
      console.log("You win!");
    else if(winner==="comp")
      console.log("sorry, computer wins");
}
