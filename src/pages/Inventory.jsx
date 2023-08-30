import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ItemsCard2 from '../components/ItemsCard2'
import '../Styles/Inventory.css'


const Inventory = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const loggedUser = location.state.loggedUser

  const [cart ,setCart] = useState(loggedUser.cartItems) 

  console.log(cart);

  const handleDelete=()=>{

  }

  return (


    <>
    <div>Inventory</div>
    <div className='flex-container-1'></div>
    {/* <div>{loggedUser.email}</div> */}
    <div className="itemsContainer">
    {
      cart.map((item,key)=>{
        return (
          <div key={key}>
          <ItemsCard2
                handleDelete={handleDelete}
                cart={item}
              />
            </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Inventory