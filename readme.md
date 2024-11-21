   JavaScript Assignment 7

1. Write a JavaScript function to check whether an input is an array. (Array.isArray([1,2,3])) ?
~~~js
function value(input) {
    return Array.isArray(input);
    
}
console.log(value([1,2,3]));//true
~~~ 

2. Write a JavaScript function that takes an array as an argument and returns the first element of the array?
~~~js 
function firstelement(arr) {
    return arr.slice(0,1)
    
}
let myarr=[1,2,3,4,5]
console.log(firstelement(myarr)); //Output: [1]
~~~ 
3. Write a JavaScript function that takes an array as an argument and returns the last element of the array?
~~~js
function lastelement(arr) {
    return arr.slice(arr.length-1,arr.length)
    
}
let myarr=[1,2,3,4,5]
console.log(lastelement(myarr));//Output:[5]
~~~
4. Write a simple JavaScript function to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"]; ?
~~~js
function elements(arr) {
    return arr.join(",");

    
}
let newarr=["Red", "Green", "White", "Black"]
console.log(elements(newarr));// Output: "Red, Green, White, Black"
~~~
5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each. For example, if you accept 925468 the output should be 9-2-5-4-6-8 ?
~~~js
function insertDashes(number) {
    let numStr = number.toString();
    let result = numStr.split('').join('-');
    return result;
}
let inputNumber = 790249;
let output = insertDashes(inputNumber);
console.log(output); // output: 7-9-0-2-4-9 
~~~
6. Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator) ?
~~~js
let isEven = (num) => {
    return num % 2 === 0 ? true : false;
  };
  
  console.log(isEven(4)); // true 
  console.log(isEven(7)); // false 
  ~~~
  7. Create an array of guestList. Write a javascript function that takes the user’s name as an argument and checks whether it is in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time” ?
  ~~~js
  const guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
     function checkGuest(name) {
    if (guestList.includes(name)) {
        return "Welcome";
    } else {
        return "Sorry, good luck next time";
    }
   }
   console.log(checkGuest("Alice"));  // Output: "Welcome"
   console.log(checkGuest("John"));   // Output: "Sorry, good luck next time"
   ~~~
   8. Write a javascript function that reverses a given number example: 123456789 => 987654321 (toString(), split(), reverse (), join()) ?
   ~~~js
   function reverseNumber(num) {

    let reversedString = num.toString().split('').reverse().join('');

    return Number(reversedString);
  }
  console.log(reverseNumber(123456789));// output: 987654321
   ~~~
    9. Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case. Example: “javascript” => “Javascript” ?
    ~~~js
      function capitalizeFirstLetter(str) {
     return str.charAt(0).toUpperCase() + str.slice(1,str.length);
    }
     console.log(capitalizeFirstLetter("javascript"));//output: Javascript
 ~~~

  