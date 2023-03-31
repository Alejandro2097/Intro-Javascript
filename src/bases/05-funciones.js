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

const getUser = () => (
     {
        uid: 'ABC123',
        username: 'El_papu1231'
    }
);
const user = getUser();
console.log(user);

//Tarea
// 1. funcion de flecha
// 2. Tiene que retornar un objeto implicito 
// 3. Pruebas
const getUsuarioActivo = (nombre) => ( {
        uid: 'ABC567',
        username: nombre
} )

const usuarioActivo = getUsuarioActivo('Alejandro');

console.log(usuarioActivo);