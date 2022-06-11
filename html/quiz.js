var pergunta = 1;
var tempo = 20;
var timer;

function question(){
    pergunta = pergunta + 1;
    console.log("numero: ", pergunta);
    if(pergunta == 8){
        document.getElementById("respostas").style.display = "none";
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("relogio").style.display = "none";
        document.getElementById("fotoPergunta").style.display = "none";
        document.getElementById("formContainer").style.display = "block";
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

    document.getElementById("respostas").style.display = "grid";
    document.getElementById("pergunta").style.display = "flex";
    document.getElementById("startQuiz").style.display = "none";
}


function restartTimer(){
    timerOver();
    
    tempo = 20;

    timer = setInterval(updateTimer, 1000);

    updateTimer;
}