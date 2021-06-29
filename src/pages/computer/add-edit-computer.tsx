import React, {useContext, useState} from "react";
import styled from "styled-components";
import {CartContext} from "../../store/react-context";
import {addComputer, editComputer} from "../../services/computers-json-server-api";
import {usePutInput} from "../../hooks/use-put-input";
import {useInputMax} from "../../hooks/use-input-max";
import {InputNames} from "../../enums/input-names";

export const AddEditComputer: React.VFC = () => {
        const {
            changeToAdd,
            isEdit,
            computerToEdit,
            addComputer: addComputerContext,
            editComputer: editComputerContext,
            currComputer
        } = useContext(CartContext)

        // const {inputToPut: title, setInputToPut: setTitle} = usePutInput(computerToEdit,InputNames.title );
        const {
            value: title,
            isValid,
            hasError,
            valueChangeHandler,
            inputBlurHandler
        } = useInputMax((value) => value.trim() === '')
        const {inputToPut: price, setInputToPut: setPrice} = usePutInput(computerToEdit, 'price');
        const [inputInvalid, setInputInvalid] = useState(false);
        let formIsValid = false;
        if (inputInvalid) {
            formIsValid = true;
        }
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value)
            if (e.target.type === 'number') {
                setPrice(+e.target.value);
            }
            if (title.trim() === '' || price === 0) {
                setInputInvalid(false)
            } else {
                setInputInvalid(true)
            }
        };

        const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if ("id" in computerToEdit) {
                editComputer({title: title as string, price: price as number, id: computerToEdit.id})
                    .then(comp => {
                        editComputerContext(comp)
                        currComputer({title: '', price: 0})
                    })
            } else {
                addComputer({title: title as string, price: price as number})
                    .then(comp => {
                        addComputerContext(comp)
                        currComputer({title: '', price: 0})
                    })
            }
            // setTitle('')
            setPrice(0)
            changeToAdd()
        }

        return (
            <StyledAddEdit>
                <h2>{isEdit ? 'Edit ' : 'Add'} item </h2>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <input onBlur={inputBlurHandler} className={`${inputInvalid ? 'invalid' : ''}`} type="text"
                               onChange={valueChangeHandler}
                               value={title}/>
                        {inputInvalid && <p>input invalid.</p>}
                    </div>

                    <input type="number" onChange={handleChange} value={price}/>
                    <button disabled={!formIsValid} type='submit'>{isEdit ? 'Edit ' : 'Add'} item</button>
                </form>
            </StyledAddEdit>
        );
    }
;

const StyledAddEdit = styled.div`
  background-color: #787878;
  box-shadow: 1px 3px 5px black;
  padding-bottom: 10px;
  border-radius: 0 0 15px 15px;

  .invalid {
    background-color: #fce4e4;;
    border: 1px solid #fcc2c3;
  }
`

