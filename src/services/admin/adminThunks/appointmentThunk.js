import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const apponintmentBookings = createAsyncThunk("appointmentBookings",async({isRejectedWithValue})=>{
    try {
        const appointment = await axios.get("/admin/appointment") 
        return appointment
        
    } catch (error) {
        return isRejectedWithValue( err.response.message||err.message)
    }
})