//RAFAELLA DE SOUZA SANTANNA 213
let caixas = [1,2,3,4,5,6,7,8,9,10];
let lista=[]
for(let i=0; i<caixas.length;i++){
    let num= caixas[i]//num é igual cada indice da caixas
    if(num===5|| num===8){//verfica se o número é 5 ou 8 e pula eles
        continue
    }
    
    
    if (num===9) { // erro na 9
        console.log("Erro na caixa "+ num+"! Parando verificação.");
        break;
    }
lista.push(num)//Adiciona os números na lita


}
console.log(lista)
