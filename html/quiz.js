var pergunta = 1;
var tempo = 20;
var timer;

function question(){
    pergunta = pergunta + 1;
    console.log("numero: ", pergunta);
    if(pergunta == 8){
        console.log("acabou");
    }
}


function updateTimer(){
    tempo = tempo -1;
    if(tempo >= 0){
        document.getElementById("relogio").innerHTML = tempo;
    }else{
        console.log("acabou");
        timerOver();
    }
}

function timerOver(){
    clearInterval(timer);
}


function start(){
    timer = setInterval(updateTimer, 1000);

    updateTimer();
}


function restartTimer(){
    timerOver();
    
    tempo = 20;

    timer = setInterval(updateTimer, 1000);

    updateTimer;
}