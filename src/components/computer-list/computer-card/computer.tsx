import React, {useContext} from "react";
import {IComputer} from "../../../interfaces/computer";
import {Card} from "../../common/card/card";
import {CartContext} from "../../../store/react-context";
import trash from '../../../img/trash.png'
import edit from '../../../img/edit.png'

export const Computer: React.VFC<{ computer: IComputer, idx: number }> = ({computer, idx}) => {
    const {changeToEdit, currComputer, toggleDelete} = useContext(CartContext)
    const onEditHandler = () => {
        changeToEdit()
        currComputer(computer)
    }
    const handleRemove = () => {
        currComputer(computer)
        toggleDelete()
    }

    return <Card price={computer.price}>
        <h3>{computer.title}</h3>
        <p>price: ${computer.price}</p>
        <span>actions</span>
        <div>
            <img src={edit} alt="edit" onClick={onEditHandler}/>
            <img src={trash} alt="trash" onClick={handleRemove}/>
        </div>
    </Card>

};


