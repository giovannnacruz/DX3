function Jogo(){
    const valorA = document.querySelector('#h1').value; 
    const valorB= document.querySelector('#h2').value;
    const valorC = document.querySelector('#h3').value; 
    const ganhador= document.querySelector('#h4');           



if (valorA==valorB && valorA != valorC ) {
ganhador.innerHTML = "Clarinha ganhou" ;
}
if (valorB==valorC&& valorA != valorC ) {
ganhador.innerHTML = "Alice ganhou" ;
}
if (valorA==valorC && valorA != valorB) {
ganhador.innerHTML = "Betinho ganhou" ;
}
if (valorA==valorC && valorA == valorB) {
ganhador.innerHTML = "Empate" ;
}

}