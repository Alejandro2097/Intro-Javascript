
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 1001001,
        lat: 12141,
        lng: 1231251,
    }
}

console.log(persona);

const persona2 = {...persona}

console.log(persona2);