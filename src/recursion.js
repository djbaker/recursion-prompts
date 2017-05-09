// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n%1 !== 0) {
    n = Math.floor(n);
  }
  if (n === 1 || n === 0) { return 1;}
  return (n * factorial(--n));
};



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    var newArray = array.slice(1);
    if (array.length === 0) return 0;   
    return (array[0] + sum(newArray));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var newArray = array.slice(1);
    if (array.length === 0) return 0;  
    if (Array.isArray(array[0])) {
      return (arraySum(array[0]) + arraySum(newArray));
    } else {
      return (array[0] + arraySum(newArray));
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) return true;
  if (n < 0) {
    return !isEven(++n);
  }
  if (n > 0) {
    return !isEven(--n);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {return 0;}
    if (n < 0) {
      n++;
      return n + sumBelow(n);
    }
    if (n > 0) {
      n--;
      return n + sumBelow(n);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (y%1 !== 0) {
    y = Math.floor(y);
  }
  if (x%1 !== 0) {
    x = Math.floor(x);
  }
  if (x > y) {
    x--;
  }
  if (x < y) {
    x++;
  }
  if (x === y) return [];  
  if ((x+1) === y || (x-1) === y) return x; 
  return [x].concat(range(x, y));
    // x++
    // if ((x + 1) === y) return x;
    // return [x].concat(range(x, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    if (exp === 1) return base;
    exp--;
    return base * exponent(base, exp);
  }
  if (exp < 0) {
    exp = -exp;
    if (exp === 1) return 1/base;
    exp--;
    return 1 / (base * exponent(base, exp));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 2) return true;
    if (n ===1) return true;
    if(n < 2) return false;
    n = n / 2;
    return powerOfTwo(n);
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 1) return string;
  var arr = string.split("");
  return arr.pop() + reverse(arr.join(""));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(' ', '');
  var arr = string.split("");
  if (arr[0].toLowerCase() !== arr[arr.length - 1].toLowerCase()) return false;
  if (arr.length === 0 || arr.length === 1) return true;
  arr.pop();
  arr.shift();
  return palindrome(arr.join(""));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y < 0 && x < 0) {
    y = -y;
    x = -x;
    return -modulo(x, y);
  }
  if (y < 0) {
    y = -y;
    return -modulo(x, y);
  }
  if (x < 0) {
    x = -x;
    return -modulo(x, y);
  }
  if (x === 0) return y === 0 ? NaN : 0;
  if (x < y) return x;
  if (y === 1) return 0;
  return modulo((x - y), y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  var count = Array.from(arguments)[2] || 0;
  if (y === 0) return count;
  count = count + x;
  if (y < 0) {
    y = -y;
    return -(multiply(x, --y, count));
  }
  if (y > 0) {
    return multiply(x, --y, count);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x === 0 && y === 0) return NaN;
  if (y === x) return 1; 
  if (y > x) return 0;
  if (y < 0) {
    y = -y;
    return -divide(x, y);
  }
  if (y < x) {
    return 1 + divide((x - y), y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) return null;
  if (x === y) return x;
  var num = arguments[2] || y;
  if ((x % num === 0) && (y % num === 0)) {
    return num;
  }
  if (num < 1) return 1;
  num -= 1;
  return gcd(x, y, num);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  if (arr1[0] !== arr2[0]) return false;
  return compareStr(arr1.slice(1).join(''), arr2.slice(1).join(''));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var array = str.split('')
  if (array.length === 1) {
    return array
  }
  return [array[0]].concat(createArray(array.slice(1).join('')))
}

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array;
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)))
}

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var arr = Array.from(arguments)[2] || [];
  if (length === 0) return arr;
  arr.push(value);
  return buildList(value, --length, arr)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  let count = Array.from(arguments)[2] || 0;
  if  (array.length == 0) return count;
  if (array[0] === value) {
    count++;
  }
  return countOccurrence(array.slice(1), value, count)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let arr = Array.from(arguments)[2] || [];
  let i = Array.from(arguments)[3] || 0;
  if (i === array.length) {return arr;}
  arr.push(callback(array[i], i, array));
  return rMap(array, callback, arr, ++i)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = arguments[2] || 0;
  for (var k in obj) {
    if (k === key) {
      count++;
    }
    if (typeof obj[k] === 'object') {
      count = countKeysInObj(obj[k], key, count);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = arguments[2] || 0;
  for (var k in obj) {
    if (obj[k] === value) {
      count++;
    }
    if (typeof obj[k] === 'object') {
      count = countValuesInObj(obj[k], value, count);
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (var k in obj) {
    if (k === key) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
    if (typeof obj[k] === 'object') {
      replaceKeysInObj(obj[k], key, newKey);
    }
  }
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) return null;
  let arr = Array.from(arguments)[1] || [];
  let i = Array.from(arguments)[2] || 0;
  if (i === n + 1) return arr;
  if (arr.length <= 1) {
    arr.push(arr.length)
  }else if (arr.length > 1) {
    arr.push(arr[arr.length - 1] + arr[arr.length -2])
  }
  return fibonacci(n, arr, ++i)
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) return null;
  let arr = Array.from(arguments)[1] || [];
  let i = Array.from(arguments)[2] || 0;
  if (i === n + 1) return arr[arr.length - 1];
  if (arr.length <= 1) {
    arr.push(arr.length)
  }else if (arr.length > 1) {
    arr.push(arr[arr.length - 1] + arr[arr.length -2])
  }
  return nthFibo(n, arr, ++i)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  let arr = Array.from(arguments)[1] || [];
  arr.push(input[0].toUpperCase())
  if (input.length === 1) return arr;
  return capitalizeWords(input.slice(1), arr);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var ret = Array.from(arguments)[1] || [];
  var cap = array[0].split('')[0].toUpperCase() + (array[0].split('').slice(1, (array[0].split('')).length)).join('')
  ret.push(cap)
  if (array.length === 1) return ret;
  return capitalizeFirst(array.slice(1), ret)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = arguments[1] || 0;
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key]%2 === 0) {
      count += obj[key];
    }
    if (typeof obj[key] === 'object') {
      count = nestedEvenSum(obj[key], count);
    }
  }
  return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var first = arrays[0];
  if (Array.isArray(first) && first.length > 0) {
    first = flatten(first);
  }
  if (arrays.length === 1) return first;
  if (Array.isArray(first)) {
    return first.concat(flatten(arrays.splice(1)));
  }

  return [first].concat(flatten(arrays.splice(1)));
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str) {
  var obj = Array.from(arguments)[1] || {};
  var arr = str.split('');
  if (obj[arr[0]]) {
    obj[arr[0]] = obj[arr[0]] + 1;
  }else if (!obj[arr[0]]) {
    obj[arr[0]] = 1;
  }
  if (str.length === 1) return obj;
  return letterTally(arr.slice(1).join(''), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  var arr = Array.from(arguments)[1] || [];
  if (arr[arr.length -1] !== list[0]) {
    arr.push(list[0]);
  }
  if (list.length === 1) return arr;
  return compress(list.slice(1), arr);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arr = array.slice(0);
  var ret = arguments[2] || [];
  arr[0].push(aug);
  ret.push(arr[0]);
  if (arr.length === 1) {
    return ret;
  }
  return  augmentElements(array.slice(1), aug, ret);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = Array.from(arguments)[1] || [];
  if (array[0] !== 0 || arr[arr.length - 1] !== 0) {
    arr.push(array[0]);
  }
  if (array.length === 1) return arr;
  return minimizeZeroes(array.slice(1), arr);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var arr = Array.from(arguments)[1] || [];
  if (array[0] < 0) {var n = -array[0];}
  else {var n = array[0];}
  if (arr.length % 2 === 0) {arr.push(n);}
  else if (arr.length % 2 === 1) {arr.push(-n);}
  if (array.length === 1) return arr;
  return alternateSign(array.slice(1), arr);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let newStr = Array.from(arguments)[1] || '';
  let arr = str.split(' ');
  switch (arr[0]) {
    case '0': newStr = newStr + " zero"
      break;
    case '1': newStr = newStr + " one"
      break;
    case '2': newStr = newStr + " two"
      break;
    case '3': newStr = newStr + " three"
      break;
    case '4': newStr = newStr + " four"
      break;
    case '5': newStr = newStr + " five"
      break;
    case '6': newStr = newStr + " six"
      break;
    case '7': newStr = newStr + " seven"
      break;
    case '8': newStr = newStr + " eight"
      break;
    case '9': newStr = newStr + " nine"
      break;
    default: newStr = newStr + " " + arr[0];
  }
  if (arr.length === 1) return newStr.split('').slice(1).join('');
  return numToText(arr.slice(1).join(' '), newStr)
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
