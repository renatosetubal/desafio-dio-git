const pessoa1={ 
    nome:'Maria das Graças',
    idade:34
}
const pessoa2 = {
    nome:'Jamil e uma',
    idade:10
}
const cachorro ={
    nome:'Athena',
    idade: 1,
    Raca:'American Staffordshire'
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
//console.log(calculaIdade(cachorro,20)); Desta forma não funciona pois está passando um objeto junto ao parãmetro
console.log(calculaIdade.call(cachorro,20));
console.log(calculaIdade.apply(pessoa1,[50]));