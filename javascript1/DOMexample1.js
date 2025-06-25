// function calculate(){
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);
//     let sum = num1+num2;
//     document.getElementById('result').value=sum;
// }

function calculateAmount(){
    let principle = Number(document.getElementById('').value);
    let rate = Number(document.getElementById('rate').value);
    let year = Number(document.getElementById('year').value);
    let amount = (principle*rate*year)/100;
    document.getElementById('amount').value=amount;
    setInterval(5);
}
