import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Signup.css'
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import signupImage from '../assets/undraw-coffee-2.svg'
import signupImage2 from '../assets/undraw_completed.svg'

const Signup = () => {

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
    cartItems : [],
  });

  const [errors, setErrors]=useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setUserData({ ...userData, [name]: value });
  };
  

  //Submit Form and checking Validations
  const handleSubmit = (e) => {

  e.preventDefault();

  const {fname,lname,email,password} = userData

  const validationError = {};
  
  if(!fname.trim()){
    validationError.fname = "First Name is required"
  }

  if(!lname.trim()){
    validationError.lname = "Last name is required"
  }

  if(!email.trim()){
    validationError.email = "Email is required"
  } 
  // else if(!/\S+@\S\.\S+/.test(email)){
  //   validationError.email = "Email is not valid"
  // }

  if(!password.trim()){
    validationError.password = "Password is required"
  } else if(password.length < 6){
    validationError.password = "Password should be atleast 6 char"
  }

  setErrors(validationError)

  if(Object.keys(validationError).length === 0){
      setUserData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        role: "",
        cartItems : [],
      })

      localStorage.setItem(`${userData.email}`, JSON.stringify(userData));
    }
    
  };

  return (
    <>
      <div className="signup-main-container">

      <div className="signup-sub-1">
          <img className="signupImage" src={signupImage} alt="" />
          <img src={signupImage2} alt="" />
        </div>

        <div className="signup-sub-2">
      <Typography variant="h2">Register</Typography>

        <FormControl>
          <div className="signup-inputfield">
          <TextField className="textfield"
            variant="outlined"
            label="First name"
            type="text"
            name="fname"
            onChange={handleChange}
            value={userData.fname}
          />
          {errors.fname && <span className="errors">{errors.fname}</span>}
          </div>
          

          <div className="signup-inputfield">
          <TextField className="textfield"
            variant="outlined"
            label="Last name"
            type="text"
            name="lname"
            onChange={handleChange}
            value={userData.lname}
          />
          {errors.lname && <span className="errors">{errors.lname}</span>}
          </div>
          
          <div className="signup-inputfield">
          <TextField className="textfield"
            variant="outlined"
            label="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          {errors.email && <span className="errors">{errors.email}</span>}
          </div>
          
          <div className="signup-inputfield">
          <TextField className="textfield"
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          {errors.password && <span className="errors">{errors.password}</span>}
          </div>

          <div >
          <FormLabel id="role">Role</FormLabel>

          <RadioGroup
          row
          aria-labelledby="role"
          name="role"
        >
        <FormControlLabel value="Admin" control={<Radio name="role" onChange={handleChange}  />} label="Admin" />
        <FormControlLabel value="Customer" control={<Radio name="role" onChange={handleChange} />} label="Customer" />
      </RadioGroup>
      </div>

          <div className="signup-inputfield">
            <FormControlLabel 
              control={<Checkbox name="terms" id="terms"/>}
              label="I agree with Terms of service"
            />
            </div>

          <div>
          <Button size="large" type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
          

          <div style={{marginTop: '10px'}}>
        <Typography>  Already have an account? <Link to="/login">Sign-in</Link> </Typography>
      </div>

        </FormControl>
        </div>

      </div>
      
    </>
  );
};

export default Signup;
