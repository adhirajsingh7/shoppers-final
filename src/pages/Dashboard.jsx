import React from 'react'
import Navbar from '../components/Navbar'
import Additems from '../components/Additems'
import { useLocation } from 'react-router-dom'
import { Alert } from '@mui/material'

const Dashboard = () => {

  const location = useLocation()
  
  const loggedEmail = location.state.loggedEmail
  

  const loggedUser = JSON.parse(localStorage.getItem(`${loggedEmail}`));


  return (
    <>
    
    <Navbar loggedUser = {loggedUser}/>
    <Additems loggedUser= {loggedUser} />
    </>
  )
}

export default Dashboard