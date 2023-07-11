import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()
  const goBack = ()=>{
        navigate('/')
  }  
  return (
    <div>
      <h3>Page Not Found </h3>
      <span onClick={goBack}> Click here to go Back </span> 
    </div>
  ) 

}
export default NotFound;