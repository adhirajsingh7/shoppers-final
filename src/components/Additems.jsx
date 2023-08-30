import React, { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";
import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import "../Styles/Additems.css";

const Additems = ({ loggedUser }) => {

  //Displaying array
  // const getUser = localStorage.getItem(`${loggedUser.email}`)
  const [cart, setCart] = useState(loggedUser.cartItems);

  //Add item to Displaying array
  const [newCart, setNewCart] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [UpdatedUser, setUpdatedUser] = useState(loggedUser);


  const [addtocart, setAddtocart] = useState([]);


  // Handling Form Submission
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewCart({ ...newCart, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setCart([...cart, newCart]);

    // const cartItems = testcart.carItems;
    // setTestCart({ ...testcart, cartItems: [...cart, newCart] });

    setUpdatedUser({...UpdatedUser, cartItems : [...cart ,newCart] })

    localStorage.setItem(`${loggedUser.email}`, JSON.stringify(UpdatedUser));


    // Reseting Form items
    
    // setNewCart({
    //     title : '',
    //     description : '',
    //     price : ''
    // })
  };

  const handleShowLocalStorage = (e) => {
    console.log(loggedUser)
  };

  const handleAddtoCart = (CartItem) => {
    setAddtocart([...addtocart, CartItem]);
    // console.log(CartItem);
  };


  const handleDeletetoCart = (itemTitle) => {
    console.log("item deleted", itemTitle);

    const filteredcart = cart.filter((item) => {
      return item.title !== itemTitle;
    })
    setCart(filteredcart);

    // const filteredLoggedUser = 
    // console.log(loggedUser.cartItems)
    

    // const cartItems = testcart.carItems;
    // setTestCart({ ...testcart, cartItems: filteredcart });
    
    // localStorage.setItem(`${loggedUser.email}`, JSON.stringify(testcart));


    setUpdatedUser({...UpdatedUser, cartItems : filteredcart })

    localStorage.setItem(`${loggedUser.email}`, JSON.stringify(UpdatedUser));
    
  };

  return (
    <>
      <div>
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
                  value={newCart.title}
                />
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={newCart.description}
                />
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Price"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={newCart.price}
                />
              </div>

              <div>
                <Button
                  className="formItems"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Add item
                </Button>
              </div>

              <div>
                <Button color="error" variant="outlined" onClick={handleShowLocalStorage}>
                  Show Local Storage
                </Button>
              </div>
            </FormControl>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="h4">Items List</Typography>
      </div>

      <div className="itemsContainer">
        {cart.map((item, key) => {
          return (
            <div key={key}>
              <ItemsCard
                handleDeletetoCart={handleDeletetoCart}
                handleAddtoCart={handleAddtoCart}
                cart={item}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Additems;
