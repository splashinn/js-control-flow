// Functions Problem Set:

// merge(arr1, arr2)
var list1 = [3,6,11];
var list2 = [2,4,5,8,9];

var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {

    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }

    result.push((arr1[0] <= arr2[0]) ? arr1.shift() : arr2.shift());

  }
  return result.concat(arr1).concat(arr2);
}

console.log(merge(list1, list2));

// letterCount
var letterCount = function(word) {
  var letters = word.toLowerCase();
  var result = {};

  for (i = 0; i < letters.length; i += 1) {
    if (result[letters[i]]) {
      result[letters[i]] += 1;
    } else {
      result[letters[i]] = 1;
    }
  }
  return result;
}

var myWord = 'KITTEN';
console.log(letterCount(myWord));

// sillySum
var total = 0;

var sillySum = function(arr) {
	for (var i = 0; i < arr.length; i += 1) {
		total += arr[i] * i;
	}
	return total;
}

var myArray = [1, 2, 3, 4];
console.log(sillySum(myArray));

var anotherArray = [20, 36, 79, 13, 57];
console.log(sillySum(anotherArray));

// numSquare(max)
var numSquare = function(max) {
	var squaresArr = [];

	for (i = 1; i * i <= max; i += 1) {
		squaresArr[i] = i * i;
	}
	return squaresArr;
}

// isPrime(num)
var isPrime = function(num) {
    if (num < 2) {
    	return false;
    }
    for (var i = 2; i < num; i += 1) {
        if (num % i === 0)
            return false;
    }
    return true;
}

console.log(isPrime(9)); // returns false
console.log(isPrime(7)); // returns true

// primes(max)
var isPrime = function(num) {
    if (num < 2) {
    	return false;
    }
    for (var i = 2; i < num; i += 1) {
        if (num % i === 0)
            return false;
    }
    return true;
}

var primes = function(max) {
	for (var i = 2; i <= max; i += 1) {
		if (isPrime(i) === true) {
			console.log(i);
		}
	}
}

primes(100);
