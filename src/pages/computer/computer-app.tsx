import {getAllComputers} from '../../services/computers-json-server-api'
import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {AddEditComputer} from "./add-edit-computer";
import {CartContext} from "../../store/react-context";
import {Modal} from "../../components/common/modal";
import {ComputerList} from "../../components/computer-list/computer-list";


export const ComputerApp = () => {
    const {setAllComputers, computers} = useContext(CartContext)

    useEffect(() => {
        (async () => {
            const computerData = await getAllComputers()
            setAllComputers(computerData)
        })()
    }, [])

    if (computers?.length === 0) {
        return <div>wait...</div>
    }

    return (
        <StyledComputersApp>
            <Modal/>
            <AddEditComputer/>
            <h2>Computer list</h2>
            <p>Sort computers</p>
            <ComputerList computers={computers}/>
        </StyledComputersApp>
    );
};
const StyledComputersApp = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #88b8d7;

`
