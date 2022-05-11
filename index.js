console.log('JS DOM');

// **Iteración #1: Interacción con el DOM**

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let btnShowMe = document.querySelector('showMe');
console.log(btnShowMe)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pilladoç

let idPillado = document.querySelector('#pillado');
console.log(idPillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const elementP = document.querySelectorAll('p');
console.log(elementP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelectorAll('pokemon');
console.log(pokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const elementTestMe = document.querySelectorAll('data-function');
console.log(elementTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const dataFunction3Character = document.querySelectorAll[2];
console.log(dataFunction3Character);