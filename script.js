/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));




  /*  Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/


const maxOfThreeNumbers = (x, y, z) => {
    if (x >= y && x >= z) {
      return x;
    } if (y >= x && y >= z) {
      return y;
    } else {
        return z;
  }
}

console.log('Exercise 2 Result:', maxOfThreeNumbers(300, 90, 600));





/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/


const isCharAVowel = (char) => {
if (char === "a" || char === "e" || char ===  "i" || char === "o" || char === "u" || char === "y") {
    return true;
} else {
return false;
}
}
console.log('Exercise 3 Result:', isCharAVowel('g'));



/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

let sum = 0
const sumArray = (Arr) => {
    for (let i = 0; i < Arr.length; i++) {
        console.log(sumArray);
      sum += Arr[i]
    }
    return sum;
}

console.log('Exercise 4 Result:', sumArray([15, 30, 5]));



/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

let multiply = 1
const multiplyArray = (MultiArr) => {
    for (let i = 0; i < MultiArr.length; i++) {
        console.log(sumArray);
      multiply *= MultiArr[i]
    }
    return multiply;
}



console.log('Exercise 5 Result:', multiplyArray([2, 8, 2]));



/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (rstring) => {
    return rstring.split('').reverse().join('');
}

console.log('Exercise 6 Result:', reverseString ("yelnats") );




/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/


const longestStringInArray = (arrayOfStrings) => {
    let maxLng = Math.max(...arrayOfStrings.map(elem => elem.length))
    return arrayOfStrings.filter(elem => elem.length === maxLng)
    }

let arrayOfStrings = ["this", "part", "took", "waaaay", "too", "long"]

console.log('Exercise 7 Result:', longestStringInArray(arrayOfStrings));




/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = (lengthOfStrings) => {
    let maxLng = Math.max(...lengthOfStrings.map(elem => elem.length))
    return lengthOfStrings.filter(elem => elem.length === 4)
    }

let lengthOfStrings = ["this", "part", "took", "waaaay", "too", "long"]

console.log('Exercise 8 Result:', stringsLongerThan(lengthOfStrings));