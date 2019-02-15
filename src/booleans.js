const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return a !== b;
};

const truthiness = (a) => {
  return !!a;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  return a === parseFloat(a) && !!(a % 2);
};

const isEven = (a) => {
  return a == parseFloat(a) && !(a % 2);
};

const isSquare = (a) => {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  return char.charAt(0) === string.charAt(0);
};

const containsVowels = (string) => {
  return string.includes('O') || string.includes('a');
};

const isLowerCase = (string) => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
