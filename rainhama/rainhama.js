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

        alert("A rainha JAMAIS iria assumir que está falida.")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 2 - Rainha Má

function Rainha2(){

    while(true){
        var opcao
    opcao = prompt ("1- Grimhilde disfarça e escolhe seus produtos. \n 2- Desiste e sai de fininho.");

    if (opcao == 1){
        location.assign ('../rainhama/faserainha3.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')

        alert("Não dá pra ficar sem os produtos, aliás, sua pele está começando a dar sinais da idade.")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 3 - Rainha Má

function Rainha3(){

    while(true){
        var opcao
    opcao = prompt ("1- Sai correndo sem pagar e com os seus produtos. \n 2- Grimhilde pega os produtos, tenta pagar rapidamente e vaza.");

    if (opcao == 1){
        location.assign ('../vitoria/vitoria.html')

        alert("Infelizmente (ou não), a loja ficou no preju, mas ela conseguiu seus produtinhos.")
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')

        alert("Não deu tempo de pagar e seu disfarce foi por água abaixo...")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}