/* coding examples */
const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Said', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
  log(name);
});

const name = 'Marian';
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
  log(letter);
});

const addNumbers = function(n1, n2, n3) {
  return n1 + n2 + n3;
}

const numbers = [1,5,19];

//const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
const addition = addNumbers(...numbers);

log(addition);
