const { add } = require('../app/index');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
