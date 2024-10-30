// Assignment: Basic Exercises for .map() Function in Node.js

// Instructions:
// 1. This assignment includes three examples and ten problems to help you practice using the .map() function in JavaScript.
// 2. Write your solutions directly in this file.
// 3. Run the file using Node.js to test your solutions.

// Example 1: Multiply Each Element by 2
// Given an array of numbers, use .map() to create a new array where each element is multiplied by 2.
// Explanation: The .map() function iterates over each element of the 'numbers' array, multiplies it by 2, and creates a new array with the updated values.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Example 1 - Doubled Numbers:', doubledNumbers);

// Example 2: Convert Strings to Uppercase
// Given an array of strings, use .map() to create a new array where each string is converted to uppercase.
// Explanation: The .map() function iterates over each element of the 'words' array, converts it to uppercase using .toUpperCase(), and creates a new array with the modified strings.
const words = ['hello', 'world', 'javascript', 'node'];
const uppercasedWords = words.map(word => word.toUpperCase());
console.log('Example 2 - Uppercased Words:', uppercasedWords);

// Example 3: Extract Names from Objects
// Given an array of objects representing people, use .map() to create a new array containing only the names of the people.
// Explanation: The .map() function iterates over each object in the 'people' array, extracts the 'name' property, and creates a new array of names. The .join() function is then used to convert the array of names into a single string.
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const names = people.map(person => person.name).join(', ');
console.log('Example 3 - Names:', names);

// Problems:

// Problem 1: Multiply Each Element by 3
const numbers1 = [2, 4, 6, 8, 10];
// TODO: Given an array of numbers, use .map() to create a new array where each element is multiplied by 3.
const tripleNumbers = numbers1.map(num => num * 3);
console.log(`ToDo 1: Triple Numbers;`, tripleNumbers);
// Problem 2: Convert Strings to Lowercase
const strings1 = ['HELLO', 'WORLD', 'JAVASCRIPT', 'NODE'];
// TODO: Given an array of strings, use .map() to create a new array where each string is converted to lowercase.
const lowerCaseWords = strings1.map(word => word.toLowerCase());
console.log(`ToDo 2: lower case words:`, lowerCaseWords);
// Problem 3: Extract Ages from Objects
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
// TODO: Given an array of objects representing people, use .map() to create a new array containing only the ages of the people.
const ages = people.map(person => person.age).join(" , ");
console.log(`ToDo 3: Peoples'Ages:`, ages);
// Problem 4: Append "!" to Each String
const strings2 = ['hello', 'world', 'javascript', 'node'];
// TODO: Given an array of strings, use .map() to create a new array where each string has "!" appended to the end.
const exclamationWords = strings2.map(word => word + "!").join(" ");
console.log(`ToDo 4: Words with exclamations!:`, exclamationWords);
// Problem 5: Calculate Squares of Numbers
const numbers2 = [1, 2, 3, 4, 5];
// TODO: Given an array of numbers, use .map() to create a new array where each element is squared.
const numbersSquared = numbers2.map(num => num * num);
console.log(`ToDo 5: numbers squared:`, numbersSquared);
// Problem 6: Extract First Letters from Strings
const strings3 = ['apple', 'banana', 'cherry', 'date'];
// TODO: Given an array of strings, use .map() to create a new array containing the first letter of each string.
const firstLetter = strings3.map(word => word[0]);
console.log(`ToDo 6: first letter:`, firstLetter);

// Problem 7: Convert Objects to Strings
const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 499 },
    { name: 'Tablet', price: 299 }
];
// TODO: Given an array of objects representing products, use .map() to create a new array where each object is converted to a string in the format "Product: [name], Price: [price]".
const newProductsArray = products.map(product => `Product: ${product.name}, Price: ${product.price}`);
console.log(`ToDo 7:`, newProductsArray)
// Problem 8: Add 10 to Each Element
const numbers3 = [5, 10, 15, 20, 25];
// TODO: Given an array of numbers, use .map() to create a new array where each element is increased by 10, and use .join(", ") to convert the array into a string. Given an array of numbers, use .map() to create a new array where each element is increased by 10.
const numberPlusTen = numbers3.map(num => num + 10).join(" , ");
console.log(`ToDo 8:`, numberPlusTen);
// Problem 9: Create Full Names from Objects
const people2 = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Emily', lastName: 'Jones' }
];
// TODO: Given an array of objects representing people with "firstName" and "lastName" properties, use .map() to create a new array containing their full names, and use .join(", ") to convert the array into a single string of names. Given an array of objects representing people with "firstName" and "lastName" properties, use .map() to create a new array containing their full names.
const fullNames = people2.map(person => `${person.firstName} ${person.lastName}`).join(" , ");
console.log(`ToDo 9: full names:`, fullNames);
// Problem 10: Convert Fruit to HTML List Items
const fruits = ['apple', 'banana', 'cherry', 'date'];
// TODO: Given an array of fruit names, use .map() to create a new array where each fruit is converted into an HTML list item in the format "<li>[fruit]</li>", and use .join("\n") to combine them into a single string separated by line breaks. Given an array of fruit names, use .map() to create a new array where each fruit is converted into an HTML list item in the format "<li>[fruit]</li>".
const fruitList = fruits.map(fruit => `- ${fruit}`).join("\n");
console.log(`ToDo 10: fruit list:`, fruitList);