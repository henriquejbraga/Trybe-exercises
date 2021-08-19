const uppercase = require('./script');

it('que transforma as letras de uma palavra em letras maiúsculas. ', (done) => {
  uppercase('test', (string) => {
    try {
      expect(string).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});