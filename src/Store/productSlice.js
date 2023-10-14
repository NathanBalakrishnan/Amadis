import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const productSlice = createSlice({
name:"product",
initialState:{product:{description:'',discount:'',id:'',image:'', price:'',status:false}},
reducers:{
   productChosen:(state,action)=>{
      state.product = action.payload
      state.product.status = true
   }
}
})
export const chooseProduct=(data)=>async (dispatch)=>{
    if(data){
        //console.log("data",data)
        dispatch(productChosen(data))
    }
}

export const selectedItems = (state)=>state.items
export const {productChosen} = productSlice.actions;
export default productSlice.reducer;    

