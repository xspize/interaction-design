import React, {useState} from "react";
import styled from "styled-components";
import closeIcon from "../../assets/closeicon.svg";
import dog from "./assets/dogpf.png";
import social_template from "./assets/Social_template.png";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    & img.dog {
        width: 118px;
        height: 118px;
    
`;

const StyledSideNav = styled.div`
    height: 100vh;
    width: ${(props) => props.open ? '450px' : '0px'};
    transition: 1s;
    position: fixed;
    top: 0;
    left: 0;
    background: #A1D3D3;
`;

const StyledCloseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;
    fill: white;
    margin: 1rem 1rem;
    cursor: pointer;
`;

const StyledNav = styled.li`
    display: flex;
    color: white;
    flex-direction: column;
    & li {
        text-align: center;
        list-style: none;
        font-size: 24px;
        cursor: pointer;
        &:hover {
            background: #84BEBE;
        }
    }
    }
`;

const StyledButton = styled.button`
    height: 49px;
    width: 231px;
    background: #E78B49;
    border-radius: 4px;
    color: #ffff;
    text-align: center;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    margin-top: 1vh;
    margin-left: 10vh;
    &:hover {
        background: #EDECEC;
  }

`;



const Week5 = () => {

    const [navOpen, setNavOpen] = useState(false);
    const handleClose = () => {
        setNavOpen(false);
    }
    const handleOpen = () => {
        setNavOpen(true);
    }

    return (<>
        <StyledWrapper>
            <StyledSideNav open={navOpen}>
                <StyledCloseIcon onClick = {handleClose} src={closeIcon} />
                {
                navOpen &&    
                   ( <StyledNav>
                    <br />
                    <br />
                        <center>
                            <img src={dog}/>
                        </center>
                    <br />
                       <li>Message</li>
                       <li>FAQ</li>
                       <li>Contact Us</li>
                    </StyledNav>
                   )
                }
            </StyledSideNav>
            <center><img src={social_template}/></center>
            <StyledButton onClick={handleOpen}>Start Navigation</StyledButton>


        </StyledWrapper></>
    )
};

export default Week5;

