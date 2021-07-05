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

// exercicio 4
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// exercicio 5
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

// exercicio 6
function somaTodosNumeros(numeros) {
  let total = 0;
  for (let i = 1; i <= numeros; i += 1) {
    total = total + i;
  }
  return total;
}
console.log(somaTodosNumeros(5)); 

// exercicio 7
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be')); 
console.log(verificaFimPalavra('joaofernando', 'fernan')); 