import './pokemonList.scss'
import {PokemonCard} from "./PokemonCard";
import {Droppable} from 'react-beautiful-dnd'
import React from "react";

export interface IPokemonList {
    pokemons: any;
    handleFavourites: Function;
    isLoading: boolean;
}

export const PokemonList: React.FC<IPokemonList> = ({pokemons, handleFavourites, isLoading}) => {
    return (
        <div className="pokemon-list">
            <h2 className="pokemon-list-title">All Pokemon Data</h2>
            {/*{isLoading && <LinearProgress />}*/}
            { <Droppable droppableId='num' direction="horizontal">
                {provided => (
                    <div className="pokemon-list-container"
                         {...provided.droppableProps}
                         ref={provided.innerRef}>
                        {pokemons.map((pokemon: any, index: number) => {
                            return (<PokemonCard isLoading={isLoading} key={pokemon.id} pokemon={pokemon} index={index}
                                                 handleFavourites={handleFavourites}/>)
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>}
        </div>
    );
};

