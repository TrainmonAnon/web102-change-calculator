// Write your JavaScript here
function calculateChange(due, received){
    var changeLeft = Math.round(received * 100 - due * 100);
    var dollars = Math.floor(changeLeft / 100);
    changeLeft -= dollars * 100;
    var quarters = Math.floor(changeLeft / 25);
    changeLeft -= quarters * 25;
    var dimes = Math.floor(changeLeft / 10);
    changeLeft -= dimes * 10;
    var nickels = Math.floor(changeLeft / 5);
    changeLeft -= nickels * 5;
    var pennies = Math.floor(changeLeft / 1);

    document.getElementById("dollars-output").innerText = dollars;
    document.getElementById("quarters-output").innerText = quarters;
    document.getElementById("dimes-output").innerText = dimes;
    document.getElementById("nickels-output").innerText = nickels;
    document.getElementById("pennies-output").innerText = pennies;
}

function clickEventHandler(){
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    calculateChange(amountDue, amountReceived);
}
document.getElementById("calculate-change").onclick = clickEventHandler;