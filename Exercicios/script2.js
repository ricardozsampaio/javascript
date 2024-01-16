
function verificar(){
    alert('oi');
    var data = new Date();
    var ano = data.getUTCFullYear();//Pegando o Ano atual. do sistema.
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if (fano.value.length == 0 || fano.value > ano){//
        alert('Verifique o dados e tente novamente');
    }
    else {
        alert('Tudo ok!');
        var fsex = document.getElementsByName('radsex');//pegando os 2 botões maculino e feminino. o primeiro botao(masculino)será fsex[0] e o segundo botão(feminino)será fsex[1].
        var idade = ano - Number(fano.value);//idade é o ano do sistema(ano atual)  - o ano digitado pelo usuário
        var genero = '';
        
        var img = document.createElement('img');//Cria dinamicamente um elemento img.
        img.setAttribute('id', 'foto');

        //Botaão selecionado Masculino
        if (fsex[0].checked){ //mesmo q fsex[0].checked = true
            genero = 'Homem'; 
            if(idade >= 0 && idade <10){
                //criança
                alert('Criança');
                img.setAttribute('src', 'img/bebeHomem.png');
            } 


        //Botão selecionado Feminino
        } else if (fsex[1].checked) { //mesmo q fsex[0].checked = true
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                alert('Criança');
                img.setAttribute('src', 'img/bebemulher.png');
               
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. ${'<br>'}`;  //Template String
        //res.innerHTML = 'Detectamos' + genero + 'com' + idade + 'anos' + '<br>';  - Concatenando
        
        // res.style.textAlign = 'center'; - Se quisesse alinha via JS.
        res.appendChild(img);//Adcionando um elemento. O elemento img.

    }
   

}