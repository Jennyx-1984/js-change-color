import { changeStyles } from "./partTwo.js";

//Aquí codificaremos el evento que disparará el botón "Click me"
const button = document.querySelector('.button');

if (button) {
    button.addEventListener('click', () => {
        changeStyles();
    }); 
}