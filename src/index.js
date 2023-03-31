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

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_papu1231'
    }
}

console.log(getUser())