document.getElementById("sb").onclick = function(){
    let temp;
    if(document.getElementById("cel").checked){
        temp = document.getElementById("in").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("olabel").innerHTML = `The temperature in celsius is ${temp} °C`;

    }
    else if(document.getElementById("fah").checked){
        temp = document.getElementById("in").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("olabel").innerHTML = `The temperature in Fahrenheit is ${temp} °F`;

    }
    else{
        document.getElementById("olabel").innerHTML = "select a unit";
    }
}

function toCelsius(temp){
    return (temp - 32) * 5/9;
}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
}