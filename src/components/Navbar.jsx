import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { Badge, ThemeProvider, createTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = ({ loggedUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/userpage", { state: { loggedUser: loggedUser } });
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleCartItem = () => {
    navigate("/inventory", { state: { loggedUser: loggedUser } });
  };

  const handleHome =()=>{
    navigate('/dashboard', { state: { loggedEmail: loggedUser.email } })
  }


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (

   
    <Box sx={{flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
    
          <MenuItem onClick={handleHome}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopify
          </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1 }} />
          

          <IconButton onClick={handleCartItem} size="large" aria-label="show 4 new mails" color="inherit">
             
                <ShoppingCartIcon />
            </IconButton>
           



          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {loggedUser.fname}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
            
            
          </div>
          

          
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      </Box>
  );
};

export default Navbar;
