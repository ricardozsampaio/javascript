
function carregar(){
    var msg = document.getElementById('msg');//div no html
    var img = document.getElementById('imagem');//imagem no html
    var data = new Date();
    var hora = data.getHours();//Hora atual

    //div no html
    msg.innerHTML = `Agora são ${hora} horas`;
    msg.style.border = 'solid 1px black';
    msg.style.background = 'gray'
    msg.style.backgroundColor = 'red'
    msg.style.marginBottom = '15px'
    msg.style.padding = '10px'
    msg.style.color = 'white'
    

    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'img/manhapeq.png';//imagem no html
        document.body.style.background = 'gray';

    } else if (hora >= 12 && hora < 18){
        //boa tarde!
        img.src = 'img/tardepeq.png';//imagem no html
        document.body.style.background = 'blue';

    } else {
        //boa noite!
        img.src = 'img/noitepeq.png';//imagem no html
        document.body.style.background = 'black';
    }


}