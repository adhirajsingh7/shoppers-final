import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import loginImage from '../assets/LoginImage.jpg'

const Login = (userData) => {
  // const validUser = JSON.parse(localStorage.getItem(`${userData.email}`))

  const navigate = useNavigate()

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginUser.password === "" || loginUser.password !== validUser.password) {
      alert("Incorrect password");
      return
    }
    navigate('/dashboard',{state : {loggedEmail : loginUser.email}})

    console.log(loginUser);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const validUser = JSON.parse(localStorage.getItem(`${loginUser.email}`));

  const handleStorage = () => {
    console.log(validUser);
    // console.log(loginUser);
  };

  return (
    <>
    
    

      <div className="flex-container">
      
      <div className="ImageContainer">
          <img className="loginImage" src={loginImage} alt="" />
        </div>
        
        <div>
          <form className="LoginForm">
            <div >
            <TextField  className="formItems"
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={loginUser.email}
            />
            </div>
            
            <div>
            <TextField className="formItems"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={loginUser.password}
            />
            </div>
            
            <div>
            <FormControlLabel 
              control={<Checkbox name="remember-me" id="remember-me" />}
              label="remember-me"
            />
            </div>

            <div>
            <Button className="formItems" type="submit" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            </div>
            
            <div>
              <Typography >
              Dont have an account? <Link to="/signup">Sign-up</Link>
              </Typography>
         
        </div>
        <div>
          <Button variant="outlined" onClick={handleStorage}>btn storage</Button>
        </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default Login;
