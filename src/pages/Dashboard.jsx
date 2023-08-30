import React from 'react'
import Navbar from '../components/Navbar'
import Additems from '../components/Additems'
import Displayitems from '../components/Displayitems'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

  const location = useLocation()
  
  const loggedEmail = location.state.loggedEmail
  // console.log(location.state.loggedEmail)

  // console.log(JSON.parse(localStorage.getItem(`${loggedEmail}`)))
  

  const loggedUser = JSON.parse(localStorage.getItem(`${loggedEmail}`));

  console.log(loggedUser.fname);

  return (
    <>
    
    <Navbar loggedUser = {loggedUser}/>
    <Additems loggedUser= {loggedUser} />
    {/* <Displayitems/> */}
    </>
  )
}

export default Dashboard