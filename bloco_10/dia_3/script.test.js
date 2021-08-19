const numero = require('./script');

describe('test dos numeros aleatorios', () => {
  it('Utilizando o mock, defina o retorno padrão como 10.', () => {
    numero.numeroAleatorio = jest.fn().mockReturnValue(10);

    expect(numero.numeroAleatorio()).toBe(10);
    expect(numero.numeroAleatorio).toHaveBeenCalled();
    expect(numero.numeroAleatorio).toHaveBeenCalledTimes(1);
  })

  it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros divisao", () => {
    numero.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(numero.numeroAleatorio(10, 2)).toBe(5);
    expect(numero.numeroAleatorio).toHaveBeenCalled();
    expect(numero.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(numero.numeroAleatorio).toHaveBeenCalledWith(10, 2);
  });

  it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros multiplicaçao", () => {
    numero.numeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(numero.numeroAleatorio(10, 2, 2)).toBe(40);
    expect(numero.numeroAleatorio).toHaveBeenCalled();
    expect(numero.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(numero.numeroAleatorio).toHaveBeenCalledWith(10, 2, 2);
  });

  it("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    numero.numeroAleatorio.mockReset();
    expect(numero.numeroAleatorio).toHaveBeenCalledTimes(0);

    numero.numeroAleatorio.mockImplementation(a => a * 2);

    expect(numero.numeroAleatorio(5)).toBe(10);
    expect(numero.numeroAleatorio).toHaveBeenCalled();
    expect(numero.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(numero.numeroAleatorio).toHaveBeenCalledWith(5);
  });
})