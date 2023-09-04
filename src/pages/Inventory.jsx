import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemsCard2 from "../components/ItemsCard2";
import "../Styles/Inventory.css";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Inventory = () => {
  const location = useLocation();

  const userCart = location.state.loggedUser.id
  const cartItems = JSON.parse(localStorage.getItem(userCart));

  const [cart, setCart] = useState(cartItems);
 

  

  const handleDelete = (itemId) => {
    const filteredCart = cart.filter((item, key) => {
      return item.id !== itemId;
    });
    setCart(filteredCart);
  };

  const handleIncrement =(item)=>{
    // console.log(item.quantity);
    const newCart = cart.map((ele)=>{
      return ele.id === item.id ? {...ele, 'quantity': ele.quantity + 1} : {...ele}
    })
    setCart(newCart)
  }

  const handleDecrement=(item)=>{
    // console.log(item.quantity);
    const itemQuantity = item.quantity
      if(itemQuantity !== 1){
       
        const newCartItems = cart.map((ele)=>{
          return (
            ele.id === item.id ? {...ele, 'quantity': Math.max(ele.quantity - 1,1)} : {...ele}
          )
        })
        setCart(newCartItems)

      }
      else {
        const filteredCart = cart.filter((ele)=>
          ele.id !== item.id
        )
        setCart(filteredCart)
      }
  }

  useEffect(() => {
    // const updatedUser = { ...loggedUser, cartItems: cart };
    localStorage.setItem(`${userCart}`, JSON.stringify(cart));
  }, [cart]);

  return (
    <>
    <Navbar loggedUser = {location.state.loggedUser}/>
      <Typography variant="h1">Cart Items</Typography>
      <div className="flex-container-1"></div>
      <div className="itemsContainer">
        {cart?.map((item, key) => {
          return (
            <div key={key}>
              <ItemsCard2 handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleDelete={handleDelete} item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Inventory;
