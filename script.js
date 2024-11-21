 /* function value(input) {
    return Array.isArray(input);
    
}
console.log(value([1,2,3])) */
/*
function firstelement(arr) {
    return arr.slice(0,1)
    
}
let myarr=[1,2,3,4,5]
console.log(firstelement(myarr));  */

/* function lastelement(arr) {
    return arr.slice(arr.length-1,arr.length)
    
}
let myarr=[1,2,3,4,5]
console.log(lastelement(myarr)); */
/*
function elements(arr) {
    return arr.join(",");

    
}
let newarr=["Red", "Green", "White", "Black"]
console.log(elements(newarr)); */

/* function insertDashes(number) {
    let numStr = number.toString();
    let result = numStr.split('').join('-');
    return result;
}
let inputNumber = 790249;
let output = insertDashes(inputNumber);
console.log(output);  */
/*
let isEven = (num) => {
    return num % 2 === 0 ? true : false;
  };
  
  console.log(isEven(4)); 
  console.log(isEven(7)); 
*/
/*
const guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
function checkGuest(name) {
    if (guestList.includes(name)) {
        return "Welcome";
    } else {
        return "Sorry, good luck next time";
    }
}
console.log(checkGuest("Alice"));  // Output: "Welcome"
console.log(checkGuest("John"));   // Output: "Sorry, good luck next time" */
/*
function reverseNumber(num) {

    let reversedString = num.toString().split('').reverse().join('');

    return Number(reversedString);
  }
  console.log(reverseNumber(123456789));// output: 987654321 */

 /* function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1,str.length);
} 
console.log(capitalizeFirstLetter("javascript"));//output: Javascript */


