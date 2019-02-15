const getNthElement = (index, array) => {
  const element = index - array.length;
  if (index < array.length) {
    return array[index];
  }
  return array[element];
};

const arrayToCSVString = (array) => {
  return array.toString();
};

const csvStringToArray = (string) => {
  return string.split([","]);
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(a => a.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  const Strjoin = strings.join(",");
  const Strsplit2 = Strjoin.split("");
  const reverseString = Strsplit2.reverse();
  const joinString = reverseString.join("");
  const array = joinString.split(",");
  const arrayReverse = array.reverse();
  return arrayReverse;
};

const onlyEven = (numbers) => {
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(a => a !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  const vowels = /^[aeiou]/i;
  const results = strings.filter(str => vowels.test(str));
  return results;
};

const removeSpaces = (string) => {
  return string = string.replace(/\s+/g,'');
};

const sumNumbers = (numbers) => {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }    
  return sum;
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
