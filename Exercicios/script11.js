
btn1.onclick = somar;
function somar(){
    
    //pega as caixas(inputss) completas. e a div de resposta res. pondo em um obj(variavel)
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res');
    //pega os values das caixas e já transforma-os em Numbers.
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var soma = n1 + n2;//soma os valores
    res.innerHTML = soma;//Mostra os valores na div res.
    // document.getElementById('res').innerHTML = soma;

  

}