const formatString = function (string) {
  // твій код
  if (string.length < 40) {
    // console.log('оригінальний рядок');
    return string;
  }
  const stringCut = string.slice(0, 40) + '...';
  //   console.log('форматований рядок');
  return stringCut;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// повернеться форматований рядок
