const checkForSpam = function (message) {
  // твій код
  message = message.toLowerCase();

  console.log(message);

  if (message.includes('spam')) {
    return true;
  }

  if (message.includes('sale')) {
    return true;
  }

  return false;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
