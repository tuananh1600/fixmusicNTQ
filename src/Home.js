import React from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>Home</div>
        <button onClick={()=>navigate("/page1")}>Page1</button>
    </div>
  )
}

export default Home