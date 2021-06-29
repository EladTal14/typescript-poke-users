import {CartContext} from './react-context'
import React, {useReducer} from "react";
import {IComputer} from "../interfaces/computer";


type State = {
    isEdit: boolean;
    computerToEdit: IComputer ;
    computers: IComputer[],
    isDelete: boolean
};

const defaultCartState: State = {
    isEdit: false,
    computerToEdit: {title:'',price:0},
    computers: [],
    isDelete: false
};

type Action =
    { type: 'TO_EDIT', payload: boolean }
    | { type: 'TO_ADD', payload: boolean }
    | { type: 'EDIT_COMPUTER', payload: IComputer }
    | { type: 'ADD_COMPUTER', payload: IComputer }
    | { type: 'GET_ALL_COMPUTERS' }
    | ({ type: 'SET_ALL_COMPUTERS', payload: IComputer[] })
    | { type: 'CURR_COMPUTER', payload: IComputer }
    | { type: 'REMOVE_COMPUTER', payload: number }
    | { type: 'TOGGLE_DELETE_MODAL' };

const cartReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "TOGGLE_DELETE_MODAL": {
            return {...state, isDelete: !state.isDelete}
        }
        case "CURR_COMPUTER": {
            return {...state, computerToEdit: action.payload}
        }
        case "SET_ALL_COMPUTERS": {
            return {...state, computers: action.payload}
        }
        case "TO_EDIT": {
            return {...state, isEdit: action.payload};
        }
        case "TO_ADD": {
            return {...state, isEdit: action.payload}
        }
        case "ADD_COMPUTER": {
            return {...state, computers: [...state.computers, action.payload]}
        }
        case 'EDIT_COMPUTER': {
            const newComputers = [...state.computers]
            const newComputerIndex = newComputers.findIndex((computer: IComputer) => computer.id === action.payload.id)
            newComputers.splice(newComputerIndex, 1, action.payload)
            return {...state, computers: newComputers}
        }

        case "REMOVE_COMPUTER": {
            const newComputers = state.computers.filter((computer: IComputer) => computer.id !== action.payload)
            return {...state, computers: newComputers}
        }
        default:
            return defaultCartState
    }
};
export const CartProvider: React.FC = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const changeToAdd = () => {
        dispatchCartAction({type: 'TO_ADD', payload: false});
    };
    const changeToEdit = () => {
        dispatchCartAction({type: 'TO_EDIT', payload: true});
    };
    const addComputer = (computer: IComputer) => {
        dispatchCartAction({type: 'ADD_COMPUTER', payload: computer});
    };
    const editComputer = (computer: IComputer) => {
        dispatchCartAction({type: 'EDIT_COMPUTER', payload: computer});
    };
    const setAllComputers = (computers: IComputer[]) => {
        dispatchCartAction({type: 'SET_ALL_COMPUTERS', payload: computers});
    }
    const removeComputerContext = (id: number) => {
        dispatchCartAction({type: 'REMOVE_COMPUTER', payload: id});
    }
    const currComputer = (computer: IComputer ) => {
        dispatchCartAction({type: 'CURR_COMPUTER', payload: computer})
    }
    const toggleDelete = () => {
        dispatchCartAction({type: 'TOGGLE_DELETE_MODAL'})
    }
    const cartContext = {
        setAllComputers: setAllComputers,
        changeToAdd: changeToAdd,
        changeToEdit: changeToEdit,
        editComputer: editComputer,
        addComputer: addComputer,
        removeComputerContext: removeComputerContext,
        currComputer: currComputer,
        toggleDelete: toggleDelete,
        computerToEdit: cartState.computerToEdit,
        isEdit: cartState.isEdit,
        computers: cartState.computers,
        isDelete: cartState.isDelete
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
};