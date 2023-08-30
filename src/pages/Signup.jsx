import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formvalidation } from "../utility/Formvalidation";
import Login from "./Login";
import '../Styles/Signup.css'
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";

import SignupImage from '../assets/SignupImage.jpg'


const Signup = () => {

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
    cartItems : [],
    cartAddedItems : []
  });

  const [tempEmail, setTempEmail] = useState();


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setUserData({ ...userData, [name]: value });

    console.log(name ,value)
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if(Formvalidation(userData)){
      console.log(userData);
      setTempEmail(userData.email)
      setUserData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        role: "",
        cartItems : [],
        cartAddedItems : []
      })

      localStorage.setItem(`${userData.email}`, JSON.stringify(userData));
    }
    
  };

  const handleStorage = () => {
    const newData = JSON.parse(localStorage.getItem(`${userData.email}`));
    console.log(newData);
  };

  const handleDeleteStorage =()=>{
    localStorage.clear()
  }

  return (
    <>
      <div className="flex-container">

      <div className="ImageContainer">
          <img className="loginImage" src={SignupImage} alt="" />
        </div>

        <div>
        <FormControl>
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="First name"
            type="text"
            name="fname"
            onChange={handleChange}
            value={userData.fname}
          />
          </div>

          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Last name"
            type="text"
            name="lname"
            onChange={handleChange}
            value={userData.lname}
          />
          </div>
          
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          </div>
          
          <div>
          <TextField className="formItems"
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          </div>

          <div>
          <FormLabel id="role">Role</FormLabel>

          <RadioGroup
          row
          aria-labelledby="role"
          name="role"
        >
        <FormControlLabel value="Admin" control={<Radio name="role" onChange={handleChange}  />} label="Admin" />
        <FormControlLabel value="Vendor" control={<Radio name="role" onChange={handleChange} />} label="Vendor" />
        <FormControlLabel value="Customer" control={<Radio name="role" onChange={handleChange} />} label="Customer" />
      </RadioGroup>
      </div>

         

          <div>
            <FormControlLabel 
              control={<Checkbox name="terms" id="terms"/>}
              label="I agree with Terms of service"
            />
            </div>

          <div>
          <Button className="formItems" size="large" type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
          

          <div>
        <Typography>  Already have an account? <Link to="/login">Sign-in</Link> </Typography>
      </div>
      <div>
        <Button color="error" variant="outlined" onClick={handleStorage}>Get local storage DATA</Button>
      </div>
      <div>
        <Button color="error" variant="outlined" onClick={handleDeleteStorage}>Delete Local Storage</Button>
      </div>



        </FormControl>
        </div>


      </div>
      
    </>
  );
};

export default Signup;
