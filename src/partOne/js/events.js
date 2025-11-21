import { changeStyles } from "./partOne.js";


//Aquí codificaremos el evento que disparará el botón "Click me"
const button = document.querySelector('button');

button.addEventListener('click', changeStyles);