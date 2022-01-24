import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    color: #fff;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0.3);
    cursor: pointer;
    margin: 2%;

`;

const Button = (props) => {

    return <StyledButton color= "#6200ee"> Click Me </StyledButton>
}

const Week3 = () => {  
    return (
    <StyledWrapper>

        <Button />

    </StyledWrapper>)
};

export default Week3;