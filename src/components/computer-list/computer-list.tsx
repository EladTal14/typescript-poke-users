import React, {useEffect, useState} from "react";
import {IComputer} from "../../interfaces/computer";
import {Computer} from './computer-card/computer'
import {Filter} from "../../pages/computer/filter";
import styled from "styled-components";

export const ComputerList: React.FC<{ computers: IComputer[] }> = ({computers}) => {
        const [filteredComputers, setFilteredComputers] = useState(computers)
        const [filter, setFilter] = useState('')
        const onFilteredComputers = (computers: IComputer[]) => {
            const filteredComputers = computers.filter((computer: IComputer, index) => computer.title.includes(filter))
            return filteredComputers
        }
        useEffect(() => {
            const timeOutId = setTimeout(() => setFilteredComputers(onFilteredComputers(computers)), 800)
            return (() => clearTimeout(timeOutId))
        }, [filter, computers])

        const onSetFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(e.target.value)
        }
        return (
            <>
                <Filter filter={filter} onSetFilter={onSetFilter}/>
                <StyledComputersList>
                    {filteredComputers.length === 0 && <div>No Computers.</div>}
                    {filteredComputers.length > 0 && filteredComputers.map((computer, idx) => <Computer key={computer.id}
                                                                                                        computer={computer}
                                                                                                        idx={idx}/>)}
                </StyledComputersList>
            </>
        );
    }
;

const StyledComputersList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 30px 30px 30px 30px ;
  gap: 10px;
`