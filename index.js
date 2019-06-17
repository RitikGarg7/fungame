// alert("file connected");
var scores,activePlayer,roundScore;
init();
document.querySelector("img").style.display="none";





document.querySelector(".btn-roll").addEventListener("click",function() {
    var dice=Math.floor(Math.random()*6)+1;
   var initImage= document.querySelector("img");
   initImage.src="images/dice-"+dice+".png";
   document.querySelector("img").style.display="block";
    if(dice!==1) {
        roundScore+=dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
        
    } else{
         nextPlayer();


    }
    
}) 


document.querySelector(".btn-hold").addEventListener("click",function(){
  // add current score to global score
    scores[activePlayer]+=roundScore;

    // update the UI
    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];

    //check if player won the game
      if(scores[activePlayer]>=20) {
          document.querySelector("#name-"+activePlayer).textContent="Winner!";
          document.querySelector("img").style.display="none";
          document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
          document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        } else{
             // next player
            nextPlayer();
      }


});


document.querySelector(".btn-new").addEventListener("click",function() {
    init();
});






function init() {
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector("img").style.display="none";
    document.querySelector("#score-0").textContent='0';
    document.querySelector("#score-1").textContent='0';
    document.querySelector("#current-0").textContent='0';
    document.querySelector("#current-1").textContent='0';
    document.querySelector("#name-0").textContent="Player 1";
    document.querySelector("#name-1").textContent="Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

}

function nextPlayer() {
    activePlayer===0? activePlayer=1: activePlayer=0;
    roundScore=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#current-1").textContent=0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector("img").style.display="none";
}