const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentValue = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentValue = '';
            display.value = '';
        } else if (value === 'DEL') {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        } else if (value === '=') {
            try {
                currentValue = eval(currentValue);
                display.value = currentValue;
            } catch {
                display.value = 'Error';
            }
        } else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
