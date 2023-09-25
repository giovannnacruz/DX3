function deseafio2(){
 
    var valores = document.querySelector('#valor').value;
    var [x , y, z ] = valores.split(' '); 
    var respostas = document.querySelector('#resposta');
if  (x > y && x < z||x < y && x > z){
   respostas.innerHTML=x;
}
   if (y > x && y < z || y > z && y < x){
       respostas.innerHTML=y;
   }
       if (z > y && z < x || z > x && z < y){
           respostas.innerHTML=z;
       }

}