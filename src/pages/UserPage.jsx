import React, { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import "../Styles/UserPage.css";
import { useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";




const UserPage = () => {

  const location = useLocation();

  const loggedUser = location.state.loggedUser;


  const [editUser, setEditUser] = useState(loggedUser);
  const [ischange, setIschange] = useState(false);

  const handleChange = (e) => {
    setIschange(true);
    const name = e.target.name;
    const value = e.target.value;

    setEditUser({ ...editUser, [name]: value });
    console.log(name, value);
  };

  const [errors, setErrors] = useState({})


  const handleSubmit = () => {

    const {fname, lname, password}= editUser

    const validationError = {}

    if(!fname.trim()){
      validationError.fname = "First name cannot be Empty!"
    }
    if(!lname.trim()){
      validationError.lname = "Last name cannot be Empty!"
    }
    if(!password.trim()){
      validationError.password = "Password cannot be Empty!"
    } else if(password.length < 6){
      validationError.password = "Password should be greater than 6 char"
    }

    setErrors(validationError)

    if(Object.keys(validationError).length === 0){
      if (ischange) {
        localStorage.setItem(`${editUser.email}`,JSON.stringify(editUser)
        );
        console.log("Value was changed");
      } else {
        console.log("Value was not changed");
      }
    }

    
  };

  return (
    <>
    <Navbar loggedUser={loggedUser}/>
    <div className="main-container">

      <div className="sub-1">
      
      </div>

      
        <div className="sub-2">
          <div>
          <Typography variant="h2" >Profile</Typography>
          </div>
          <FormControl>
            <div>
              <TextField
                className="formItems"
                variant="outlined"
                label="First name"
                type="text"
                name="fname"
                onChange={handleChange}
                value={editUser.fname}
              />
              {errors.fname && <span className="errors">{errors.fname}</span>}
            </div>

            <div>
              <TextField
                className="formItems"
                variant="outlined"
                label="Last name"
                type="text"
                name="lname"
                onChange={handleChange}
                value={editUser.lname}
              />
              {errors.lname && <span className="errors">{errors.lname}</span>}
            </div>

            <div>
              <TextField
                disabled
                className="formItems"
                variant="outlined"
                label="Email"
                type="text"
                name="email"
                value={editUser.email}
              />
            </div>

            <div>
              <TextField
                disabled
                className="formItems"
                variant="outlined"
                label="Role"
                type="text"
                name="role"
                value={editUser.role}
              />
            </div>

            <div>
              <TextField
                className="formItems"
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={editUser.password}
              />
              {errors.password && <span className="errors">{errors.password}</span>}
            </div>

            <div>
              <Button
                color="success"
                className="formItems"
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </FormControl>
        </div>

      </div>
      
    </>
  );
};

export default UserPage;
