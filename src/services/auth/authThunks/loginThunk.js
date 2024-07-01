import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios"

const loginUser = createAsyncThunk("loginAuth",async(loginData, {isRejectedWithValue})=>{
    try {
        const user = await axios.post("/auth/login",loginData,{
            headers:{
                "Content-Type":"application/json",
            },
        })
        return user
    } catch (error) {
        return isRejectedWithValue(error.user.data || error.message);
        
    }
});


export default loginUser