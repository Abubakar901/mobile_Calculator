let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == '÷') {
            buttonText = "/";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "AC") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else if (buttonText == "C") {
            screenValue = parseInt(screenValue / 10);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}