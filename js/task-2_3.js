const findLongestWord = function (string) {
  // твій код
  const arrayWords = string.split(' ');

  let longestWord = arrayWords[0];

  for (let i = 1; i < arrayWords.length; i++) {
    if (longestWord.length < arrayWords[i].length) {
      longestWord = arrayWords[i];
    }
  }

  //   console.log(string);
  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
