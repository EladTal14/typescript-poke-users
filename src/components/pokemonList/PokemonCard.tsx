import React, {useEffect, useState} from 'react';
import {generateRandColor} from "../../services/util";
import {Draggable} from 'react-beautiful-dnd'
import Skeleton from '@material-ui/lab/Skeleton';

interface IPokemonCard {
    pokemon: any;
    handleFavourites: Function;
    index: number;
    isLoading: boolean;
}


export const PokemonCard: React.VFC<IPokemonCard> = ({pokemon, handleFavourites, index, isLoading}) => {
    const [currPic, setCurrPic] = useState(pokemon.sprites.front_default)
    const [indexPic, setIndexPic] = useState(0)
    const [getColor, SetGetColor] = useState(generateRandColor())
    const divStyle = {
        backgroundColor: getColor
    }

    const pictures = Object.values(pokemon.sprites).filter((pic: any) => typeof pic === "string")

    useEffect(() => {
        if (pictures?.length) {
            const intervalId = setInterval(() => {
                if (indexPic === pictures.length - 1) setIndexPic(0)
                else setIndexPic(indexPic + 1)
                setCurrPic(pictures[indexPic])
            }, 2000)
            return () => clearInterval(intervalId);
        }
    }, [indexPic, pictures])

    return (
        <>
            {isLoading && <Skeleton variant="rect" animation="wave" width={120} height={160}/>}
            {!isLoading && <Draggable draggableId={pokemon.name} index={index}>
                {provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div
                            style={divStyle} key={pokemon.id} className="pokemon-card"
                            onClick={() => handleFavourites(pokemon)}>
                            <img src={currPic} alt="pokemon-pic"/>
                            <div className="card-desc">
                                <p>{pokemon.name}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>}
        </>
    );
}

