//Use the forEach method to iterate through the array

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element){
    console.log(element);
});

// map method to print squares of an array

let numbers = [1, 2, 3, 4, 5];
function squares(element){
    return Math.pow(element,2);
}
let square = numbers.map(squares);
square.forEach(function(element){
    console.log(element);
});

// same code using forEach method
let numbers = [1, 2, 3, 4, 5];
function squares(element,index,array){
    array[index] = Math.pow(element,2);
}
numbers.forEach(squares);
numbers.forEach(function(element){
    console.log(element);
});


//filter

let age = [18,10,15,20,25,5];
function checkage(element){
    return element>=18;
}
let adult = age.filter(checkage);
function print(result){
    console.log(result);
}
adult.forEach(print);
