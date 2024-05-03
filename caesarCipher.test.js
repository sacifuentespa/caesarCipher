const caesarCipher = require('./caesarCipher');

test('"hola bola" should be "ovsh ivsh"', () => {
    expect(caesarCipher("hola bola", 7)).toEqual("ovsh ivsh");
  });

test('"Ave Maria ome!" "Kfo Wkbsk ywo!"', () => {
  expect(caesarCipher("Ave Maria ome!", 10)).toEqual("Kfo Wkbsk ywo!");
});