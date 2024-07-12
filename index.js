document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button =>{
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (previousInput && operator && currentInput) {
                    currentInput = calculate(previousInput, operator, currentInput);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/','%','^'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(num1, operator, num2) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            case '%':
                return (a % b).toString();
            case '^':
                    return (a ^ b).toString();
            default:
                return '';
        }  
    }
});