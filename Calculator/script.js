let ScreenValue = " ";
document.querySelector('#display').value = ScreenValue;

document.getElementById('n1').onclick = function(){
    ScreenValue = ScreenValue +'1';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n2').onclick = function(){
    ScreenValue = ScreenValue +'2';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n3').onclick = function(){
    ScreenValue = ScreenValue +'3';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n4').onclick = function(){
    ScreenValue = ScreenValue +'4';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n5').onclick = function(){
    ScreenValue = ScreenValue +'5';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n6').onclick = function(){
    ScreenValue = ScreenValue +'6';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n7').onclick = function(){
    ScreenValue = ScreenValue +'7';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n8').onclick = function(){
    ScreenValue = ScreenValue +'8';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n9').onclick = function(){
    ScreenValue = ScreenValue +'9';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('n0').onclick = function(){
    ScreenValue = ScreenValue +'0';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('add').onclick = function(){
    ScreenValue = ScreenValue +'+';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('sub').onclick = function(){
    ScreenValue = ScreenValue +'-';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('mul').onclick = function(){
    ScreenValue = ScreenValue +'*';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('divide').onclick = function(){
    ScreenValue = ScreenValue +'/';
    document.querySelector('#display').value = ScreenValue;
}
document.getElementById('C').onclick = function(){
    ScreenValue = '';
    document.querySelector('#display').value = ScreenValue;
}

//operations
document.getElementById('equal').onclick = function(){
   let result = eval(ScreenValue);
    document.querySelector('#display').value = result;
}