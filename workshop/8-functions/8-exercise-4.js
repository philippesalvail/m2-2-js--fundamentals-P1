// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {
  return array.includes(item.toLowerCase());
}

// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];
console.log(itemIsPresent(myArray, "funKy"));
console.log(itemIsPresent(myArray, "elephant"));
