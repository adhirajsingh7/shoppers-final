import React from "react";
import ItemsCardImage from "../assets/ItemsCardImage.jpg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemsCard = ({loggedUser, item, handleAddtoCart, handleDeleteItem }) => {


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
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price {"$"}
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleAddtoCart(item)}>
          Add to Cart
        </Button>
        {loggedUser.role === 'Admin' && <Button size="small" onClick={() => handleDeleteItem(item.id)}>
          Delete
        </Button> }
      </CardActions>
    </Card>
  );
};

export default ItemsCard;
