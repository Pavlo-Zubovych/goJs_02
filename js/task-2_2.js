const calculateEngravingPrice = function (message, pricePerWord) {
  // твій код
  const massageArray = message.split(' ');
  const cost = massageArray.length * pricePerWord;
  console.log(message);
  return cost;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
); // 120
