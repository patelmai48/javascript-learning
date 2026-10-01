/*
==================================================
              JAVASCRIPT - IF & ELSE
==================================================

IF / ELSE
---------

if and else are conditional statements in JavaScript.

They are used when a program needs to make a decision
based on a condition.

A condition gives either:

true
or
false


--------------------------------------------------
1. IF STATEMENT
--------------------------------------------------

The "if" statement runs a block of code only when
the given condition is true.

SYNTAX:

if (condition) {
    // code to execute
}

EXAMPLE:
*/

// let age = 20;

// if (age >= 18) {
//     console.log("You are an adult");
// }

/*
Here:

age >= 18

20 >= 18

The condition is TRUE.

Therefore, the code inside the if block runs.


--------------------------------------------------
2. WHAT HAPPENS WHEN THE CONDITION IS FALSE?
--------------------------------------------------

If the condition is false, the code inside the
if block will not execute.

Example:
*/

// let age = 15;

// if (age >= 18) {
//     console.log("You are an adult");
// }

/*
Here:

15 >= 18

The condition is FALSE.

Therefore, nothing is printed.


--------------------------------------------------
3. ELSE STATEMENT
--------------------------------------------------

The "else" statement is used when we want to
execute another block of code when the if
condition is false.

SYNTAX:

if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}

EXAMPLE:
*/

// let age = 15;

// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }

// /*
// Here:

// age >= 18

// 15 >= 18

// FALSE

// So the else block executes.


// --------------------------------------------------
// 4. IF + ELSE FLOW
// --------------------------------------------------

// The basic flow is:

//              Condition
//                  |
//           ┌──────┴──────┐
//         TRUE           FALSE
//           |               |
//        IF block        ELSE block


// Only ONE of the two blocks will execute.


// --------------------------------------------------
// 5. USING COMPARISON OPERATORS
// --------------------------------------------------

// if and else commonly use comparison operators.

// >      Greater than
// <      Less than
// >=     Greater than or equal to
// <=     Less than or equal to
// ===    Strictly equal to
// !==    Strictly not equal to

// Example:
// */

// let number = 10;

// if (number > 5) {
//     console.log("Number is greater than 5");
// } else {
//     console.log("Number is not greater than 5");
// }

// /*
// --------------------------------------------------
// 6. USING BOOLEANS
// --------------------------------------------------

// if can directly check a boolean value.

// Example:
// */

// let isLoggedIn = true;

// if (isLoggedIn) {
//     console.log("Welcome!");
// } else {
//     console.log("Please login.");
// }

// /*
// If isLoggedIn is true:
//     "Welcome!" is printed.

// If isLoggedIn is false:
//     "Please login." is printed.


// --------------------------------------------------
// 7. IMPORTANT POINT
// --------------------------------------------------

// The condition inside if must be something
// JavaScript can evaluate as true or false.

// Example:

// age >= 18
// number === 10
// isLoggedIn
// score < 50


// --------------------------------------------------
// REAL-LIFE EXAMPLE
// --------------------------------------------------

// Suppose a website needs to check whether a
// user is old enough to vote.

// */

// let age = 20;

// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }

// /*
// The program checks the condition and chooses
// which block to execute.


// --------------------------------------------------
// SUMMARY
// --------------------------------------------------

// if:
// Runs code when a condition is TRUE.

// else:
// Runs code when the if condition is FALSE.

// Basic structure:

// if (condition) {
//     // true
// } else {
//     // false
// }


// Remember:

// IF = "If this condition is true, do this."

// ELSE = "Otherwise, do this."

// ==================================================
// */