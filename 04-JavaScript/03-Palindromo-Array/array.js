/*Objetivo de trocar os itens pares*/

function changePares(arr) {
    if(!arr) return -1;
    if(!arr.length) return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log("Você já é zero!!!");
        } else if (arr[i] % 2 === 0) {

            console.log(`Substituindo ${arr[i]} por 0...`);
            arr[i]=0;
        }

    }
    return arr;
}

let arr = [1, 12, 13, 45, 52, 14];
let retorno=changePares(arr);
console.log(retorno);