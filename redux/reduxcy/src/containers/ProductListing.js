import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useModalHook} from '../hooks/modalHook';
import ProductComponent from "./ProductComponent";
import { getAllProducts } from "../api/products";
import { getProducts } from "../redux/actions/prouductActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(products);

   let { modal, modalContent, handleModal } = useModalHook();
   console.log({ modal, modalContent, handleModal });
   
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;