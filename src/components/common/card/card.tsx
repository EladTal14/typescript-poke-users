import React from "react";
import styled from "styled-components";

const StyledCard = styled.div<{ price: number }>`
  background-color: #a6c6cf;
  border: 2px solid black;
  border-radius: 10px;
  min-height: 250px;
  min-width: 200px;
  box-shadow: 1px 2px 8px black;
  max-height: 250px;
  transition: transform 0.3s ease 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & span {
    opacity: 0;
  }

  & div {
    display: flex;
    justify-content: space-evenly;

    & img {
      opacity: 0;
      max-height: 30px;
      max-width: 30px;
      transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out, background-color 0.5s ease-in-out;
      cursor: pointer;
    }
  }

  &:hover {
    & span {
      opacity: 1;
    }

    transform: rotate(5deg) translate(5px) scale(1.05);

    img {
      &:first-child {
        filter: drop-shadow(1px 3px 5px green);
        background-color: green;

        &:hover {
          filter: drop-shadow(1px 1px 1px blue);
          background-color: unset;
        }
      }

      &:hover {
        filter: drop-shadow(1px 1px 1px red);
      }

      opacity: 1;
    }
  }

  & p {
    color: ${props => props.price> 600 ? '#c42929' : '#1b681b'};
  }


`

export const Card: React.FC<{ price: number }> = ({children, price}) => {
    return <StyledCard price={price}>
        {children}
    </StyledCard>
};

