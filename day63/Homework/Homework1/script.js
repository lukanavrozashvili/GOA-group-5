function deposit(){
    let amount = document.getElementById("amount").value;
    if(amount == ""){
        window.alert("ჩაწერეთ თანხის რაოდენობა რათა შეავსოთ თანხა")
    }
    let currentBalance = parseFloat(document.getElementById('balance').textContent);
    let newBalance = + currentBalance + parseFloat(amount);

    document.getElementById('balance').textContent = newBalance;
    document.getElementById('amount').value = "";
}
function withdraw(){
    let amount = document.getElementById("amount").value;
    if(amount == ""){
        window.alert("ჩაწერეთ თანხის რაოდენობა რათა გაიტანოთ თანხა")
    }

    let currentBalance = parseFloat(document.getElementById("balance").textContent);
    let newBalance =  currentBalance - parseFloat(amount);

    document.getElementById('balance').textContent = newBalance;
    document.getElementById('amount').value = "";
    
    if(newBalance < 0){
        window.alert("შეტანილი რიცხვი აღემატება ბალანს");
    }
}

// davaleba 3
const personInfo = {
    name: "დათო",
    lastname:"გრძელიშვილი",
    age: 123,
}
console.log(personInfo)
function info(){
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");

    p1.textContent = "gio"
    p2.textContent = "xundadze"
    p3.textContent = 15
}