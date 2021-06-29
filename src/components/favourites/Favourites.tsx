import './favourites.scss'
import React, {useState} from "react";
import {FavouriteCard} from "./FavouriteCard";
import {Modal} from "../modal/Modal";
import {Pokemon} from "../../interfaces/pokemon";

interface IFavourites {
    favourites: Pokemon[],
    handleRemoveFavourites: Function
}
// const useToggleModal:React.FC<:Boolean>=(isModalShown)=>{
//
// }
export const Favourites: React.FC<IFavourites> = ({favourites, handleRemoveFavourites}) => {
    const [isModalShown, setIsModalShown] = useState(false)

    const handleModalShown = () => {
        setTimeout(() => {
            setIsModalShown(true)
            setTimeout(() => setIsModalShown(false), 3000)
            }, 0)
    }
    // const toggleModal=useToggleModal()
    return (
        <div className="favourites">
            <h2 className="favourites-title">My favourites</h2>
            <Modal isModalShown={isModalShown}/>
            <div className="favourites-list-container">
                {favourites.map((favourite: any) => {
                    return (
                        <FavouriteCard key={favourite.id} favourite={favourite} handleModalShown={handleModalShown}
                                       handleRemoveFavourites={handleRemoveFavourites}/>
                    )
                })}
            </div>
        </div>
    )
}