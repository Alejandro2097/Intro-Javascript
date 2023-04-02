

// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'soldado'
}


const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const Context = ({nombre, edad, clave, rango = 'capitan'}) => {
    //console.log(nombre, edad, clave);
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.1214,
            lng: 131923
        }
    }
}

const {nombreClave, anios, lating:{lat, lng}} = Context(persona);

console.log(nombreClave, anios);
console.log(lat, lng)