//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js
let isDark = false;
function changeColor(){
    isDark = !isDark;
    /*const color = isDark ? "darkblue" : "red";

    const background = document.getElementById("background");
    if (background) {
        background.style.backgroundColor = color; // Para test
    } else {
        document.body.style.backgroundColor = color; // Para web real
    }*/
   const element = document.getElementById("background") ?? document.body;
    element.classList.toggle("dark-mode", isDark);
    element.style.backgroundColor = isDark ? "darkblue" : "red";
};

function changeText(){
    //Escribe tu código aquí
    const text = document.getElementById('text');
    if (text) {
        text.innerHTML = text.innerHTML === 'darkblue' ? 'red' : 'darkblue';
    }
};

function changeStyles(){
    //Escribe tu código aquí
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}