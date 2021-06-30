import styled from "styled-components";
import {Backdrop} from "@material-ui/core";
import React, {useContext} from "react";
import {CartContext} from "../../store/react-context";
import {removeComputer} from "../../services/computers-json-server-api";
import {EBoolean} from "../../enums/boolean";

export const Modal: React.FC = () => {
    const {isDelete, toggleDelete, computerToEdit, removeComputerContext, currComputer,changeToAdd} = useContext(CartContext)

    const onRemoveHandler = async () => {
        if ("id" in computerToEdit) {
            const isDeletedFromDB = await removeComputer(computerToEdit.id as number)
            if (isDeletedFromDB) {
                removeComputerContext(computerToEdit.id as number);
            } else {
                console.warn('couldn`t delete item');
            }
        }
    }
    const handleUserAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (+e.currentTarget.value) {
            onRemoveHandler()
        }
        toggleDelete()
        currComputer({title: '', price: 0})
        changeToAdd()
    }
    return (
        <>
            <Backdrop open={isDelete} onClick={toggleDelete} style={{zIndex: 1}}/>
            <StyledModal isDelete={isDelete}>
                <h2>Are you sure you want to delete the computer?</h2>
                <div>
                    <button onClick={handleUserAnswer} value={EBoolean.no}>No</button>
                    <button onClick={handleUserAnswer} value={EBoolean.yes}>Yes</button>
                </div>
            </StyledModal>
        </>
    );
};

const StyledModal = styled.div<{ isDelete: boolean }>`
  display: ${props => props.isDelete ? 'flex' : 'none'};
  width: 400px;
  height: 300px;
  border-radius: 50px;
  background-color: lightblue;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & button {
      width: 70px;
      height: 40px;
      border-radius: 5px;
    }
  }
`

