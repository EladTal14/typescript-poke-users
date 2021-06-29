import {Pokemon} from "../interfaces/pokemon";

export const getPokemons = async (url: string): Promise<{ pokemons: Pokemon[], nextUrl: string, errMessage?: string }> => {
    try {
        const res = await fetch(url)
        const {results, next} = await res.json()
        const urls = results.map((result: { name: string, url: string }) => result.url)
        const data = urls.map(async (url: string) => {
                const data = await fetch(url)
                return await data.json()
            }
        )
        const pokemons: Pokemon[] = await Promise.all(data)
        return {pokemons, nextUrl: next}
    } catch (err) {
        console.log(err)
        return {pokemons: [], nextUrl: '', errMessage: err?.message}
    }


}
export const getUsers = async (url: string) => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=10')
        const {results} = await res.json()
        return results
    } catch (err) {
        console.log(err)
    }

}