const createPerson = (name, age) => {
  const newPerson = {
    name: name,
    age: age,
  };
  return newPerson;
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  return person.age > 65;
};

const getAges = (people) => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(index => index.name === name);
};

const findHondas = (cars) => {
  return cars.filter(honda => honda.manufacturer === 'Honda');
};

const averageAge = (people) => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((a, b) => b += a);
  return sum / ages.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: (name) => {
      return `Hi ${name}, my name is ${person.name} and I am ${person.age}!`;
    },
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
