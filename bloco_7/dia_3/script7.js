const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (conta) => {
  let output = [];
  for (let index in conta) {
    output.push(conta[index].length);
  }
  return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);