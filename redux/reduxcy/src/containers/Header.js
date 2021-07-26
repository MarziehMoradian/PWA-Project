import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import LogOutModal from "../components/LogOutModal";
import ClaculateNumber from '../components/calculateNumber';
const Header = () => {
   const {modal, handleModal, ModalContent} = useContext(ModalContext); 
   const handleClick = () =>{
      handleModal(
        <LogOutModal/>
        
      );
   }
  return (
    <div className="ui grid fixed menu">
      <div className="ui grid container center">
        <h2>Fake</h2>
        <ClaculateNumber/>
       
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  );
};

export default Header;