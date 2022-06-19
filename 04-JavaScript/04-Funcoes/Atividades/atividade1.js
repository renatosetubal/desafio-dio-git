const alunos=[
    {
        nome:'Renato Setúbal',
        nota:10,
        curso: 'Bacharel Teologia',
    },
    {
        nome:'José das Couves',
        nota:6,
        curso: 'Bacharel Direito',
    },
    {
        nome:'Maria Madalena',
        nota:3,
        curso: 'Bacharel em Adminstração',
    },
];


function ap(arr, media){
  let aprovados=[];
    for( let i=0; i<arr.length;i++){
       const {nota, nome}=arr[i]; //Object destructing
       if(nota >= media){
        aprovados.push(nome);
       }
   }
   return aprovados;
}

console.log(ap(alunos,5));