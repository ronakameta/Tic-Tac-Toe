const checker_One = [1,2,3,5,6,7,8,9];
const checker_Two = [1,2,3,4,5,7,8,9];
let player_No = 1;
function player_Turn(){
    player_No++;
    console.log(player_No);
};

function hit1(){
    player_Turn();
    if(player_No%2 === 0){
    document.querySelector(".b1").style.background = "yellow";
    document.querySelector(".turn").textContent = "Player 2"
    checker_One[0] = 0;
    }else{
    document.querySelector(".b1").style.background = "red";
    document.querySelector(".turn").textContent = "Player 1"
    checker_Two[0] = 1;
    }
    check();
};
function hit2(){
    player_Turn();
    if(player_No%2 === 0){
    document.querySelector(".b2").style.background = "yellow";
    document.querySelector(".turn").textContent = "Player 2"
    checker_One[1] = 0;
    }else{
        document.querySelector(".b2").style.background = "red";
        document.querySelector(".turn").textContent = "Player 1"
    checker_Two[1] = 1;
    }
    check();
};
function hit3(){
    player_Turn();
    if(player_No%2 === 0){
    document.querySelector(".b3").style.background = "yellow";
    document.querySelector(".turn").textContent = "Player 2"
   checker_One[2] = 0;
    }else{
        document.querySelector(".b3").style.background = "red";
        document.querySelector(".turn").textContent = "Player 1"
   checker_Two[2] = 1;
    }
    check();
};
function hit4(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b4").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[3] = 0;
        }else{
            document.querySelector(".b4").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[3] = 1;
        }
    check();
};
function hit5(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b5").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[4] = 0;
        }else{
            document.querySelector(".b5").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[4] = 1;
        }
    check();
};
function hit6(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b6").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[5] = 0;
        }else{
            document.querySelector(".b6").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[5] = 1;
        }
    check();
};
function hit7(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b7").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[6] = 0;
        }else{
            document.querySelector(".b7").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[6] = 1;
        }
    check();
};
function hit8(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b8").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[7] = 0;
        }else{
            document.querySelector(".b8").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[7] = 1;
        }
    check();
};
function hit9(){
    player_Turn();
    if(player_No%2 === 0){
        document.querySelector(".b9").style.background = "yellow";
        document.querySelector(".turn").textContent = "Player 2"
       checker_One[8] = 0;
        }else{
            document.querySelector(".b9").style.background = "red";
            document.querySelector(".turn").textContent = "Player 1"
       checker_Two[8] = 1;
        }
    check();
};
document.querySelector(".b1").addEventListener("click", hit1);
document.querySelector(".b2").addEventListener("click", hit2);
document.querySelector(".b3").addEventListener("click", hit3);
document.querySelector(".b4").addEventListener("click", hit4);
document.querySelector(".b5").addEventListener("click", hit5);
document.querySelector(".b6").addEventListener("click", hit6);
document.querySelector(".b7").addEventListener("click", hit7);
document.querySelector(".b8").addEventListener("click", hit8);
document.querySelector(".b9").addEventListener("click", hit9);

function check(){
    // for player 1
    if(checker_One[0] == checker_One[1] && checker_One[0] == checker_One[2]) {
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[3] == checker_One[4] && checker_One[3] == checker_One[5]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[6] == checker_One[7] && checker_One[6] == checker_One[8]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[0] == checker_One[3] && checker_One[0] == checker_One[6]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[1] == checker_One[4] && checker_One[1] == checker_One[7]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[2] == checker_One[5] && checker_One[2] == checker_One[8]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
       //diagonal
    if(checker_One[0] == checker_One[4] && checker_One[0] == checker_One[8]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    if(checker_One[2] == checker_One[4] && checker_One[2] == checker_One[6]){
        document.querySelector(".wonmsg").textContent = "Player 1 Won";
       }
    // player Two
    if(checker_Two[0] == checker_Two[1] && checker_Two[0] == checker_Two[2]) {
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[3] == checker_Two[4] && checker_Two[3] == checker_Two[5]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[6] == checker_Two[7] && checker_Two[6] == checker_Two[8]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[0] == checker_Two[3] && checker_Two[0] == checker_Two[6]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[1] == checker_Two[4] && checker_Two[1] == checker_Two[7]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[2] == checker_Two[5] && checker_Two[2] == checker_Two[8]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
       //diagonal
    if(checker_Two[0] == checker_Two[4] && checker_Two[0] == checker_Two[8]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }
    if(checker_Two[2] == checker_Two[4] && checker_Two[2] == checker_Two[6]){
        document.querySelector(".wonmsg").textContent = "Player 2 Won";
       }   
    };
