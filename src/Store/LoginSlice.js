import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
const userSlice =createSlice({    
name:"user",
initialState:{
    user:{
        email:"",
        password:"",
        success:false,
    },signinuser:{
     
    }},
reducers:{

    userProfile:(state,action)=>{
     state.user = action.payload
     state.user.success=true
    }
} 
})

export const userValid=(data)=>async (dispatch)=>{
    console.log("data",data.email)
    if (data.email === localStorage.getItem("email") && data.password === localStorage.getItem("password")) 
    {
        dispatch(userProfile(data))
      
        return data  
        
    }

}
export const userSignup = (data) =>async (dispatch)=>{

    console.log("data",data)
}
export const {userProfile} = userSlice.actions;
export default userSlice.reducer