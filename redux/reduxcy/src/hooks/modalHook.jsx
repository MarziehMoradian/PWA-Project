import { useState } from "react";
import axios from "axios";
export const useModalHook = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModal = (content) => {
    console.log(content);
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  let btn = <button>hi</button>;

  return { modal, modalContent, handleModal, btn };
};

export const useFetch = async (url,method) => {
    // let res = await axios({
    //   method: method,
    //   url: url,
    //   headers: { "content-type": "application/json" },
    // }).catch((err) => console.log(err));
    // return {res, method, url };

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    fetch(url, {
      method: "GET",
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json)
    }).catch((err)=>{
      console.log(err)
    });
 return {loading, url}
   
}
