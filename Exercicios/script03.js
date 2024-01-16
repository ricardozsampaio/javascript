// OBS: O querySelector é igual ao document.getElementById('fnum');
// OBS: O querySelector é igual ao document.getElementById('flista');
// OBS: O querySelector é igual ao document.getElementById('res');
var num = document.querySelector('input#fnum');
var lista = document.querySelector('select#flista');
var res = document.querySelector('div#res');
var valores = []; //array/vetor vazio - utilizaremos p analisar os dados.

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;

    } else {

        return false;
    }
}

function inLIsta(n, l){
    if(l.indexOf(Number(n)) != -1){  //o -1 indica q o valor não foi encontrado na lista
        return true;//retorna true se o numero digitado ESTIVER NO ARRAY

    } else {

        return false;
    }
}

function adcionar(){
    if(isNumero(num.value) && !inLIsta(num.value, valores)){
        //só vem p cá se o n digitado estiver entre 0 e 100  AND  o n digitado não estiver no array
        //os valores serão colocados dentro da lista(select) e tb dentro do array valores
        alert('tudo ok');
        valores.push(Number(num.value));//adciona no array o q vc digitou no input#fnum
        //adcionando os numeros no Select.  P isso temos q criar um option.
        let item = document.createElement('option');//cria um dinâmicamente um elemento option
        item.text = `Valor ${num.value} adcionado`;//escreve no elemento option na lista abaixo
        lista.appendChild(item);//lista é o elemento Select


    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();

}

function finalizar(){
    if (valores.length == 0){ //se o vetor valores estiver vazio
        window.alert('Adcione valores antes de finalizar')

    } else {
        //PRIMEIRO
        //mostrar na div res o numero total de cadastro
        let total = valores.length;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} númeors cadastrados</p>`;

        //SEGUNDO
        //Analisar e mostrar o Maior e Menor número
        //p eu analisar o maior e o menor numero eu tenho q começar do primeiro(valores[0]) e ir varrendo todos os outros
        //Quando eu analiso o primeiro, no momento eu não tenho nem maior nem menor q ele ok?  assim o maior e o menor numero é ele quando eu começar.
        //Então vamos fazer o seguinte:
        let maior = valores[0];//O maior valor é o primeiro
        let menor = valores[0];//O menor valor tb é o primeiro
        //let soma = 0; A soma poderia entrar aqui.
        for (let pos = 0; pos < valores.length; pos++){
            //soma += valores[pos]; A soma poderia entrar aqui
            if (valores[pos] > maior){
                maior = valores[pos];//maior valor passa a ser valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos];//menor passa a ser valores[pos]
            }
        }
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        //TERCEIRO 
        //A Soma e a Média dos números
        //SOMA
        let soma = 0;
        for (let i = 0; i < valores.length; i++){
            soma = soma + valores[i];//ao invéz de fazer esse outro for poderia por essa linha p somar no for de cima após a linha 67;
                                     //  Assim: soma = soma + valores[pos];

        }
        //MÉDIA
        let media = soma / valores.length;

        res.innerHTML += `<p>A soma dos números é ${soma}</p>`;
        res.innerHTML += `<p>A média dos números é ${media}</p>`


    }
}