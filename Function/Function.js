// function  = A function is section of reusable code .
//            declare code once use it whenever you wnat.
//            call the function to execute tha code inside the fucntion.

// okay so if you use console.log inside function then you can write function name outside the function and get the output
// of the function but if you use return statment inside the function then you have to use console.log outside the function to get the o/p of the function.


//  1. simple fuction
// function dayofweek(day){
//     console.log("Today is Monday");
//     console.log("Today is Tuesday");
//     console.log("Today is Wednesday");
//     console.log("Today is Thursday");
//     console.log("Today is Friday");
//     console.log("Today is Saturday");
//     console.log("Today is Sunday");
//     console.log(`hay mahi can you let me know what is the day today ${day}`);
// }
// dayofweek("Sunday");
// dayofweek();

// // 2. function with parameter 
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }
// function iseven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isodd(number){
//     return number % 2  !== 0 ? true:false;
// }

// // okay so for the above function iseven and isodd we can also write with if and else statment and also with the ternary(?) operator as well.

// function isvalidnumber(number){
//     return typeof number === "number" && !isNaN(number);
// }
// // Return true if number is actually a number and isn't an invalid number; otherwise return false
// //  number give number &&  !isNaN(NUMBER) = NUMBER is not a number then return false otherwish return true.


// console.log(isvalidnumber("yes"));
// console.log(iseven(10));
// console.log(iseven(15));
// console.log(isodd(10));
// console.log(isodd(15));
// console.log(add(10,20));
// console.log(sub(10,30));
// console.log(mul(10,40));
// console.log(div(60,20));


// 3.Greeting function(Take a person's name and print a greeting.)

// function greeting(name){
//     return ` Hello ${name}, Welcome to the venture lanucher team.`;
// }
// console.log(greeting("Mahi"));
// console.log(greeting("Aniket"));
// console.log(greeting("Aryan"));



// // 4.Add two numbers(Take two numbers and return their sum.)
//  function addtwonumber(num1,num2){
//     return num1 +num2;
//  }
//  console.log(addtwonumber(10,20));



// 5. Square a number(Take a number and return its square.)
// function square(number){
//    console.log(number * number );
// }
// square(5);
// square(3);
// square(25);



// 6.Calculate age(Take birth year and calculate approximate age.)
// function calculateage(yearofbirth){
//     const recentyear=new Date().getFullYear();
//     return recentyear - yearofbirth;
// }
// console.log(calculateage(2007));


// function calculateage(yearofbirth){
//     console.log(`your age is ${new Date().getFullYear() - yearofbirth}`);
// }
// calculateage(2014);


// 7.heck voting eligibility(Take age → return whether the person can vote.)
// function votingeligiblity(age,name){
//     if(age >= 18){
//         return `${name} you are eligible for the votings`;
//     }
//     else {
//         return `${name}  you are not eligible for the votings`;
//     }
// }
// console.log(votingeligiblity(20, "Rudransh"));
// console.log(votingeligiblity(15,"shivansh"));


// 8. Find the larger number(Take two numbers → return the larger one.)
// function largernumber(num1,num2){
//     if(num1>num2){
//         return `${num1} is larger than ${num2}`;
//     }
//     else if(num1 < num2){
//         return `${num2} is larger than ${num1}`;
//     }
//     else{
//         return `${num1} and ${num2} are equal `;
//     }
// }
// console.log(largernumber(10,20));
// console.log(largernumber(50,20));
// console.log(largernumber(20,20));


// 9. Calculate grade(Take marks → return A/B/C/D/F.)

function grades(marks){
    if(marks >=90 && marks <=100){
        return "A";
    }
    else if(marks >=80 && marks <90){
        return "B";
    }
    else if(marks >=70 && marks <80){
        return "C";
    }
    else if(marks >=60 && marks <70){
        return "D";
    }
    else {
        return "F";
    }
}
console.log("your grades is "+ grades(91));
console.log("your grades is "+ grades(80));
console.log("your grades is "+ grades(67));
console.log("your grades is "+ grades(86));
console.log("your grades is "+ grades(54));
console.log("your grades is "+ grades(-1));



// From now on
// Whenever you practice more JavaScript:
// git add .
// git commit -m "practice: add JavaScript exercises"
// git push

