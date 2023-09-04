import React, { useState } from 'react'
import ItemsCardImage from "../assets/ItemsCardImage.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Button, ButtonGroup, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 
import MailIcon from '@mui/icons-material/Mail';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemsCard2 = ({item, handleDelete, handleDecrement, handleIncrement}) => {



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
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price {"$"}
          {item.price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Quantity {" "}
          {item.quantity}
        </Typography>


      </CardContent>
      <CardActions>
        
        <Button  size="small" variant='outlined' startIcon={<DeleteIcon />} onClick={()=>handleDelete(item.id)}>
          Delete
        </Button>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            
            onClick={()=>handleDecrement(item)}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"

            onClick={()=>handleIncrement(item)}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
    </>
  )
}

export default ItemsCard2