import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className='' >
     <h1 className='text-4xl font-bold mb-5'>mini store</h1>

     <button onClick={()=> navigate("/products")}>
  view prodcuts
     </button>
    </div>
  )
}

export default Home