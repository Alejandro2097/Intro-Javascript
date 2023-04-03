import { getHeroesById } from "./bases/08-im-exp";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         // Tarea 
//         // importen el
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         // resolve();
//     }, 2000);
    
// });


// promesa.then((heroe) => {
//     console.log('Heroe', heroe)
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        // Tarea 
        // importen el
        const heroe = getHeroesById(id);
        resolve(heroe);
        // resolve();
    }, 2000);
    
    });

}

getHeroeByIdAsync(4).then(heroe => {
    console.log('Heroe', heroe);
})

