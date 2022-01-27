import React from "react";
import Pumpking from "./assets/loading_pumpkin.gif";
import Ghost from "./assets/ghost.gif";
import styled from "styled-components";


const OuterWrapper = styled.div`
    background: #000000;
    width: 100vw;
    height: 100vh;
`;

const StyledWrapper = styled.div`
    display: flex;
    background: #000000;
    justify-content: center;
    height: 70vw;
    flex-direction row-reverse

`;

const StyledHeader = styled.h1`
    text-align: center;
    color: #FFF;
    font-size: 24px;
    font-family: Roboto; 
    margin-top: 1rem;
`;

const Week1 = () => (  
 <OuterWrapper>
    <StyledWrapper>
        <div>
            <center><img src={Ghost} alt="ghost" /></center>
            <StyledHeader>Loading trick or treats</StyledHeader>
            <br />
            <center><img src={Pumpking} alt="pumpkin" /></center>
        </div>
    </StyledWrapper>
 </OuterWrapper>
);

export default Week1;