let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// exercicio 1
// console.log('Bem vinda,', info.personagem);

// exercicio 2
info.recorrente = 'Sim';

// console.log(info);

// exercicio 3
// for(let mens in info){
//   console.log(mens);
// }
// exercicio 4
// for(let chaves in info){
//   console.log(info[chaves]);
// }
// exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for(let chaves in info, info2){
  if (
    chaves === 'recorrente' &&
    info[chaves] === 'Sim' &&
    info2[chaves] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[chaves] + ' e ' + info2[chaves]);
  }
}
