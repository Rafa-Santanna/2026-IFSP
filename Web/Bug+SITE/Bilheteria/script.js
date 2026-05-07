//LISTA QUE GUARDARS OS NOMES
let entrada = [];
function processarConvidados(){
let i = 0;
//CRIAÇÃO DAS VARIÁVEIS QUE SERÃO UTILIADAS DURANTE O CÓDIGO
let nome = document.getElementById("nomeConvidado").value;
let lista= document.getElementById("ListaNomes");
let mensagem= document.getElementById("mensagem");

//DEIXA A MENSAGEM SEM NADA
mensagem.innerHTML="";

//verifica se tem algo escrito no 
if(nome==""){
    mensagem.textContent="Digite um nome!"
    
}
//TESTA A CONDIÇÃO
if( nome=='Sair'){
   mensagem.innerHTML='Processamento encerrado!'
   return;
}
 //VERIFICA A LOTAÇÃO
if(entrada.length < 5){
    //ADICIONA NA LSITA
    entrada.push(nome);
    //CRIA O ITEM DA LISTA
    let item = document.createElement("li");
    //COLOCA O NOME NO ITEM
    item.textContent = nome;
    //ADICIONA NA UL
    lista.appendChild(item);

} else {

    mensagem.innerHTML = "Lotação esgotada!";

}

}
