// // // //console.log("---- 1. Variable Reassignment ----");

// // // //var x = 5;
// // // //x = "Hello";   // Reassigned string
// // // //var x = true;  // Redeclared and reassigned as boolean
// // // //console.log("Final value of x:", x); // true

// // // // REASON:
// // // // Using 'var', you can reassign and redeclare the variable.
// // // // So, final value is the last one assigned: true.

// // // //console.log("---- 2. Identify the Scope ----");
// // // //{
// // //   //let a = 10; // Block-scoped
// // // //}

// // // //try {
// // //   //console.log(a);
// // // //} catch (error) {
// // //   //console.error("Error:", error.message);
// // // //}

// // // // REASON:
// // // // `let` has block scope. The variable `a` is not accessible outside the block,
// // // // so it throws a ReferenceError when we try to log it.

// // // //console.log("---- 3. Data Type Check ----");

// // // //let data1 = 42;     // number
// // // //let data2 = "42";   // string
// // // //let data3 = true;   // boolean

// // // //console.log("Type of data1:", typeof data1); // number
// // // //console.log("Type of data2:", typeof data2); // string
// // // //console.log("Type of data3:", typeof data3); // boolean

// // // // REASON:
// // // // typeof returns:
// // // // - number for 42
// // // // - string for "42"
// // // // - boolean for true

// // // //console.log("---- 4. Prompt and Type ----");

// // // // Simulating user input instead of using prompt
// // // //let userInput = "25";  // Even if user types 25, prompt returns a string

// // // //console.log("Simulated user input:", userInput);
// // // //console.log("Type of userInput:", typeof userInput); // string

// // // // REASON:
// // // // prompt() always returns user input as a string, even if the input looks like a number.

// // // //console.log("---- 5. const Behavior ----");

// // // ///const name = "John";

// // // //try {
// // //   name = "Tom"; // Illegal reassignment
// // // //}// catch (error) {
// // //   //console.error("Error:", error.message);
// // // //}

// // // //console.log("Final value of name:", name); // John

// // // // REASON:
// // // // Variables declared with `const` cannot be reassigned.
// // // // Attempting to do so throws a TypeError.


// // // //07-08-2025 TASK
// // // // 1. Addition
// // // //console.log("1.", 10 + 10); 

// // // // 2. Subtraction
// // // //console.log("2.", 10 - 10); 

// // // // 3. Multiplication
// // // //console.log("3.", 10 * 10); 

// // // // 4. Division
// // // //console.log("4.", 10 / 10); 

// // // // 5. Modulus
// // // //console.log("5.", 10 % 11); 

// // // // 6. Exponentiation
// // // //console.log("6.", 10 ** 10); 

// // // // 7. Post-increment assignment
// // // //let int = 10;
// // // //int = int++;
// // // //console.log("7.", int); 

// // // // 8. Pre-increment assignment
// // // //let numbers = 20;
// // // //let numbers1 = ++numbers;
// // // //console.log("8.", numbers, numbers1); 

// // // // 9. Chain of increments
// // // //let a1 = 12;
// // // //let b1 = ++a1;    
// // // //let c1 = ++b1;      
// // // //console.log("9.", a1, b1, c1); 

// // // // 10. Pre-decrement and pre-increment
// // // //let d1 = 1;
// // // //let e1 = --d1;     
// // // //let f1 = ++e1;      
// // // //console.log("10.", d1, e1, f1); 

// // // // 11. Post-increment + pre-decrement
// // // //let num1 = 20;
// // // //let num2 = num1++ + --num1;

// // // //console.log("11.", num1, num2);

// // // //08/08/2025 task 
   
// // // //1. Post vs Pre Increment
// // // // let x = 5;
// // // // let y = x++ + ++x;
// // // // console.log(y, x);

// // // // //2. Assignment Operator Practice
// // // // let total = 50;
// // // // total += 30; 
// // // // total /= 4;  
// // // // console.log(total);

// // // // //3. Strict vs Loose Comparison
// // // // console.log(10 == "10"); 
// // // // console.log(10 === "10"); 

// // // // //4. Job Eligibility Check
// // // // let age = 25;
// // // // let experience = 3;
// // // // console.log(age > 18 && experience > 2);

// // // // //5. Implicit Type Conversion - String
// // // //  console.log(typeof(5 + "5"));

