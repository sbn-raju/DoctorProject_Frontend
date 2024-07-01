import React from 'react'
import {useNavigate} from "react-router-dom"

const LoginButton = () => {
    const navigate = useNavigate();

    const handleLoginClick = ()=>{
        navigate("/login");
    }
return (
    <button className='px-6 py-2 m-2 rounded-md text-white bg-green-3'
    onClick={handleLoginClick}>
        Login
    </button>
)
}

export default LoginButton