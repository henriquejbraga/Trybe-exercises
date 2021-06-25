// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let simbolo = '*';
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
let simbolo = '*';
let espaço = '';

for(let i = 0; i < n ;i +=1){
  espaço = simbolo + espaço;
  console.log(espaço);
}

// 3- Agora inverta o lado do triângulo.

let n = 5;
let simbolo = '*';
let espaço = '';
let base = n;

for (let i = 0; i < n; i +=1){
  for(let j = 0; j <= n; j +=1){
    if(j < base){
      espaço = espaço + ' ';
    } else{
      espaço = espaço + simbolo;
    }
  }
  console.log(espaço);
  espaço = '';
  base -= 1;
}