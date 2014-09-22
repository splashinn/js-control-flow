// JS Control flow
//
// Create the following files and use looping structures we learned in class to solve the problems.
//
// After that work on the questions on google_shopping.js
//
// reverse.js
//
// Write a program that will take a hardcoded string, and console log the reversed version of it. Use a for loop
//
// var inputString = "building"
//
// filterLongWords.js
//
// Hardcode an array of words. Have a variable maxLength, push words that are less than the maxLength into a new array, and console.log that.
//
// pluralizer.js
//
// Take an input like
//
// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"...

// reverse.js:
var reverse = function(str) {
  return str.split("").reverse().join("");
}
reverse("building");
console.log(reverse("building"));

// filterLongWords:
var filterLongWords = function(array, int) {
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
}
console.log(filterLongWords(["Cat", "Mouse", "Bacon", "Ham", "Cheese", "Bread", "Donut", "Hamburger"], 4));

// pluralizer.js
thing = "cat";
count = 3;

if (count > 1) {
	console.log(count + " " + thing + "s");
} else {
	console.log("1 " + thing);
};
