function desafio1(){
    var valores = document.querySelector('#id').value;
    var [x, y] = valores.split(' ').map(Number);
    var resposta = document.querySelector('#resposta');

    if(x >= 0 && x <= 432 && y >= 0 && y <= 468){
        resposta.innerHTML="Bola dentro ✔";
    }
    else{
        resposta.innerHTML="Bola fora ❌";
    }
    
}

