

const nombre = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombrte + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo() {
    return 'Hola mundo'
}

console.log(`Este es un texto de saludo ${getSaludo()}`)