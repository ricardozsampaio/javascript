
function parImpar(){
    var num = document.getElementById('txtn');//caixa de texto txtn
    var resposta2 = document.getElementById('res2');//div res2
    if (num.value.length == 0){
        alert("Por favor, digite um número")
    } else if (num.value % 2 == 0) { //Se o numero digitado(num) dividido por 2 der um resto(%) zero o número digitado é Par.
        resposta2.innerHTML = 'O Número digitado é Par ' + num.value;

    } else {
        resposta2.innerHTML = 'O Número digitado é Impar ' + num.value;
    }
       
}

////////////////////////////////////////////////////
//Outro modo - Função Par ou Impar c Retorno(return). 
function parimp(n){

    if (num.value.length == 0){
        alert('Por favor, digite um número');
    
    } else if (n % 2 == 0){
        return 'Par';

    } else {
        return 'Impar';

    }
}

var num = document.getElementById('txtn');
var resposta2 = document.getElementById('res2');//div res2
document.getElementById('btn2').onclick = function(){
    var res = parimp(num.value);//Chama a função parimp() passando o parâmetro.
    resposta2.innerHTML = 'O número é ' + res;
    num.value = "";
    
}


