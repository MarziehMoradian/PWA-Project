import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import LogOutModal from "../components/LogOutModal";

const CalculateNumber = () => {
    const {modal, handleModal, ModalContent} = useContext(ModalContext); 
    const handleClick = () =>{
       handleModal(
         <LogOutModal/>
         
       );
    }
    return (  
       <div>
           <button onClick={handleClick}>0</button>
       </div>
    );
}
 
export default CalculateNumber;