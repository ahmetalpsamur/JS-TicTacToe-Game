const container_1x1 = document.querySelector(".div-container-1x1");
const container_1x2 = document.querySelector(".div-container-1x2");
const container_1x3 = document.querySelector(".div-container-1x3");
const container_2x1 = document.querySelector(".div-container-2x1");
const container_2x2 = document.querySelector(".div-container-2x2");
const container_2x3 = document.querySelector(".div-container-2x3");
const container_3x1 = document.querySelector(".div-container-3x1");
const container_3x2 = document.querySelector(".div-container-3x2");
const container_3x3 = document.querySelector(".div-container-3x3");

const tictacArrayRow0=[container_1x1,container_2x1,container_3x1];
const tictacArrayRow1=[container_1x2,container_2x2,container_3x2];
const tictacArrayRow2=[container_1x3,container_2x3,container_3x3];
const tictacArrayColumn=[tictacArrayRow0,tictacArrayRow1,tictacArrayRow2];
let gameStart = "X";
const tictac ={
    active:false,
    type:"a"
}

tictacArrayColumn.forEach(function(element){
    element.forEach(function(elementS){
        elementS.tictac={
            active:false,
            type:"a"
        }
        elementS.addEventListener("click",eventListener)
        function eventListener(){
            game(elementS);
        }
    
    })
});

function game(currentTictac) {
    
        if(currentTictac.tictac.active==false){
            if (gameStart == "X") {
                currentTictac.tictac.type = "X";
                currentTictac.innerHTML='<img class="images-x" src="images/x.png">'
                gameStart = "O";
                currentTictac.tictac.active=true;
            }
            else {
                currentTictac.type = "O";
                currentTictac.innerHTML='<img class="images-x" src="images/o.png">'
                gameStart = "X";
                currentTictac.tictac.active=true;
            }
        }
        else{
            console.log("Already Active");
        }
        
    

}


