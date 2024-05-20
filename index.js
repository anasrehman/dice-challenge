var player1 = Math.floor(Math.random()*6 )+1; // set to random 1-6 dices to left side of image

var randomDiceImage = "dice" + player1 + ".png";// dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // /images/dice1.png to /images/dice6.png

var image1= document.querySelectorAll("img")[0];  // pick left image side

image1.setAttribute("src",randomImageSource);//

var player2 = Math.floor(Math.random()*6 )+1;//  set to random 1-6 dices to right side of image

var randomImageSource2 = "images/dice" + player2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(player1 > player2){
    document.querySelector("h1").innerHTML="Player1 Wins!!😛 ";
} else if(player2 > player1){
    document.querySelector("h1").innerHTML="Player2 Wins!!😛 ";
} else{
    document.querySelector("h1").innerHTML=" Draws! 😐";
}

