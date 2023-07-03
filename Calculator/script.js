let display = document.getElementById('display');
let result = '';

function appendNumber(number) {
    result += number;
    display.value = result;
}

function appendSymbol(symbol) {
    result += symbol;
    display.value = result;
}

function clearResult() {
    result = '';
    display.value = result;
}

function deleteCharacter() {
    result = result.slice(0, -1);
    display.value = result;
}

function calculate() {
    try {
        let calculatedResult = eval(result);
        display.value = calculatedResult;
        result = '';
    } catch (error) {
        display.value = 'Error';
        result = '';
    }
}
