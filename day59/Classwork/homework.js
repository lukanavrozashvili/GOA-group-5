function mathEqual(){
    const number = document.getElementById("num1")
    const secondnumber = document.getElementById("num2")
    const oper = document.getElementById("operation")
    const paragraph = document.getElementById("paragraph")

    const num1 = parseFloat(number.value);
    const num2 = parseFloat(secondnumber.value);
    const operation = oper.value;
    if(operation == "+"){
        paragraph.textContent = num1 + num2
    }
    else if(operation == "-"){
        paragraph.textContent = num1 - num2
    }
    else if(operation == "*"){
        paragraph.textContent = num1 * num2
    }
    else if(operation == "/"){
        paragraph.textContent = num1 / num2
    }
    else{
        window.alert("please enter only number and +,-,*,/")
    }
}