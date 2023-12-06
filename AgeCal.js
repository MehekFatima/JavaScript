/*The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.*/


const calculateAge=(Byear,Cyear)=> {
    let age = Cyear-Byear;
    console.log(`you are either ${age} or${age-1} years old`);
}
calculateAge(2003,2023);
calculateAge(2000,2023);
calculateAge(2005,2023);