n1 = 0;
n2 = 0;

function recebeNumeros() {
    let texto = "";
    let resultado = 0;
    document.getElementById('txt_result').innerHTML = "";
    /*Recebendo o conteúdo já convertendo para números*/
    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Ditite o segundo número"));
    //Se os valores digitados não forem números, ele chamará o prompt novamente e 
    //informará que foi digitado valores inválidos.
    if (isNaN(n1) || isNaN(n2)) {
        alert("numero digitado invalido! Digite os números novamente");
        recebeNumeros();
        return false;
    } else {
        texto = `Os números ${n1} e ${n2} `;
       // ehIgual = verificaIgualdade(n1, n2);
       const ehIgual=n1==n2;
        if (ehIgual) {
            texto = texto + "são iguais. ";
        } else {
            texto = texto + "não são iguais. ";
        }
        resultado = calcula(n1, n2);
        texto = texto + `A soma dos dois números é ${resultado}, `;
        const ehMaiorDez = resultado >= 10;
        const ehMenorVinte = resultado <= 20;
        if (ehMaiorDez) {
            texto = texto + `que é maior que 10 e  `;
        } else {
            texto = texto + `que é menor que 10 e  `;
        }
        if (ehMenorVinte) {
            texto = texto + `é menor que 20.`;
        } else {
            texto = texto + `é maior que 20.`;
        }
    }


    // if (resultado < 20) {
    //     texto = texto + `é menor que 20.`;
    // } else {
    //     texto = texto + `é maior que 20.`;
    // }
    document.getElementById('txt_result').innerHTML = texto;
    // let opcao = parseInt(prompt("Deseja continuar? \n 1 - Continuar \n 2 - Encerrar"));
    // switch (opcao) {
    //     case 1: recebeNumeros();
    //         break;
    //     case 2: alert("Até mais!"); return false;
    //     default: return false;
    // }
// }
}
function calcula(n1, n2) {
    return n1 + n2;
}
// function verificaIgualdade(n1, n2) {
//     if (n1 === n2) {
//         return true;
//     } else {
//         return false;
//     }
// }


