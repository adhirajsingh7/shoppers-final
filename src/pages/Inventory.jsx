import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemsCard2 from "../components/ItemsCard2";
import "../Styles/Inventory.css";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Inventory = () => {
  const location = useLocation();

  const loggedUserEmail = location.state.loggedUser.email;
  const loggedUser = JSON.parse(localStorage.getItem(loggedUserEmail));

  const [cart, setCart] = useState(loggedUser.cartItems);
  const [cartSize, setCartSize] = useState(loggedUser.cartItems.length)


  const handleDelete = (itemId) => {
    const filteredCart = cart.filter((item, key) => {
      return item.id !== itemId;
    });
    setCart(filteredCart);
    setCartSize(filteredCart.length)
  };

  useEffect(() => {
    const updatedUser = { ...loggedUser, cartItems: cart };
    localStorage.setItem(`${loggedUser.email}`, JSON.stringify(updatedUser));
  }, [cart]);

  return (
    <>
    <Navbar loggedUser = {loggedUser}/>
      <Typography variant="h1">Cart Items - {cartSize}</Typography>
      <div className="flex-container-1"></div>
      <div className="itemsContainer">
        {cart.map((item, key) => {
          return (
            <div key={key}>
              <ItemsCard2 handleDelete={handleDelete} item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Inventory;
