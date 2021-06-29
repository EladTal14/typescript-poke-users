import React, {useCallback, useEffect, useState} from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {PokemonList} from "./components/pokemonList/PokemonList";
import {Favourites} from "./components/favourites/Favourites";
import {getItemFromStorage, SetItemToStorage} from "./services/localStorage";
import {getPokemons} from "./services/api";
import {Pokemon} from "./interfaces/pokemon";

export const PokemonApp = () => {
        const [pokemons, setPokemons] = useState<Pokemon[]>([])
        const [nextUrlPokemons, setNextUrlPokemons] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
        const [prevUrlPokemons, setPrevUrlPokemons] = useState<string>(nextUrlPokemons)
        const [favourites, setFavourites] = useState<Pokemon[]>(getItemFromStorage('favourites') || [])
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState('')
        useEffect(() => {
            setError('')
            const getpokesFromStorage = getItemFromStorage('pokemons')
            if (!getpokesFromStorage || nextUrlPokemons === prevUrlPokemons) {
                (async function () {
                    setIsLoading(true)
                    const {pokemons, nextUrl, errMessage} = await getPokemons(nextUrlPokemons)
                    if (errMessage !== undefined) {
                        setError(errMessage)
                        return
                    }
                    SetItemToStorage('pokemons', pokemons)
                    setPokemons(pokemons)
                    setPrevUrlPokemons(nextUrlPokemons)
                    setNextUrlPokemons(nextUrl)
                    setIsLoading(false)
                })()
            } else {
                setPokemons(getpokesFromStorage)
            }
        }, [nextUrlPokemons, prevUrlPokemons]);


        const handleFavourites = useCallback((pokemon: Pokemon) => {
            const isPokemonInFavourites = favourites.find((favourite: Pokemon) => favourite.id === pokemon.id)
            if (!isPokemonInFavourites) {
                const newFavourites = [...favourites, {...pokemon}]
                SetItemToStorage('favourites', newFavourites)
                setFavourites(newFavourites)
            }
        }, [])

        const handleRemoveFavourites = (id: number) => {
            const newFavourites: Pokemon[] = getItemFromStorage('favourites').filter((pokemon: Pokemon) => pokemon.id !== id)
            SetItemToStorage('favourites', newFavourites)
            setFavourites(getItemFromStorage('favourites'))
        }

        const reorder = (list: Pokemon[], startIndex: number, endIndex: number) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        }

        const onDragEnd = (result: DropResult) => {
            if (!result.destination) {
                return;
            }
            const items: Pokemon[] = reorder(
                pokemons,
                result.source.index,
                result.destination.index
            );
            setPokemons(items);
        }

        return (
            <div>
                {error && <p>{error}</p>}
                {!error && <DragDropContext onDragEnd={onDragEnd}>
                    <PokemonList isLoading={isLoading} pokemons={pokemons} handleFavourites={handleFavourites}/>
                </DragDropContext>}
                <button className="see-more" onClick={() => setPrevUrlPokemons(nextUrlPokemons)}>See more pokes</button>
                <Favourites favourites={favourites} handleRemoveFavourites={handleRemoveFavourites}/>

            </div>
        );
    }
;
