import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {

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


  return (
    <>
      <div className="login-main-container">
      
      <div className="login-sub-1">

        </div>
        
        <div className="login-sub-2">
          <Typography variant="h2">Login page</Typography>
          <form >
            <div >
            <TextField  className="textfield"
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={loginUser.email}
              sx={{mb : 3, mt: 3}}
            />
            </div>
            
            <div>
            <TextField className="textfield"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={loginUser.password}
              sx={{mb : 3}}
            />
            </div>
            
            <div>
            <FormControlLabel 
              control={<Checkbox name="remember-me" id="remember-me" />}
              label="remember-me"
              sx={{mb : 3}}
            />
            </div>

            <div>
            <Button color="error" type="submit" variant="contained" onClick={handleSubmit} sx={{mb : 3}}>
              Submit
            </Button>
            </div>
            
            <div>
              <Typography >
              Dont have an account? <Link to="/signup">Sign-up</Link>
              </Typography >
          </div>

          </form>

        </div>

      </div>
    </>
  );
};

export default Login;
