import React from "react";
import ItemsCardImage from "../assets/ItemsCardImage.jpg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemsCard = ({ cart, handleAddtoCart, handleDeletetoCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Cart item"
        height="140"
        image={ItemsCardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cart.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cart.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price {"$"}
          {cart.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleAddtoCart(cart)}>
          Add to Cart
        </Button>
        <Button size="small" onClick={() => handleDeletetoCart(cart.title)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemsCard;
