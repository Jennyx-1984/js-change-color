//I parte, cambiar color y texto a darkblue
function changeColor(){
    //Escribe tu código aquí
    const background = document.querySelector('.container');
    if (background) {
        background.style.backgroundColor = 'darkblue';
    }
    
};

function changeText(){
    //Escribe tu código aquí
    const text = document.getElementById('text'); 
    if (text) {
        text.innerHTML = 'darkblue';
    }
}; 

function changeStyles(){
    //Escribe tu código aquí
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}