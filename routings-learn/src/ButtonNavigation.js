import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonNavigation = () => {
    const navigate = useNavigate();
    const formHandler = (e)=>{
        e.preventDefault()
        navigate("/about")
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ButtonNavigation