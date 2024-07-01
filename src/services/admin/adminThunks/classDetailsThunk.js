import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";


export const classDetails = createAsyncThunk("classDetails",async(classData,{isRejectedWithValue})=>{
    try {
        const classDetails = await axios.post("/admin/classDetails",classData,{
            headers:{
                "Content-Type":"application/json"
            }
        });
        return classDetails

    } catch (error) {
        return isRejectedWithValue(error.message)
    }
})