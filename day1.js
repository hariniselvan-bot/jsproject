//console.log("---- 1. Variable Reassignment ----");

//var x = 5;
//x = "Hello";   // Reassigned string
//var x = true;  // Redeclared and reassigned as boolean
//console.log("Final value of x:", x); // true

// REASON:
// Using 'var', you can reassign and redeclare the variable.
// So, final value is the last one assigned: true.

//console.log("---- 2. Identify the Scope ----");
//{
  //let a = 10; // Block-scoped
//}

//try {
  //console.log(a);
//} catch (error) {
  //console.error("Error:", error.message);
//}

// REASON:
// `let` has block scope. The variable `a` is not accessible outside the block,
// so it throws a ReferenceError when we try to log it.

//console.log("---- 3. Data Type Check ----");

//let data1 = 42;     // number
//let data2 = "42";   // string
//let data3 = true;   // boolean

//console.log("Type of data1:", typeof data1); // number
//console.log("Type of data2:", typeof data2); // string
//console.log("Type of data3:", typeof data3); // boolean

// REASON:
// typeof returns:
// - number for 42
// - string for "42"
// - boolean for true

//console.log("---- 4. Prompt and Type ----");

// Simulating user input instead of using prompt
//let userInput = "25";  // Even if user types 25, prompt returns a string

//console.log("Simulated user input:", userInput);
//console.log("Type of userInput:", typeof userInput); // string

// REASON:
// prompt() always returns user input as a string, even if the input looks like a number.

//console.log("---- 5. const Behavior ----");

///const name = "John";

//try {
  name = "Tom"; // Illegal reassignment
//}// catch (error) {
  //console.error("Error:", error.message);
//}

//console.log("Final value of name:", name); // John

// REASON:
// Variables declared with `const` cannot be reassigned.
// Attempting to do so throws a TypeError.


//07-08-2025 TASK
// 1. Addition
//console.log("1.", 10 + 10); 

// 2. Subtraction
//console.log("2.", 10 - 10); 

// 3. Multiplication
//console.log("3.", 10 * 10); 

// 4. Division
//console.log("4.", 10 / 10); 

// 5. Modulus
//console.log("5.", 10 % 11); 

// 6. Exponentiation
//console.log("6.", 10 ** 10); 

// 7. Post-increment assignment
//let int = 10;
//int = int++;
//console.log("7.", int); 

// 8. Pre-increment assignment
//let numbers = 20;
//let numbers1 = ++numbers;
//console.log("8.", numbers, numbers1); 

// 9. Chain of increments
//let a1 = 12;
//let b1 = ++a1;    
//let c1 = ++b1;      
//console.log("9.", a1, b1, c1); 

// 10. Pre-decrement and pre-increment
//let d1 = 1;
//let e1 = --d1;     
//let f1 = ++e1;      
//console.log("10.", d1, e1, f1); 

// 11. Post-increment + pre-decrement
//let num1 = 20;
//let num2 = num1++ + --num1;

//console.log("11.", num1, num2);

//08/08/2025 task 
   
//1. Post vs Pre Increment
let x = 5;
let y = x++ + ++x;
console.log(y, x);

//2. Assignment Operator Practice
let total = 50;
total += 30; 
total /= 4;  
console.log(total);

//3. Strict vs Loose Comparison
console.log(10 == "10"); 
console.log(10 === "10"); 

//4. Job Eligibility Check
let age = 25;
let experience = 3;
console.log(age > 18 && experience > 2);

//5. Implicit Type Conversion - String
 console.log(typeof(5 + "5"));

//6. Boolean Conversion Predictions
console.log(Boolean(0));        
console.log(Boolean("false"));  
console.log(Boolean(null));     

//7. Explicit Conversion to Number
console.log(Number("123") + 10);

//8. Explicit Conversion to Boolean
console.log(Boolean(0));   
console.log(Boolean(1));   
console.log(Boolean(""));  

//9. String Join Practice
let word1 = "Hello";
let word2 = "Students";
console.log(word1 + " " + word2);       
console.log(`${word1} ${word2}`);       

//10. Final Output Value Prediction
let a = "10";
let b = 10;
console.log(a + b);               
console.log(Number(a) + b);       


