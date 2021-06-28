// exercicio 1
function verificaPalindrome(word){
  for(let i in word){
    if(word[i] != word[(word.length - 1) - i]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara')); 
console.log(verificaPalindrome('desenvolvimento')); 

// exercicio 2
function verificaIndiceMaior(numeros){
  let indiceMaior = 0;
  for(let indice in numeros){
    if(numeros[indiceMaior] < numeros[indice]){
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(verificaIndiceMaior([2, 3, 6, 7, 10, 1]));

// exercicio 3
function verificaIndiceMaior(numeros){
  let indiceMenor = 0;
  for(let indice in numeros){
    if(numeros[indiceMenor] > numeros[indice]){
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(verificaIndiceMaior([2, 3, 6, 7, 10, 1]));