// // // // //6. Boolean Conversion Predictions
// // // // console.log(Boolean(0));        
// // // // console.log(Boolean("false"));  
// // // // console.log(Boolean(null));     

// // // // //7. Explicit Conversion to Number
// // // // console.log(Number("123") + 10);

// // // // //8. Explicit Conversion to Boolean
// // // // console.log(Boolean(0));   
// // // // console.log(Boolean(1));   
// // // // console.log(Boolean(""));  

// // // // //9. String Join Practice
// // // // let word1 = "Hello";
// // // // let word2 = "Students";
// // // // console.log(word1 + " " + word2);       
// // // // console.log(`${word1} ${word2}`);       

// // // //10. Final Output Value Prediction
// // // // let a = "10";
// // // // let b = 10;
// // // // console.log(a + b);               
// // // // console.log(Number(a) + b);       

// // // //11/08/2025

// // // //1. If-Else Practice
// // // // let number = 5; 

// // // // if (number > 0) {
// // // //     console.log("Positive number");
// // // // } else if (number < 0) {
// // // //     console.log("Negative number");
// // // // } else {
// // // //     console.log("Zero");
// // // // }

// // // // //2. Switch Statement
// // // // let monthNumber = 4; // you can change the value
// // // // let monthName;

// // // // switch (monthNumber) {
// // // //     case 1:
// // // //         monthName = "January";
// // // //         break;
// // // //     case 2:
// // // //         monthName = "February";
// // // //         break;
// // // //     case 3:
// // // //         monthName = "March";
// // // //         break;
// // // //     case 4:
// // // //         monthName = "April";
// // // //         break;
// // // //     case 5:
// // // //         monthName = "May";
// // // //         break;
// // // //     case 6:
// // // //         monthName = "June";
// // // //         break;
// // // //     case 7:
// // // //         monthName = "July";
// // // //         break;
// // // //     case 8:
// // // //         monthName = "August";
// // // //         break;
// // // //     case 9:
// // // //         monthName = "September";
// // // //         break;
// // // //     case 10:
// // // //         monthName = "October";
// // // //         break;
// // // //     case 11:
// // // //         monthName = "November";
// // // //         break;
// // // //     case 12:
// // // //         monthName = "December";
// // // //         break;
// // // //     default:
// // // //         monthName = "Invalid month number";
// // // // }
// // // // console.log(monthName);

// // // // //3. For Loop Table
// // // // let num = 7;

// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log(`${num} x ${i} = ${num * i}`);
// // // // }

// // // // //4. For-Of Loop
// // // // let colors = ["red", "blue", "green", "yellow"];

// // // // for (let color of colors) {
// // // //     console.log(color.toUpperCase());
// // // // }

// // // // //5. For-In Loop
// // // // let car = {
// // // //     brand: "Toyota",
// // // //     model: "Corolla",
// // // //     year: 2022
// // // // };

// // // // for (let property in car) {
// // // //     console.log(`${property}: ${car[property]}`);
// // // // }

// // // //12/08/2025
// // //  12-8-2025

// // //  //1. Magic Number Checker

// // // function isMagicNumber(num) {
// // //     if (num % 3 === 0 && num % 7 === 0) {
// // //         console.log("* It's magic!");
// // //     } else {
// // //         console.log("Not magic");
// // //     }
// // // }

// // // isMagicNumber(21);
// // // isMagicNumber(10);

// // // //2. Name Shouter (Anonymous Function)

// // // let shoutName = function(name) {
// // //     console.log(name.toUpperCase() + "!!!");
// // // };

// // // shoutName("Harini"); 


// // // //3. Arrow Function Fortune Teller

// // // let tellFortune = (name, place = "Unknown") => {
// // //     console.log(`Dear ${name}, you will travel to ${place} soon!`);
// // // };

// // // tellFortune("Harini", "Paris");
// // // tellFortune("Harini"); 

// // // //4. Scope Detective

// // // function scopeDetective() {
// // //     if (true) {
// // //         var a = "I am var";
// // //         let b = "I am let";
// // //         const c = "I am const";
// // //         console.log("Inside block:", a, b, c);
// // //     }

// // //     console.log("Outside block (var):", a);

