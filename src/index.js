

const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [, , p3 ]  = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const state = (valor) => {
    return [valor,  () => {console.log('Hola mundo ')}];
}

const [nombre, setNombre] = state('Goku');
setNombre()
console.log(nombre);
