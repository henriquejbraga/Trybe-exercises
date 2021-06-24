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
