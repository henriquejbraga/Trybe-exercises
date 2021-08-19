const { encode, decode } = require('./encodeDecode.js');

describe('testa as funçoes encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Teste se encode e decode são funções', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a', 'b', 'c', 'd', 'e')).toEqual('1', '2', '3', '4', '5');
  })
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('a2gg')).toEqual('12gg');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', ()=> {
    expect(encode('trybe').length).toEqual(5);
})
});