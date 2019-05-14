// Write your JavaScript here
function calculateChange(due, received){
    var changeLeft = Math.round(received * 100 - due * 100);
    if (changeLeft < 0){
        console.log('Not enough money')
        changeLeft = Math.abs(changeLeft);
    }
    var dollars = Math.floor(changeLeft / 100);
    changeLeft -= dollars * 100;
    var quarters = Math.floor(changeLeft / 25);
    changeLeft -= quarters * 25;
    var dimes = Math.floor(changeLeft / 10);
    changeLeft -= dimes * 10;
    var nickels = Math.floor(changeLeft / 5);
    changeLeft -= nickels * 5;
    var pennies = Math.floor(changeLeft / 1);

    document.getElementById("dollars-output").innerText = dollars + " Dollar" + plural(dollars);
    document.getElementById("quarters-output").innerText = quarters + " Quarter" + plural(quarters);
    document.getElementById("dimes-output").innerText = dimes + " Dime" + plural(dimes);
    document.getElementById("nickels-output").innerText = nickels + " Nickel" + plural(nickels);
    document.getElementById("pennies-output").innerText = pennies + " Penn"  + ((pennies !=1) ? "ies" : "y");
}
function plural(value){
    return (value !=1) ? "s" : "";
}

function clickEventHandler(){
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    calculateChange(amountDue, amountReceived);
}
document.getElementById("calculate-change").onclick = clickEventHandler;