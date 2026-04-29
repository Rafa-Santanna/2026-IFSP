//MESMO QUE O DESAFIO 1 SÓ QUE USANDO DO..WHILE
//RAFAELLA DE SOUZA SANTANNA 213
let entrada=["Ana", 'José', "Rafaella", "Maria","Jonas", "André", "SAIR"] //lista com o nome das pessoas se trocarmos o SAIR de lugar ele para antes 
let lista =[];
let i=0;

do{//executa pelo menos uma vz antes de ver  condição do while
    console.log("Digite o nome: ");// pergunta o nome
    let nome= entrada[i];// As respostas são essas
    console.log(nome)

    if (nome=="SAIR"){
        console.log("FINALIZADO")
        break;
    }
    lista.push(nome)
    i++
} while(i < entrada.length && lista.length <5){
    if (lista.length===5){
    console.log("Já atingiu o limite de pessoas!")
}
console.log("Lista: ", lista)
}