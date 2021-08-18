// Fase 1 - Rainha Má

function Rainha1(){

    while(true){
        var opcao
    opcao = prompt ("1- Aceita ir na Mary Kay só para dar uma olhadinha. \n 2- Assume que está falida e vai até a loja Produtos Ivone.");

    if (opcao == 1){
        location.assign ('../rainhama/faserainha2.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 2 - Rainha Má

function Rainha2(){

    while(true){
        var opcao
    opcao = prompt ("1- Grimhilde pega os produtos e paga rapidamente. \n 2- Desiste e sai de fininho.");

    if (opcao == 1){
        location.assign ('../rainhama/faserainha3.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 3 - Rainha Má

function Rainha3(){

    while(true){
        var opcao
    opcao = prompt ("1- Sai correndo sem pagar e com os seus produtos. \n 2- Grimhilde pega os produtos e paga rapidamente.");

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