// // //     try {
// // //         console.log("Outside block (let):", b);
// // //     } catch (error) {
// // //         console.log("Outside block (let): Cannot access -", error.message);
// // //     }

// // //     try {
// // //         console.log("Outside block (const):", c);
// // //     } catch (error) {
// // //         console.log("Outside block (const): Cannot access -", error.message);
// // //     }
// // // }

// // // scopeDetective();

// // // //5. Arrow Function Sum Calculator
// // // let sumNumbers = (a, b) => a + b;

// // // console.log(sumNumbers(5, 10)); 

// // //13/08/2025
// // // =======================
// // // Easy Questions
// // // =======================

// // // 1. Function that logs "Hello World"
// // function sayHello() {
// //   console.log("Hello World");
// // }
// // sayHello();

// // // 2. Array with 5 fruits (print first and last)
// // let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// // console.log("First Fruit:", fruits[0]);
// // console.log("Last Fruit:", fruits[fruits.length - 1]);

// // // 3. Object student with name and age
// // let student = {
// //   name: "Harini",
// //   age: 22
// // };
// // console.log("Student Name:", student.name);

// // // 4. For...of loop (print each letter in "JavaScript")
// // for (let letter of "JavaScript") {
// //   console.log(letter);
// // }

// // // 5. IIFE that prints message
// // (function () {
// //   console.log("I am learning JavaScript");
// // })();


// // // =======================
// // // Medium Questions
// // // =======================

// // // 1. Higher Order & Callback Function
// // function calculate(a, b, callback) {
// //   console.log("Sum:", a + b);
// //   callback(a, b);
// // }

// // function logDifference(x, y) {
// //   console.log("Difference:", x - y);
// // }

// // calculate(10, 5, logDifference);

// // // 2. Currying Function (power(a)(b))
// // function power(a) {
// //   return function (b) {
// //     return a ** b;
// //   };
// // }
// // console.log("Power(2,3):", power(2)(3)); // 8

// // // 3. IIFE with parameters
// // (function (shopName, discount) {
// //   console.log(`Welcome to ${shopName}! Get ${discount}% off today!`);
// // })("ShopEase", 20);

// // // 4. Generator Function
// // function* colorGenerator() {
// //   yield "red";
// //   yield "green";
// //   yield "blue";
// // }

// // let colors = colorGenerator();
// // console.log(colors.next());
// // console.log(colors.next()); 
// // console.log(colors.next()); 
// // console.log(colors.next());
// // // 5. For...of & For...in loops

// // // (a) Print each letter of "developer"
// // for (let char of "developer") {
// //   console.log(char);
// // }

// // // (b) Print all property values of an object
// // let laptop = { brand: "Dell", price: 45000, isNew: true };

// // for (let key in laptop) {
// //   console.log(laptop[key]);
// // }

// //14/08/2025
// // =======================
// // Spread & Rest Operator
// // =======================

// // 1. Merge two arrays
// let arr1 = ['a', 'b'];
// let arr2 = ['c', 'd'];
// let merged = [...arr1, ...arr2];
// console.log("Merged Array:", merged);

// // 2. Clone an object
// let obj = { name: 'John', age: 25 };
// let clone = { ...obj };
// console.log("Cloned Object:", clone);

// // 3. Merge objects with overlapping keys
// let o1 = { x: 1, y: 2 };
// let o2 = { y: 3, z: 4 };
// let mergedObj = { ...o1, ...o2 };
// console.log("Merged Object (overlap):", mergedObj); 
// // { x: 1, y: 3, z: 4 }

// // 4. Function with unlimited numbers
// function sumAll(...nums) {
//   return nums.reduce((acc, val) => acc + val, 0);
// }
// console.log("Sum of Numbers:", sumAll(1, 2, 3, 4, 5));

// // 5. Function with rest operator (first two args separately)
// function logArgs(a, b, ...rest) {
//   console.log("First:", a);
//   console.log("Second:", b);
//   console.log("Rest:", rest);
// }
// logArgs(1, 2, 3, 4, 5, 6);


// // =======================
// // Array Destructuring
// // =======================

// // 6. Store colors
// let colors = ['red', 'green', 'blue'];
// let [c1, , c2] = colors;
// console.log("c1:", c1, "c2:", c2);

