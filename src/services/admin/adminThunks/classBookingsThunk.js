import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import axios from "axios"

export const classBooking = createAsyncThunk("classBookings",async({isRejectedWithValue})=>{
    try {
        const classBookings = await axios.get("/admin/classBookings")
        return classBookings
    } catch (error) {
        return isRejectedWithValue(err.response.data || err.message)
    }
})


