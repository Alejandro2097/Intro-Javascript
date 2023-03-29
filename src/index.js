

const nombre = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombrte + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola '  + nombre
}

console.log(`Este es un texto de saludo ${getSaludo('Aleja')}`)