function validaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Favor enviar os parâmetros!");
        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo objeto!');
        if (typeof num !== 'number') throw new TypeError('O número passado não é válido');
        if (arr.length !== num) throw new RangeError("Tamanho inválido!");
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um erro de referência");
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        }else if(e instanceof TypeError){
            console.log("Este erro é erro de tipo");
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        }else if(e instanceof RangeError){
            console.log("Este erro é de tamanho de array");
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        }else{
           // console.log("Tipo de erro não esperado: "+ e);
        }
    }
}
console.log(validaArray(["r","e","t"],4));