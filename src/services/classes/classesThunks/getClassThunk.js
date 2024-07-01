import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getClass = createAsyncThunk("getClass",async(_,{isRejectedWithValue})=>{
    try {
        const getClass = await axios.get("/get/newClass");
        return getClass
    } catch (error) {
        return isRejectedWithValue(error.response.data || error.message)
    }

})

export default getClass