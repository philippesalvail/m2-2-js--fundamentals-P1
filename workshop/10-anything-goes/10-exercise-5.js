// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

// write your loop here...

for (i = 100; i < 1000; i++) {
  let num = i.toString().split("");
  let evaluatedNum =
    Math.pow(num[0], 3) + Math.pow(num[1], 3) + Math.pow(num[2], 3);
  if (evaluatedNum === i) {
    armstrongNumbers.push(evaluatedNum);
  }
}
console.log(armstrongNumbers);
