//console.log("funcionando");
function trocaCor(opcao) {


    var campo = document.getElementsByTagName('h1')[0];
    switch (opcao) {
        case 0:
            campo.style.color = 'blue';
            break;
        case 1:
            campo.style.color = 'red';
            break;
        case 2:
            campo.style.color = 'pink';
            break;
    }

}