const { calc } = require('../index');

describe('calc func should accept an object and return a integer', () => {
  it('should return a positive integer', () => {
    const expected = 2134;
    expect(
      calc({
        one: {
          price: 287,
          qty: 5,
        },
        two: {
          price: 233,
          qty: 3,
        },
      }),
    ).to.equal(expected);
  });
  it('should return a positive integer with trailing 0s', () => {
    const expected = 20000;
    expect(
      calc({
        one: {
          price: 10000,
          qty: 2,
        },
      }),
    ).to.equal(expected);
  });
});
