var Player1_score = 0;
var Player2_score  = 0;

Player1_user = localStorage.getItem("Player1");
Player2_user =  localStorage.getItem("Player2");
console.log(Player1_user);
document.getElementById("Player_1_name").innerHTML = Player1_user;
document.getElementById("Player_2_name").innerHTML = Player2_user;

document.getElementById("player_1_score").innerHTML = Player1_score;
document.getElementById("player_2_score").innerHTML = Player2_score;


document.getElementById("Player_question").innerHTML = "Question turn: " +  Player1_user;

document.getElementById("Player_answer").innerHTML = "Answer turn: " +  Player2_user;