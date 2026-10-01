/*
==================================================
        JAVASCRIPT - VARIABLES & DATA TYPES
==================================================

VARIABLES
---------
A variable is a named place/reference used to store
a value so that we can use that value later in a program.

Example:
*/

// let age = 20;
// const name = "Mahi";

/*
VARIABLE DECLARATION
--------------------

JavaScript has three keywords for declaring variables:

1. let
2. const
3. var

1. let
-------
Use let when the value may change.
*/

// let score = 50;
// score = 80;

/*
2. const
--------
Use const when the variable should not be reassigned.
*/

// const pi = 3.14;

/*
3. var
-------
var is the older way of declaring variables.
Modern JavaScript usually prefers let and const.

--------------------------------------------------

NAMING VARIABLES
----------------

Variable names can contain:
- letters
- numbers
- _
- $

But a variable name cannot start with a number.

Correct:
*/

// let studentName = "Mahi";
// let studentAge = 20;
// let _value = 10;

/*
Incorrect:

let 1name = "Mahi";

JavaScript variable names are case-sensitive.

Example:
*/

// let age = 20;
// let Age = 30;

/*
age and Age are two different variables.

--------------------------------------------------

DATA TYPES
----------

A data type tells JavaScript what kind of value
a variable contains.

Main JavaScript data types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
8. Object

--------------------------------------------------

1. STRING
---------

A string represents text.

*/

// let firstName = "Mahi";
// let message = "Hello World";

/*
Strings can use:
"double quotes"
'single quotes'
`backticks`

--------------------------------------------------

2. NUMBER
---------

Number represents numeric values.

*/

// let age = 20;
// let price = 99.5;

/*
JavaScript uses Number for both integers and decimals.

--------------------------------------------------

3. BOOLEAN
----------

Boolean has only two values:

true
false

It is commonly used for conditions.

*/

// let isLoggedIn = true;
// let isStudent = false;

/*
--------------------------------------------------

4. UNDEFINED
------------

A variable is undefined when it has been declared
but no value has been assigned to it.

*/

// let result;

/*
result is undefined.

--------------------------------------------------

5. NULL
-------

null represents an intentional absence of a value.

*/

// let selectedUser = null;

/*
undefined:
Value has not been assigned.

null:
We intentionally say there is no value.

--------------------------------------------------

6. BIGINT
---------

BigInt is used for very large integers.

*/

// let bigNumber = 12345678901234567890n;

/*
The n at the end indicates a BigInt.

--------------------------------------------------

7. SYMBOL
---------

Symbol creates a unique value.

*/

// let id = Symbol("id");

/*
Symbols are mainly used when unique identifiers
are required.

--------------------------------------------------

8. OBJECT
---------

Objects are used to store related data in
key-value pairs.

*/

let student = {
    name: "Mahi",
    age: 20,
    course: "IT"
};

/*
--------------------------------------------------

CHECKING DATA TYPE
------------------

Use typeof to check the type of a value.

*/

console.log(typeof "Mahi");     // string
console.log(typeof 20);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined

/*
IMPORTANT
---------

typeof is an operator used to determine the
data type of a value.

--------------------------------------------------

QUICK REVISION

Variable:
A named reference used to store a value.

let:
Used when the value can be reassigned.

const:
Used when the variable should not be reassigned.

String:
Text.

Number:
Numeric value.

Boolean:
true or false.

Undefined:
Declared but no value assigned.

Null:
Intentional absence of a value.

Object:
Collection of related data.

typeof:
Used to check the type of a value.
==================================================
*/