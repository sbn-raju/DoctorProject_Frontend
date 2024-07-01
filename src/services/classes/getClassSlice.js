import {createSlice} from "@reduxjs/toolkit"
import getClass from "./classesThunks/getClassThunk"


const initialState = {
    getClass:{
        fees_of_class,
        date_of_class,
        time_of_class,
    }
}


const getClassSlice = createSlice({
    name:"getClass",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getClass.pending, (state,action)=>{
            state.state
        })
    }
})