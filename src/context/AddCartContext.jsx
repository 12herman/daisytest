import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const AddCartContext = createContext();

export const AddCartProvider = ({ children }) => {
  
    const [cartData, setCartData] = useState([]);

 
  // create
  const addtocartAddData = (data)=>{
    const findExsitingData = cartData.some(fdata=> fdata.id === data.id);
    if(!findExsitingData){
        setCartData((pre)=>[...pre,data]);
    }
    else{
        toast('Already select click the basket icon top left corner', {
            icon: '⚠️',
          });
       console.log("Already select click the basket icon top left corner");
    }
  };

  // update
  const updateCartData = (data)=>{
    console.log(cartData);
  }

  // update by id
  const updateCartWeightById = (id, newWeight) => {
    setCartData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const weight = parseFloat(newWeight);
          return {
            ...item,
            weight: newWeight,
            mrp: item.mrp / item.weight * weight,
            sellingprice: item.sellingprice / item.weight * weight,
          };
        }
        return item;
      })
    );
  };
  

  // remove all
  const removeCartData = ()=> setCartData([]);

  // remove by id
  const removeCartDataById = (id)=> setCartData((pre)=> pre.filter(item => item.id !== id))


  // buy now
  const buyNowCart = (data)=>{
    const findExsitingData = cartData.some(fdata=> fdata.id === data.id);
    if(!findExsitingData){
        setCartData((pre)=>[...pre,data]);
    }
  };
  
  

  const cartcontext = {
    cartdata: cartData,
    cartstate: addtocartAddData,
    updatecartstate:updateCartData,
    removeallcart:removeCartData,
    buycart:buyNowCart,
    removebycartid:removeCartDataById,
    updateweightcartid:updateCartWeightById
  };

  return (
    <AddCartContext.Provider value={cartcontext}>
      {children}
    </AddCartContext.Provider>
  );
};


export const useAddCartContext = () => useContext(AddCartContext);
