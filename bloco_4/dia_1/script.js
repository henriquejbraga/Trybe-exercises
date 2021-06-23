// Exercicio 1
let a = 20;
let b = 25;

console.log("Soma: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

// exercicio 2
let num1 = 10;
let num2 = 4;

if(num1 > num2){
  console.log("maior número é: " + num1);
}
else{
  console.log(" o maior é: " + num2);
}

// exercicio 3
let num1 = 5;
let num2 = 7;
let num3 = 10;

if(num1 > num2 && num1 > num3){
  console.log("numero a é maior");
}
else if(num2 > num1 && num2 > num3){
  console.log("numero b é o maior");
}
else{
  console.log("numero c é o maior");
}

// exercicio 4
let num1 = -100;
if(num1 < 0){
  console.log("negative");
}
else if(num1 > 0){
  console.log("positive");
}
else {
  console.log(zero);
}

// exercicio 5
let num1 = 20;
let num2 = 100;
let num3 = -80;

let total = num1 + num2 + num3;
let angulo = num1 > 0 && num2 > 0 & num3 > 0;

if(angulo){
  if(total === 180){
    console.log('true');
  }
  else{
    console.log("false");
  }
}
else{
  console.log("Erro: angulo invalido");
}

// exercicio 6
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

// exercicio 7

let nota = 65;
if(nota >100 && nota<0){
  console.log(erro)
}
else if(nota >= 90){
  console.log('A');
}
else if(nota >=80){
  console.log('B');
} 
else if(nota >=70){
  console.log('C');
}
else if(nota>=60){
  console.log('D');
}
else if(nota>=50){
  console.log('E');
}
else{
  console.log('F');
}