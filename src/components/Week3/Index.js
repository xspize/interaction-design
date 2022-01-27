import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5FAF1;
`;

const StyledButton = styled.button`
    color: #fff;
    background-color: ${(props) => props.color};
    padding: 1.1rem 4rem;
    font-size: 24px;
    border: 0;
    border-radius: 14px;
    box-shadow: 0 0 0.2rem rgba(0,0,0.3);
    cursor: pointer;
    margin: 1%;
    &:hover {
        opacity: 0.7;
    }

`;

const StyledIcon = styled.img`
    margin: -10rem 0rem 0rem 19rem;
    width: 24px;
    height: 24px;
    margin-left: -30px;
    margin-bottom: 50px;
`;

const Button = (props) => {
    
    const { children, color } = props;

    return <StyledButton color= {color}> {children} </StyledButton>
}

const Week3 = () => {  
    return (
    <StyledWrapper>
        <Button color= "#E78B49"> Button 1 </Button>
        <Button color= "#A1D3D3"> Button 2 </Button>
        <Button color= "#EDB506"> Button 3 </Button>       
    </StyledWrapper>) 
};

export default Week3;