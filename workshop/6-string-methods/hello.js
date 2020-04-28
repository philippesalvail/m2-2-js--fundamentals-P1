const smartGuy = "Rick Sanchez";
const rickSaying = "wubba lubba dub dub";
const grandson = "Morty Antoine Smith";
const enemies =
  "Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova";
const alternateRicks =
  "Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137";
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  "summer",
  "bacon",
  "scary",
  "intergalactic",
  "jerry",
  "morty",
  "beth",
  "family",
];

const mortyNamesArray = grandson.split(" ");
const numberOfNames = mortyNamesArray.length;
console.log(`A1) Morty has ${numberOfNames} names`);

// Q2
// Convert the alternateRicks string to an array, so that each name ("Simple
// Rick") is an element in that array. Log that array to the console.

let newAlternateRicks = alternateRicks.split(", ");
console.log(newAlternateRicks);

// HINT: There are multiple ways to solve this one. Maybe try a `for` loop!
console.log("number of ricks: ", newAlternateRicks.length);

console.log("number of characters: ", rickSaying.replace(/ /g, "").length);

console.log("move morty's middle name: ");

let modifiedMortyName = grandson.replace("Antoine ", "");
console.log("Modified name: ", modifiedMortyName);

console.log("Enemy list: ", enemies);

let modifiedEnemies = enemies.replace("Scary Terry, ", "");
console.log("Modified enemy list: ", modifiedEnemies);

let secretRevealed = secret;
for (let i = 0; i < notCode.length; i++) {
  secretRevealed = secretRevealed.replace(notCode[i], "");
}
console.log("Secret revealed: ", secretRevealed);

function max(num1, num2) {
  return Math.max(num1, num2);
}

// Call the function
console.log("Maximum number: ", max(55, 43));

function maxValue() {
  return Math.max.apply(Math, arguments);
}
console.log("First Max: ", maxValue(4, 2));
console.log("Second Max: ", maxValue(4, 2, 8, 1, 5, 10)); // 10
console.log("Third Max: ", maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54)); // 64

// function calculateAverage(a, b, c, d, e) {
//   return Math.round((a + b + c + d + e) / 2);
// }

// console.log(calculateAverage(76, 60, 83, 100, 78));

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
console.log(itemIsPresent(myArray, "fUnKy"));
console.log(itemIsPresent(myArray, "elephant"));

function removeEvens(lst) {
  return lst.filter(function (item) {
    return item % 2 == 0;
  });
}

console.log(
  "Q4 removeEvens()",
  removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
);

function keepLong(lst) {
  return lst.filter(function (item) {
    return item.length > 5;
  });
}

console.log(
  "Q5 keepLong()",
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

function greet(lst) {
  return lst.map(function (item) {
    return "Hello " + item;
  });
}

console.log("Q6 greet()", greet(["David", "Billy", "Lisa", "Jennifer"]));

function greetLong(lst) {
  return lst
    .filter(function (item) {
      return item.length > 3;
    })
    .map(function (item) {
      return "Hello " + item;
    });
}
// -------------------------------------------------------------------------
console.log("Q7 greetLong()", greetLong(["Scott", "Bob", "Ric", "Jim"]));

function allLong(lst) {
  return lst.every(function (item) {
    return item.length > 4;
  });
}

console.log("Q8 - case 1", allLong(["Scott", "Bob", "Ric", "Jim"]));
// Should be false

console.log(
  "Q8 - case 2",
  allLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

function calculateAverage(grades) {
  return Math.round(
    grades.reduce(function (total, item) {
      return total + item;
    }) / grades.length
  );
}

console.log(calculateAverage([76, 60, 83, 100, 78]));

function calculateAverage1(grades) {
  let score = Math.round(
    grades.reduce(function (total, item) {
      return total + item;
    }) / grades.length
  );
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(calculateAverage1([48, 95, 65, 48, 59, 78, 72, 65]));

function countBs(str) {
  let counter = 0;
  str.split("").forEach((element) => {
    if (element === "B") {
      counter += 1;
    }
  });
  return counter;
}
// -------------------------------------------------------------------------
console.log("Q1: ", countBs("BananaBabyBubbles"));

function countChar(str, char) {
  let counter = 0;
  str.split("").forEach((element) => {
    if (element === char) {
      counter += 1;
    }
  });
  return counter;
}
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
console.log("Q2: ", countChar("BananaBabyBubbles", "u"));
console.log("Q2: ", countChar("BananaBabyBubbles", "a"));
console.log("Q2: ", countChar("BananaBabyBubbles", "Z"));

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

function identifyArmstrongNumbers(num1, num2) {
  let armstrongNumbers = [];
  for (i = num1; i < num2; i++) {
    let num = i.toString().split("");
    let evaluatedNum = 0;
    for (y = 0; y < num.length; y++) {
      evaluatedNum += Math.pow(num[y], num.length);
    }
    if (evaluatedNum === i) {
      armstrongNumbers.push(evaluatedNum);
    }
  }
  return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(100, 99999));

function map(lst, func) {
  let wordLength = [];
  for (i = 0; i < lst.length; i++) {
    wordLength.push(func(lst[i]));
  }
  return wordLength;
}
// -------------------------------------------------------------------------
function charCount(str) {
  return str.length;
}
console.log(
  "Q7: ",
  map(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"], charCount)
);
console.log("Q7: ", map(["Scott", "Bob", "Ric", "Jim"], charCount));

function filter(lst, func) {
  let wordLength = [];
  for (i = 0; i < lst.length; i++) {
    if (func(lst[i])) {
      wordLength.push(lst[i]);
    }
  }
  return wordLength;
}
// -------------------------------------------------------------------------
function keepLong(str) {
  return str.length > 5;
}
console.log(
  "Q8: ",
  filter(
    ["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"],
    keepLong
  )
);

function every(lst, func) {
  for (i = 0; i < lst.length; i++) {
    if (!func(lst[i])) {
      return false;
    }
  }
  return true;
}
// -------------------------------------------------------------------------
function isEven(num) {
  return num % 2 === 0;
}
console.log("Q9: ", every([2, 42, 540, 8, 64], isEven));
console.log("Q9: ", every([2, 42, 540, 3, 64], isEven));
