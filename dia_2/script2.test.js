const { getUserName } = require('./script2');


describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(1).then((user) => expect(user).toEqual('Mark'))
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
});