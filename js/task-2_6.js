let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число для сумування:');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Було введено не число, спробуйте ще раз');
    continue;
  }

  numbers.push(input);
}

for (const number of numbers) {
  total += number;
}
console.log(`Загальна сума чисел дорівнює: ${total}`);
