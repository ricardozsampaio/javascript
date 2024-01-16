
function contar(){
    
    // var cont = document.getElementById('res').innerHTML;
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passos = document.getElementById('txtp');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert('Faltam dados');
        return;//Sai da função.

    } else {
        res.innerHTML = 'Contando...<br>'//esse <br> faz pular a liha.
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        //Não deixar o passo ser zero ou menor q zero, p não dar problema
        if (p <= 0){
            alert('Passo Inválido! Considero 1 passo');
            p = 1;
        }

        if (i < f){//Se o numero de inicio for Menor q o Maior
            //Contagem crescente
            for (var c = i; c <= f; c = c + p){//O ultimo termo pode: c += p
                res.innerHTML += `${c} \u{1f449}`;//Aqui esse + é p Concatenar.
                
    
            }
           
        } else {//Senao, Vou fazer o código de contar do Maior p o Menor
            //Contagem regressiva
            for (var c = i; c >= f; c = c - p){//O ultimo termo pode: c -= p
                res.innerHTML += `${c} \u{1f449}`;

            }

        }
        res.innerHTML += `\u{1f3c1}`;//Esse código do emotions está no site https://unicode.org/emoji/charts/full-emoji-list.html
        document.getElementById('txti').value = '';
        document.getElementById('txtf').value = '';
        document.getElementById('txtp').value = '';
        
    }
    
}