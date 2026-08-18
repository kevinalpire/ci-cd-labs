const { suma } = require('./math');

test('suma 1 + 2 y devuelve 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma -1 + 1 y devuelve 0', () => {
  expect(suma(-1, 1)).toBe(0);
});
