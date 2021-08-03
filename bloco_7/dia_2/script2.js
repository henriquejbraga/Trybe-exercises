const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const turno = (obj, key, value) => {
//   obj[key] = value;
// };
// turno(lesson2, 'turno', 'manha');
// console.log(lesson2);

// const key = (obj) => Object.keys(obj);

// console.log(key(lesson1));

// const tamanho = (obj) => Object.keys(obj).length;
// console.log(tamanho(lesson2));

// const valores = (obj) => Object.values(obj);
// console.log(valores(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});

console.log(allLessons);

const estudantes = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for( let index in array) {
    total = total + obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(estudantes(allLessons));


const pegaValor = (obj, number) => Object.values(obj)[number];
console.log(pegaValor(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));