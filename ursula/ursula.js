// Fase 1 - Ursula

function Ursula1(){

    while(true){
        var opcao
    opcao = prompt ("1- Desistir do concurso e tentar outro ano. \n 2- Engolir o choro e realizar o seu sonho.");

    if (opcao == 1){
        location.assign ('../gameover/gameover.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../ursula/faseursula2.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 2 - Ursula

function Ursula2(){

    while(true){
        var opcao
    opcao = prompt ("1- Meu ébano - Alcione. \n 2- Trem bala - Ana Vilela.");

    if (opcao == 1){
        location.assign ('../ursula/faseursula3.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 3 - Ursula

function Ursula3(){

    while(true){
        var opcao
    opcao = prompt ("1- Ursula deixa a raiva tomar conta de si e parte para cima de Ariel. \n 2- Agradece a todos e deixa a vingança para outra hora.");

    if (opcao == 1){
        location.assign ('../gameover/gameover.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../vitoria/vitoria.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}