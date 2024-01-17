
document.addEventListener('DOMContentLoaded', () => {
symbols=["X","O"];
currentsymbol=0;
currentPlayArea="";
const WinningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
let game=["","","","","","","","",""];
const PlayAreaMarker=()=>{
    if(game[parseInt(currentPlayArea)-1]===""){
    document.getElementById(currentPlayArea).style.borderBlockColor="white";
    const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(box => {
            if (box.id !== currentPlayArea) {
                box.style.pointerEvents = 'none';
                box.style.opacity = '0.5'; 
            }
        });
}
}
const PlayAreaDeMarker=()=>{
    if(currentPlayArea){
    document.getElementById(currentPlayArea).style.borderBlockColor="black";
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.style.pointerEvents = 'auto';
        box.style.opacity = '1';
    });

    }
}
const BigBoxValidator=()=>{
    for( let x of WinningCombinations){
        if((game[x[0]]==='X' || game[x[0]]==='O') && game[x[0]]===game[x[1]] && game[x[1]]===game[x[2]]){
            console.log("Full Win");
            document.getElementById('you-win-page').style.display="flex";
            document.getElementById('you-win-text').innerHTML=`${game[x[0]]} Wins!!!`;
        }
    }    

}

const SmallBoxValidator=(box,curr)=>{
    let boxes=document.getElementById(box).children;
    let f=0;
    for(let sbox of boxes){
        if(sbox.innerHTML===""){
            f=1;
            break;
        }
    }
    if(f===0){
        document.getElementById(box).innerHTML = "D";
            document.getElementById(box).classList.add("winner-X");
            game[box-1]="D";
            BigBoxValidator()
            console.log(game);
    }
    for( let x of WinningCombinations){
        if( boxes[x[0]] && boxes[x[0]].innerHTML==curr && boxes[x[0]].innerHTML==boxes[x[1]].innerHTML && boxes[x[1]].innerHTML==boxes[x[2]].innerHTML){
            document.getElementById(box).innerHTML = curr;
            document.getElementById(box).classList.add(curr === "X" ? "winner-X" : "winner-O");
            game[box-1]=curr;
            BigBoxValidator()
            console.log(game);
        }
    }


}
document.getElementById("grid-container").onclick=e=>{
    PlayAreaDeMarker();
    if(!e.target.disabled){
    e.target.innerHTML=symbols[currentsymbol];
    e.target.disabled=true;
    currentBox=e.target.id;
    SmallBoxValidator(currentBox[0],symbols[currentsymbol]);
    currentsymbol=currentsymbol?0:1;
    currentPlayArea=currentBox[2];
    PlayAreaMarker();
    }


}
document.getElementById('play-again-link').addEventListener('click', () => {
    game = ["", "", "", "", "", "", "", "", ""];
    currentsymbol = 0;
    currentPlayArea = "";
    window.location.reload();
    document.getElementById('you-win-page').style.display="none";
});


});
