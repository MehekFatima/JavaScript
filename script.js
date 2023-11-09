document.getElementById("btn").onclick = function(){
    const CB = document.getElementById("CB");
    const masterid = document.getElementById("masterid");
    const UPIid = document.getElementById("UPIid");
    const Bankid = document.getElementById("Bankid");
    if(CB.checked){
        console.log("you have submitted the form");
    }
    else{
        console.log("please click on check box");
    }

    if(masterid.checked == true){
        console.log("you have made your payment using MasterCard ");
    }

    else if(UPIid.checked == true){
        console.log("you have made your payment using UPI ");
    }

    else if(Bankid.checked == true){
        console.log("you have made your payment using Bank ");
    }
    else{
        console.log("select any payment method")
    }

}

