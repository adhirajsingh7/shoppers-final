import React, { useEffect, useRef, useState } from "react";
import ItemsCard from "./ItemsCard";
import { Alert, Button, FormControl, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import "../Styles/Additems.css";

const Additems = ({ loggedUser }) => {

  


  //ItemsList
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ItemsList"))
  );

  //Handling changes to LocalStorage
  useEffect(() => {
    localStorage.setItem("ItemsList", JSON.stringify(items));
  }, [items]);

  //Cart Items

  const userCart = JSON.parse(localStorage.getItem(`${loggedUser.id}`))
  const [cartItems, setCartItems] = useState(userCart);


  const handleAddtoCart = (item) => {

    if (cartItems)
    {
      const found = cartItems.findIndex((ele)=>ele.id === item.id)
      if(found != -1){
       
        const newCartItems = cartItems.map((ele)=>{
          return (
            ele.id === item.id ? {...ele, 'quantity': ele.quantity + 1} : {...ele}
          )
        })
        setCartItems(newCartItems)


      }else {
        setCartItems([...cartItems, item]);
      }

      // setCartItems([...cartItems, item]);
    } 
    else {
      setCartItems([item]);
    }
  };

  useEffect(() => {
    // const UpdatedUser = { ...loggedUser, cartItems: cartItems };
    
    localStorage.setItem(`${loggedUser.id}`, JSON.stringify(cartItems));
  }, [cartItems]);

  //Add item to Displaying ItemsList
  const [newItem, setNewItem] = useState({
    id: uuidv4().slice(0,8),
    title: "",
    description: "",
    price: "",
    quantity : 1
  });

  // Handling Form Changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewItem({ ...newItem, [name]: value });
  };


  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {

    e.preventDefault();

    const {title ,description ,price} = newItem;

    const validationError = {}

    if(!title.trim()){
      validationError.title = "Title is required"
    } 
    if(!description.trim()){
      validationError.description = "Description is required"
    } 
    if(!price.trim()){
      validationError.price = "Price is required"
    } 

    setErrors(validationError)
    
    if(Object.keys(validationError).length === 0){

      if (items) setItems([...items, newItem]);
      else setItems([newItem]);
  
      // Reseting Form items
      setNewItem({
        id : uuidv4().slice(0,8),
        title: "",
        description: "",
        price: "",
        quantity : 1
      });

    }

   
  };

  const handleDeleteItem = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  };

  return (
    <>
      {/* Conditional Add item box  */}

      {loggedUser.role === "Admin" && (
        <div className="flex-container-1">
          <div>
            <Typography variant="h4">Additems</Typography>
          </div>

          <div>
            <FormControl className="LoginForm">
              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={newItem.title}
                />
                {errors.title && <span className="errors">{errors.title}</span>}
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={newItem.description}
                />
                {errors.description && <span className="errors">{errors.description}</span>}
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Price"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={newItem.price}
                />
                {errors.price && <span className="errors">{errors.price}</span>}
              </div>

              <div>
                <Button
                  color="error"
                  className="formItems"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Add item
                </Button>
              </div>
            </FormControl>
          </div>
        </div>
      )}

      <div className="items-list-heading">
        <Typography variant="h4">Items List</Typography>
      </div>

      {
        <div className="itemsContainer">
          {items?.map((item, key) => {
            return (
              <div key={key}>
                <ItemsCard
                  loggedUser={loggedUser}
                  handleDeleteItem={handleDeleteItem}
                  handleAddtoCart={handleAddtoCart}
                  item={item}
                />
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default Additems;
