import React,{useContext} from 'react';
import { ModalContext } from "../context/modalContext";
const LogOutModal = () => {
    const {modal, handleModal, ModalContent} = useContext(ModalContext); 
    return (
        <div>
            <h1>Log Out</h1>
            <p>Are you</p>
            <button onClick={()=>{
              console.log('logged');
              handleModal();
            }}>yes</button>
            <button onClick={() => {
              handleModal()}}>
                No
                </button>
        </div>
      );
}
 
export default LogOutModal;