import React from "react";
import {IComputer} from "../interfaces/computer";

interface ICartContext {
    editComputer: (computer: IComputer) => void;
    changeToEdit: () => void;
    changeToAdd: () => void;
    isEdit: boolean;
    isDelete: boolean;
    computerToEdit: IComputer ;
    computers: IComputer[];
    setAllComputers: (computers: IComputer[]) => void;
    removeComputerContext: (id: number) => void;
    addComputer: (computer: IComputer) => void;
    currComputer: (computer: IComputer) => void;
    toggleDelete: () => void;
}

export const CartContext = React.createContext<ICartContext>({
    computers: [],
    toggleDelete: () => {

    },
    removeComputerContext: (id: number) => {

    },
    setAllComputers: (computers: IComputer[]) => {
    },
    editComputer: () => {
    },
    addComputer: () => {
    },
    changeToEdit: () => {
    },
    changeToAdd: () => {
    },
    currComputer: () => {

    },
    isEdit: false,
    computerToEdit: {title: '', price: 0},
    isDelete: false
})