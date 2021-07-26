import React,{useContext} from 'react';
import { ModalContext } from "../context/modalContext";
const CalculateModal = ({number}) => {
    const {modal, handleModal, ModalContent} = useContext(ModalContext); 
    return (
        <div>
            <h1>Log Out</h1>
            <input value={number} onChange={e => e.target.value}/>
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
 
export default CalculateModal;