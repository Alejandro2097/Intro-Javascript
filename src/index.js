// Funciones en JS

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola, ${nombre}`;

const saludar4 = () =>  `Hola, Mundo`;

console.log(saludar2('Goku'));
console.log(saludar3('Vegueta'));
console.log(saludar4());