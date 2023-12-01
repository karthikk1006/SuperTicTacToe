console.log("OM NAMAH SHIVAYAH");
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
    document.getElementById(currentPlayArea).style.borderBlockColor="white";
}
const PlayAreaDeMarker=()=>{
    if(currentPlayArea)
    document.getElementById(currentPlayArea).style.borderBlockColor="black";
}
const BigBoxValidator=()=>{
    let boxes=document.getElementById(box).children;

}

const SmallBoxValidator=(box,curr)=>{
    let boxes=document.getElementById(box).children;
    console.log(boxes[0].innerHTML);
    for( let x of WinningCombinations){
        if( boxes[x[0]].innerHTML==curr && boxes[x[0]].innerHTML==boxes[x[1]].innerHTML && boxes[x[1]].innerHTML==boxes[x[2]].innerHTML){
            console.log("win");
            document.getElementById(box).innerHTML=curr;
            game[box-1]=curr;
        }
    }


}
document.getElementById("grid-container").onclick=e=>{
    PlayAreaDeMarker();
    console.log(e.target.id);
    e.target.innerHTML=symbols[currentsymbol];
    //console.log(e.target.innerHTML);
    SmallBoxValidator(e.target.id[0],symbols[currentsymbol]);
    currentsymbol=currentsymbol?0:1;
    currentPlayArea=e.target.id[2];
    console.log(currentPlayArea);
    PlayAreaMarker();


}


