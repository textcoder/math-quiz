
var score = 0;
function update(){
    score = score+1;
    document.getElementById("updateScore").innerHTML="my score " + score;
}

function save(){
    localStorage.setItem("myScore", score);
}
function nextPage(){
    window.location="activity_2.html";

}

var Player_1_username=" ";

function addUser(){

    window.location="game_page.html";
    Player_1_username = document.getElementById("Player1Username").value;
    localStorage.setItem("Player1", Player_1_username);
    Player_2_username = document.getElementById("Player2Username").value;
    localStorage.setItem("Player2", Player_2_username);
}

