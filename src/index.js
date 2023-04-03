import { heroes } from './data/heroes';


const getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}

console.log(getHeroesById(2));