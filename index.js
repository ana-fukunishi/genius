var walkingGame = [];
var playerGame = [];

// EventListener to start the game

playerTurn();

$(document).keypress(function(event){
        walkingGame.length = 0;
        playerGame.length = 0;
        startGameGenius();
});


// Starting the game - First and next step
function startGameGenius(){
    
    var nextPlay = Math.floor((Math.random() * 4) + 1);

    walkingGame.push(nextPlay)
    changeBigHead(walkingGame.length);
    whatColor(nextPlay);
    buttonAnimation(nextPlay);

}


function playerTurn (){
    // For para ativar animação e som ao clicar com o Mouse.
    //console.log("playerTurn");
   
    $(".btn").click(function(){
        
        var clickLetter = parseInt(this.innerHTML);

        playerGame.push(clickLetter);

        whatColor(clickLetter);
        buttonAnimation(clickLetter);
    
        rightOrWrong();
    });


    //Dificuldade para transf. letra em numero. fazer depois.
    // For para ativar animação e som ao pressionar teclas.
    // $(document).keypress(function(event){
    
    // var keyLetter = event.key;
    // console.log(keyLetter);

    // whatColor(keyLetter);
    // buttonAnimation(keyLetter);

    // });   
}
 
//Confere a array do jogador com a do jogo. Caso positivo, gera uma nova jogada. Caso negativo game over.
function rightOrWrong(){

    //console.log("rightOrWrong");
    //console.log(playerGame);
    //console.log(walkingGame);

    isCorrect = true;

        for(var i = 0; i < playerGame.length; i++){
 
            //console.log("for");
            //console.log(i);
            //console.log(walkingGame[i]);
            //console.log(playerGame[i]);
        
        if (walkingGame[i] === playerGame[i]){

            //console.log("=");

        } else {
            isCorrect = false;

        }
    }

    if(isCorrect){
        clearArrayPlayer();
    }else{
        document.querySelector("h1").innerHTML = "Game Over, press any key to restart.";
        walkingGame.length = 0;
        playerGame.length = 0;
    }
    return;     
}


//Após conferênciaa dos arrays e tudo correto. Limpar array do jogador e gerar próxima jogada.
function clearArrayPlayer (){

    if (walkingGame.length === playerGame.length){
        playerGame.length = 0;
        
        setTimeout(function(){
            startGameGenius();
        }, 550);

        
    } else{
        return;
    }



}

 


// Função para ativar o som de cada botão.
function whatColor(numberOrLetter){
    
    //console.log("whatColor");

    switch (numberOrLetter) {
        
        case 1:
        case "i": 
            var igreen = new Audio("sound/igreen.mp3");
            igreen.play();
            break;

        case 2: 
        case "o": 
            var ored = new Audio("sound/ored.mp3");
            ored.play();
            break;
       
        case 3: 
        case "k": 
            var kyellow = new Audio("sound/kyellow.mp3");
            kyellow.play();
            break;

        case 4: 
        case "l": 
            var lblue = new Audio("sound/lblue.mp3");
            lblue.play();
            break;

        default:
            var wrong = new Audio("sound/wrong.mp3");
            wrong.play();

    }
}

// Função para a animação
function buttonAnimation (buttonNumberOrLetter){
    
    //console.log("buttonAnimation");
    
    var activeButton = document.querySelector(".btn" + buttonNumberOrLetter);
    //console.log(activeButton);
    activeButton.classList.add('pressed');
    
    setTimeout(function(){
        activeButton.classList.remove('pressed');

    }, 200);

}




function changeBigHead (x){

        document.querySelector("h1").innerHTML = "Level " + (x);


}