// // 7. Destructure first and last
// let items = ['pen', 'pencil', 'eraser', 'sharpener'];
// let [first, , , last] = items;
// console.log("First:", first, "Last:", last);

// // 8. Destructure first two, rest into another array
// let nums = [10, 20, 30, 40, 50];
// let [n1, n2, ...others] = nums;
// console.log("First Two:", n1, n2, "Others:", others);

// // 9. Nested destructuring
// let vehicles = ['car', ['bike', ['bus', 'train']]];
// let [, [, [bus]]] = vehicles;
// console.log("Bus:", bus);

// // 10. Swap variables
// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log("Swapped:", a, b);


// // =======================
// // Array Methods - Manipulation
// // =======================

// // 11. Push
// let arr11 = [1, 2, 3];
// arr11.push(4, 5);
// console.log("Push:", arr11);

// // 12. Pop twice
// let arr12 = [1, 2, 3];
// arr12.pop();
// arr12.pop();
// console.log("Pop:", arr12);

// // 13. Unshift
// let arr13 = [3, 4, 5];
// arr13.unshift(1, 2);
// console.log("Unshift:", arr13);

// // 14. Shift
// let arr14 = [1, 2, 3, 4];
// arr14.shift();
// console.log("Shift:", arr14);

// // 15. Splice
// let arr15 = [10, 20, 30, 40, 50];
// arr15.splice(1, 2, 99, 100);
// console.log("Splice:", arr15);


// // =======================
// // Array Methods - Merge, Slice, Flat, Fill
// // =======================

// // 16. Merge arrays
// let arr16a = [1, 2, 3];
// let arr16b = [4];
// let merged16 = arr16a.concat(arr16b);
// console.log("Concat:", merged16);

// // 17. Slice
// let arr17 = [5, 6, 7, 8, 9];
// let sliced = arr17.slice(1, 3);
// console.log("Slice:", sliced);

// // 18. Flatten nested array
// let arr18 = [1, [2, 3], [4, [5]]];
// console.log("Flat:", arr18.flat(2));

// // 19. Fill
// let arr19 = new Array(5).fill("Hello");
// console.log("Fill:", arr19);

// // 20. Flat on new array
// let arr20 = [1, 2, [3, 4], [5, [6]]];
// console.log("Flat Single Level:", arr20.flat(2));

//19/08/2025

// 1. Sorting Numbers (Corrected)
let nums = [45, 12, 3, 99, 23, 8];

// Create copies before sorting
let ascending = [...nums].sort((a, b) => a - b);  // Ascending
let descending = [...nums].sort((a, b) => b - a); // Descending
console.log("Ascending:", ascending);
console.log("Descending:", descending);

// 2. Check Includes
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.includes("pink") ? "Exists" : "Not found");

// 3. Join vs toString
let arr = ["HTML", "CSS", "JS"];
console.log("Join:", arr.join("-"));
console.log("toString:", arr.toString());

// 4. IndexOf / LastIndexOf
let items = ["pen", "book", "pen", "pencil", "pen"];
console.log("First index of pen:", items.indexOf("pen"));
console.log("Last index of pen:", items.lastIndexOf("pen"));

// 5. forEach vs map
let students = ["Kamal", "Sita", "Ravi"];
students.forEach(s => console.log("Student:", s));
let newStudents = students.map(s => "Student: " + s);
console.log(newStudents);

// 6. Filter + Find
let products = [
  { name: "Laptop", price: 45000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 20000 },
  { name: "Monitor", price: 12000 }
];
let filtered = products.filter(p => p.price >= 20000);
console.log("Filtered:", filtered);
let found = products.find(p => p.price >= 20000);
console.log("Found:", found);

// 7. Reduce (Sum)
let numbers = [5, 10, 15, 20, 25];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum:", total);

// 8. Some / Every
let ages = [22, 18, 25, 30, 16];
console.log("Some under 18:", ages.some(age => age < 18));
console.log("Every over 15:", ages.every(age => age > 15));

// 9. String Replace + Slice
let str = "Hello World";
console.log(str.replace("World", "JavaScript"));
console.log("Sliced:", str.slice(0, 5));

// 10. String Split + Repeat
let sentence = "I love coding";
let words = sentence.split(" ");
let repeated = sentence.repeat(3);
console.log("Words:", words);
console.log("Repeated:", repeated);
