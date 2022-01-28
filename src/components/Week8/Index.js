import React, {useState} from "react";
import styled from "styled-components";
import star from "./assets/smiling-star.gif";

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

const StyledModal = styled.div`
    position: fixed;
    z-index:500;
    width: 298px;
    height: 206px;
    background-color: #84BEBE;
`;

const StyledModalWrapper = styled.div`
   
    position: fixed;
    width: 298px;
    height: 206px;
    top: 450px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; 
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
`;

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.9rem;
    font-size: 14px;
    color: white;
    cursor: pointer;
`;

const SStar = styled.div`
    margin-top: -5vh;


`;

const StyledButton = styled.button`
    height: 49px;
    width: 231px;
    background: #A1D3D3;
    border-radius: 4px;
    color: #ffff;
    text-align: center;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: #84BEBE;
  }
`;

const Modal = (props) => {

    // show={showModal} onClose={handleClose}

    const { show, onClose, children } = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (<>
        {show && (<StyledModalWrapper onClick={onClose}>
            <StyledModal onClick={blockClick}><StyledModalHeader ><span onClick={onClose}> X </span></StyledModalHeader>
                {children}
            </StyledModal>
        </StyledModalWrapper>)}



    </>)
}

const Week8 = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);

    return <>
    <StyledWrapper>
        <SStar><img width="300px" height="300px" src={star}/></SStar>
            <Modal show={showModal} onClose={handleClose}>

                <center><p><br />Hello World! </p></center>
            </Modal>
                            <br />
                        <br />
                    <br />
                <br />
            <br />
    <br />
    <br />
    <br />
        <br />
            <br />
                <br />

        <StyledButton onClick={handleClick}> Click me </StyledButton>
        </StyledWrapper></>
}

export default Week8;