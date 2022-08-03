function multiplyBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        sum = num1 * num2 / 30;
        document.getElementById("result").innerHTML = `The rebate amount is: </br>$${sum}`;
}

function getYear() {
        return new Date().getFullYear();
}

document.getElementById("year").innerHTML = 'Copyright © ' + getYear() + ', All rights reserved Jacques Black';

