// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and

function filterNonUnique(array) {
  let modifiedArray = array.filter(function (item) {
    return array.indexOf(item) < array.lastIndexOf(item);
  });
  let finalArray = [];
  modifiedArray.forEach(function (item) {
    if (!finalArray.includes(item)) {
      finalArray.push(item);
    }
  });
  return finalArray;
}

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));
