//Criando um Objeto
let amigo = {
    nome:'josé',
    sexo:'M',
    peso: 85.4,
    engordar(p){ //Se não passar o Parâmetro p = 0.
        this.peso = this.peso + p;//this é uma palavra auto referência ao objeto
        console.log(this.peso);

    }

}
console.log(typeof amigo);
console.log(amigo);
console.log(amigo.peso);

//Chama a funcionalidade(o método, a função) do objeto amigo
amigo.engordar(2);//a minha própria variavel amigo(objeto amigo) tem funcionalidades dentro dela ou seja eu coloco funções(métodos) dentro de variaveis(objeto)
// console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`)
//Obs: A ECMA Script nova ela tem a permissão da criação de CLASSES p vc replicar objetos com a mesma características.
console.log('<br>');

//Chamando o método(a função) mas dando o console.log fora da função ou seja retornando p quem chamou...
//Criando um Objeto
let amigo2 = {
    nome:'josé',
    sexo:'M',
    peso: 85.4,
    engordar(p){ //Se não passar o Parâmetro p = 0.
        return this.peso = this.peso + p;//this é uma palavra auto referência ao objeto
        //aqui ele alterou a variavel o valor da variavel peso la de cima(peso:85.4 alterou p peso:87.4)
        
        

    }

}

//Chama a funcionalidade(o método, a função) do objeto amigo
console.log(amigo2.peso)
console.log(amigo2.engordar(2));
console.log(amigo2.nome);
console.log(amigo2.peso);//a função modificou o peso ou seja acrecentou 2 kilos no peso original.

