const sum = require('./testes');

describe('sum', () => {
  test('4 mais 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test("o mais 0 é 0", () => {
    expect(sum(0,0)).toBe(0);
  });
  test('Teste se a função sum lança um erro quando os parâmetros sao uma string', () => {
    expect(() => { sum(4,'5');}).toThrow()});
    test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
      expect(() => { sum(4,'5');}).toThrow("parameters must be numbers")});



});
