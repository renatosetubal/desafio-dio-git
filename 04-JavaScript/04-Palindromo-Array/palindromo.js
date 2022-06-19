//1ª Solução
function verificaPalindromo(string) {
    if (!string) return "String inexistente!"; //Verifica se é uma string, se for continua, caso contrário para
    return string.split("").reverse().join("") === string;//compara se a palavra invertida tem o mesmo valor que a palavra normal. Se sim, é um palindromo.

}

//Solução 2
function verificaPalindromo2(string) {
    if (!string) return "String inexistente!";
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 -i]) {
            return false;
        }
    }
    return true;
}


console.log(verificaPalindromo2("abba"));