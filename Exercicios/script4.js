
function tabuada(){
    var num = document.getElementById('txtn');//caixa de texto txtn
    var tab = document.getElementById('seltab');//select seltab
    var resposta2 = document.getElementById('res2');//div res2
    if (num.value.length == 0){
        alert("Por favor, digite um número")
    } else {
        tab.innerHTML = '';//limpa o selector
        var n = Number(num.value);
        var c = 1;
        while (c <= 10){
            var item = document.createElement('option');//cria um elemento option dinamicamente
            item.text = `${n} x ${c} = ${n * c}`; //item.text recebe a Multiplicação da tabuada ou seja escreve no option(item.text) do select.
            tab.appendChild(item);//posiciona a multiplicação(os dados)dentro do option do select

            // alert(n + ' x ' + c + ' =' + n * c);

            //FAZER COM DIV
            resposta2.innerHTML += n + 'x' + c + '= ' + n * c + " ";//concatenação
            c++;
         }
       
    }
    
    //Criando um parágrafo dinamicamente
    var novoElement = document.createElement('p');//cria o parágrafro
    novoElement.appendChild(document.createTextNode('Parágrafro criado dinamicamente na div res3'));//escreve no parágrafro
    document.getElementById('res3').appendChild(novoElement);//posiciona o paragrafro dentro da div res3
    
   
    
}