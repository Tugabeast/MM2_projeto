var pergunta = 1;
var tempo = 20;
var certas = 0;
var erradas = 0;
var timer;

function question(){
    pergunta = pergunta + 1;
    switch(pergunta){
        case 2:
            document.getElementById("quest").innerHTML = "2- O lixo marinho é composto principalmente por…";
            document.getElementById("rep1").innerHTML = "Papel/cartão";
            document.getElementById("rep2").innerHTML = "Vidro";
            document.getElementById("rep3").innerHTML = "Metal";
            document.getElementById("rep4").innerHTML = "Plástico";
            document.getElementById("fotoPergunta").src = "QuizImages/pergunta2.jpg"
            break;
        case 3:
            document.getElementById("quest").innerHTML = "3- Qual a principal consequência da poluição dos oceanos?";
            document.getElementById("rep1").innerHTML = "Destruição de habitats e morte de animais marinhos";
            document.getElementById("rep2").innerHTML = "Diminuição da temperatura da água";
            document.getElementById("rep3").innerHTML = "Aumento do número de peixes junto à praia";
            document.getElementById("rep4").innerHTML = "Correntes mais fortes ";
            document.getElementById("fotoPergunta").src = "QuizImages/pergunta3.jpg"
            break;
        case 4:
            document.getElementById("quest").innerHTML = "4- O que acontece com o lixo plástico ao longo do tempo?";                    
            document.getElementById("rep1").innerHTML = "Decompõe-se e desaparece na água";
            document.getElementById("rep2").innerHTML = "Enterra-se na areia quando chega ao fundo do mar";
            document.getElementById("rep3").innerHTML = "Não desaparece, parte-se em pedaços pequenos";
            document.getElementById("rep4").innerHTML = "É usado como casa pelos peixes";
            break;
        case 5:
            document.getElementById("quest").innerHTML = "5- Por que é que o plástico é perigoso para a vida marinha?";
            document.getElementById("rep1").innerHTML = "Os animais confundem-no com comida e não conseguem ingeri-lo";
            document.getElementById("rep2").innerHTML = "Os animais podem ficar presos, o que lhes dificulta a natação e magoa os membros";
            document.getElementById("rep3").innerHTML = "Os produtos químicos do plástico destroem o habitat";
            document.getElementById("rep4").innerHTML = "Todas as anteriores";
            break;
        case 6:
            document.getElementById("quest").innerHTML = "6- Qual é uma das outras formas de poluição marinha que existem para além do plástico?";
            document.getElementById("rep1").innerHTML = "Fogueiras";
            document.getElementById("rep2").innerHTML = "Esgotos que levam ao mar";
            document.getElementById("rep3").innerHTML = "Fumo das fábricas";
            document.getElementById("rep4").innerHTML = "Gazes dos carros";
            document.getElementById("fotoPergunta").src = "QuizImages/pergunta6.jpeg"
            break;
        case 7:
            document.getElementById("quest").innerHTML = "7- O que podes fazer para salvar os oceanos?";
            document.getElementById("rep1").innerHTML = "Ajudar a limpar as praias";
            document.getElementById("rep2").innerHTML = "Reciclar";
            document.getElementById("rep3").innerHTML = "Reduzir o consumo de plástico";
            document.getElementById("rep4").innerHTML = "Todas as anteriores";
            break;
    }
    if(pergunta == 8){
        document.getElementById("respostas").style.display = "none";
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("relogio").style.display = "none";
        document.getElementById("fotoPergunta").style.display = "none";
        document.getElementById("score").style.display = "block";
        document.getElementById("final").style.display = "block";
    }
}


function updateTimer(){
    tempo = tempo -1;
    if(tempo >= 0){
        document.getElementById("relogio").innerHTML = tempo;
    }else{
        timerOver();
    }
}

function timerOver(){
    clearInterval(timer);
}


function start(){
    timer = setInterval(updateTimer, 1000);

    updateTimer();
    document.getElementById("relogio").style.display = "block";
    document.getElementById("fotoPergunta").style.display = "block";
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


function resp(numero){
    console.log(numero);
    switch(pergunta){
        case 1:
            if(numero == 2){
                certas = certas +1;
            }
            break;
        case 2: 
            if(numero == 4){
                certas = certas +1;
            }
            break;
        case 3: 
            if(numero == 1){
                certas = certas +1;
            }
            break;
        case 4: 
            if(numero == 3){
                certas = certas +1;
            }
            break;
        case 5: 
            if(numero == 4){
                certas = certas +1;
            }
            break;
        case 6: 
            if(numero == 2){
                certas = certas +1;
            }
            break;
        case 7: 
            if(numero == 4){
                certas = certas +1;
            }
            break;
    }
    console.log("certas: " + certas);
    console.log("erradas: " + erradas);
    document.getElementById("respCerta").innerHTML = certas;
    document.getElementById("respErrada").innerHTML = erradas;
}