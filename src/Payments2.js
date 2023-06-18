import React from 'react'
import './Payments2.css'
import { useNavigate } from 'react-router-dom'

function Payments2() {
    const navigate = useNavigate()
    const Homepage = ()=>{
        navigate('/homepage')
    }
  return (
    <div className='payment'>
        <h2 className='heading'> Thanks For Choosing Premium Plan. Your Bill is $50</h2>
        <button onClick={Homepage} className='HomePage-Button'>Home Page</button>
    </div>
    
  )
}

export default Payments2