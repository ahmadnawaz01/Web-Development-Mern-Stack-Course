let screen = "0";
let btns = document.querySelectorAll('.btn');

document.querySelector('input').value = screen;
screen="";
Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (e.target.innerHTML == '=' && screen != "") {
                screen = eval(screen);
                document.querySelector('input').value = screen;
            }
        }

        else if (button.getAttribute('value') == 'C') {
            screen = "";
            document.querySelector('input').value = screen;
        }
        else if (button.getAttribute('value') == 'b') {
            screen = screen.slice(0, -1);
            document.querySelector('input').value = screen;
        }
        else if (button.innerHTML == "+/-") {

        }
        else if(button.getAttribute('value') == '*'){
            screen=screen+"*";
            document.querySelector('input').value = screen;
        }
        else {
            screen = screen + e.target.innerHTML;
            document.querySelector('input').value = screen;
        }


    })
})