//Fase 1 - Malévola

function Malevola1(){

    while(true){
        var opcao
    opcao = prompt ("1- Decide projetar uma roca para distrair a garota. \n 2- Simplesmente desaparece entre as árvores.");

    if (opcao == 1){
        location.assign ('../gameover/gameover.html')

        alert ("A menina é muito lerdinha, acaba furando o dedo e desmaia.")
        break;
    }
    else if (opcao == 2){
        location.assign ('../malevola/fasemalevola2.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

//Fase 2 - Malévola

function Malevola2(){
    
    while(true){
        var opcao
    opcao = prompt ("1- Malévola sai correndo sem direção. \n 2- Empurra a menina e vaza.");

    if (opcao == 1){
        location.assign ('../malevola/fasemalevola3.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')

        alert ("Aurora cai, bate a cabeça e morre! Malévola nunca vai se perdoar...")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

//Fase 3 - Malévola

function Malevola3(){
    while(true){
        var opcao
    opcao = prompt ("1- Volta para a casa. \n 2- Bate nas fadinhas.");

    if (opcao == 1){
        location.assign ('../vitoria/vitoria.html')

        alert ("Sua caminhada não deu muito certo, mas pelo menos ninguém vai encher o seu saco.")
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/gameover.html')

        alert ("Apesar de serem chatas, as fadinhas não merecem isso e Malévola se arrepende depois.")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}