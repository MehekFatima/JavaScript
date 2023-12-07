let array = [20,40,10,5,80,90,45];

function ascending(a,b){
    return a-b;
}
function descending(a,b){
    return b-a;
}
array = array.sort(ascending);
array2 = array.sort(descending);

array.forEach(print=(element)=>console.log(element));
array2.forEach(print=(element)=>console.log(element));
