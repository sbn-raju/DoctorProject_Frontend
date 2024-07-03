import {createSlice} from "@reduxjs/toolkit"
import loginUser from "./authThunks/loginThunk.js"
import registerUser from "./authThunks/registerThunk.js"

const initialState = {
    user:null,
    authStatus:false,
    error:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
        
        //Login Reducers
        //This block of code will update the state of the login User wheather the 
        //user is logged in or not 
        //The authStatus is boolean value wheather the user is 
        //logged in then the authStatus is true other wise it is false.
        //It will be getting the user's details such as all the required details
        //like name and the username
        builder.addCase(loginUser.pending, (state, action)=>{
           state.authStatus = false
           state.error = false
        }),
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.authStatus = true
            state.user = action.payload
            state.error = false
        }),
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.authStatus = false
            state.user = null
            state.error = action.error.message
        })

        //Register Reducers
        //Resgiter it will send thr data of the new user from the frontend form to the backend
        //Registertion is through two approaches the 
        //One: Register through the native apporach
        //Two: Register through the firebase authentication
        builder.addCase(registerUser.pending , (state, action)=>{
            state.authStatus = false
            state.user = null
            state.error = false
        }),
        builder.addCase(registerUser.fulfilled, (state,action)=>{
            state.authStatus = true
            state.user = action.payload
            action.error = false
        }),
        builder.addCase(registerUser.rejected, (state,action)=>{
            state.authStatus = false
            state.user = null
            state.error = false
        })

    }
})

export default authSlice