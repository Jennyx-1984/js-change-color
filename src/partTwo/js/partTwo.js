//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js
let isDark = false;
function changeColor(){
    isDark = !isDark;
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