console.log('Modificando el Dom')

// Iteración #2: Modificando el DOM

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement('div');
document.body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv2 = document.createElement('div');
let newParr = document.createElement('p');

newDiv2.appendChild(newParr);
document.body.appendChild(newDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
    let newParr = document.createElement ('p')
    // newParr.innerHTML = 'Nuevo elemento "p"'
    newDiv3.appendChild(newParr)
};
document.body.appendChild(newDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newParr2 = document.createElement('p');
let newText = document.createTextNode('Soy dinámico!');

newParr2.appendChild(newText);
document.body.appendChild(newParr2)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let textH2 = document.querySelector('h2.fn-insert-here');
textH2.innerHTML = 'Wubba Lubba dub du'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const appLists = document.createElement('ul')
for (const app of apps) {
    let newApp = document.createElement('li');
    newApp.innerHTML = app;
    appLists.appendChild(newApp);
};
// document.body.appendChild(appLists);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeElement = document.querySelectorAll('.fn-remove-me')
for (const i of removeElement) {
    document.body.removeChild(i)
};

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertNewElement = document.querySelectorAll('div.fn-insert-here')

for (i = 0; i < insertNewElement.length; i++) {
    let newText = document.createElement("p");
    newText.innerText = "Voy dentro!";
    insertNewElement[i].appendChild(newText);
};
