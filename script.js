function add() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').innerText = result;
}

function sub() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseFloat(num1) - parseFloat(num2);
    document.getElementById('result').innerText = result;
}

function multiply() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = parseFloat(num1) * parseFloat(num2);
    document.getElementById('result').innerText = result;
}

function divide() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num2 !== '0') {
        const result = parseFloat(num1) / parseFloat(num2);
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = 'Cannot divide by zero';
    }



}