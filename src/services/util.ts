import {getItemFromStorage, SetItemToStorage} from "./localStorage";
import {Pokemon} from "../interfaces/pokemon";

// interface IFindAndReplace {
//     key: string,
//     name: string,
//     favourite: Pokemon
// }

export const findAndReplacePokemon = (name: string, favourite: Pokemon) => {
    const favs = getItemFromStorage('favourites')
    const newFav = JSON.parse(JSON.stringify(favs.find((fav: any) => fav.id === favourite.id)))
    const newFavIndex = favs.findIndex((fav: any) => fav.id === favourite.id)
    newFav.name = name
    favs[newFavIndex] = newFav
    SetItemToStorage('favourites', [...favs])
}

export const generateRandColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}