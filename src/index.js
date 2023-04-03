import { getHeroesById } from "./bases/08-im-exp";


const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {

        // Tarea 
        // importen el
        const heroe = getHeroesById(2);
        console.log(heroe);
        // resolve();
    }, 2000);
    
});


promesa.then(() => {
    console.log('Then de la promesa')
})
