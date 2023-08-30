import React from 'react'
import ItemsCardImage from "../assets/ItemsCardImage.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemsCard2 = ({cart, handleDelete}) => {
  return (
    <>

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
        
        <Button  size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default ItemsCard2