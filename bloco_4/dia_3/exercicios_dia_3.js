// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let simbolo = 'x';
let n = 5;
let espaço = '';

for(let i = 0; i < n; i+=1){
  espaço = espaço + simbolo;
}
for(let i = 0; i < n; i+= 1){
  console.log(espaço);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let simbolo = 'x';
let espaço = '';

for(let i = 0; i < n ;i +=1){
  espaço = simbolo + espaço;
  console.log(espaço);
}