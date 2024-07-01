import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAsyncThunk("register", async (registerData,{isRejectedWithValue})=>{
    try {
        const user = await axios.post("/auth/register",registerData,{
            headers:{
                "Content-Type":'application/json'
            }
        });
        return user
    } catch (error) {
        return isRejectedWithValue(error.data?.message || error.message)
    }
})


export default registerUser