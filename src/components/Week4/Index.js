import React, {useState} from "react";
import styled from "styled-components";
import orange from "./assets/orange_icon.png";
import hideIcon from "./assets/hide_icon.svg";
import showIcon from "./assets/show_icon.svg";
import eyetrack from "./assets/eye_track.png";

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    width: 428px;
    height: 726px;
    background: #FFFFFF;
    margin: 0rem 0rem 0rem 66.5rem;
    margin-top: 15rem;
    border-radius: 10px;
`;

const StyledNewUser= styled.button`
    border: 0;
    cursor: pointer;
    background: #ffffff;
    text-align: center;
    margin: 0rem 0rem 0rem 19rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #E78B49

`;

const StyledEmail = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #E78B49

`;

const StyledPassword = styled.p`
    font-family: Roboto;
    margin: -3rem 0rem 0rem 0rem;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #E78B49
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
    height: 63px;
    width: 337px;
    padding-left: 10px;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    margin: -10rem 0rem 0rem 19rem;
    width: 24px;
    height: 24px;
    margin-left: -30px;
    margin-bottom: 50px;
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
    &:hover {
        background: #EDECEC;
  }

`;


const Week4 = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = (e) => {
      setShowPassword(!showPassword);
    };
  
    return (
      <StyledWrapper>
        <StyledNewUser> New user? </StyledNewUser>
        <img src={orange} />
        <br />

        
        <form>
          <p>
          <StyledEmail>Email/Username</StyledEmail>
            <StyledInput
            type="text" name="Email" placeholder="Email" required
             />

          </p>
          <p>
          <StyledEmail>Password</StyledEmail>
            <StyledInput
              type={showPassword ? "text" : "password"} name="password" placeholder="Password" required
            />
            <StyledIcon
              src={showPassword ? hideIcon : showIcon}
              onClick={handleClick}
            ></StyledIcon>
          </p>
          <p>
        <br />
            <center><StyledButton> Sign in </StyledButton></center>
            </p>
        <br/>
        <br/>
        <br/>
         <center> <img src={eyetrack} /> </center>
        </form>
      </StyledWrapper>
    );
};

export default Week4;