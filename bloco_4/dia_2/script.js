// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i]);
}
// exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for(let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}
console.log(soma);
// exercico 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for(let i = 0; i < numbers.length; i+= 1){
  soma += numbers[i];
}
console.log((soma)/(numbers.length));
// exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for(let i = 0; i < numbers.length; i+= 1){
  soma += numbers[i];
}
if((soma)/(numbers.length) > 20){
  console.log("valor maior que 20");
}
else{
  console.log('valor menor ou igual a 20');
}
// exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];

for(let i = 1; i < numbers.length; i += 1){
  if(numbers[i] > maiorValor){
    maiorValor = numbers[i];
  }
}
console.log (maiorValor);
// exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = 0;

for(let i = 0; i < numbers.length; i+= 1){
  if(numbers[i] %2 !==0 ){
    valorImpar += 1;
  }
  }
if( valorImpar === 0){
  console.log('nenhum valor impar encotrado');
}
else {
  console.log(valorImpar);
}
// exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for(let i = 1; i < numbers.length; i += 1){
  if(numbers[i] < menorValor){
    menorValor = numbers[i];
  }
}
console.log (menorValor);
// exercicio 8
let numbers = [];

for (let i = 1; i <= 25; i += 1){
  numbers.push(i);
}

// exercicio 9
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for (let i = 0; i < 25; i += 1){
  console.log(numbers[i] / 2);
}

