import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const productSlice = createSlice({
name:"product",
initialState:{
    product:{description:'',discount:'',id:'',image:'', price:'',status:false},
    additems:[]
},
reducers:{
   productChosen:(state,action)=>{
      state.product = action.payload
      state.product.status = true
   },
   addCartItems:(state,action)=>{
     state.additems = action.payload
     console.log("stateadditems", state.additems )
     
   }
}
})
export const chooseProduct=(data)=>async (dispatch)=>{
    if(data){
        //console.log("data",data)
        dispatch(productChosen(data))
    }
}
export const addToCart=(data)=>async (dispatch)=>{
    if(data){
     console.log("cart items",data)
        dispatch(addCartItems(data))
    }
}

export const selectedItems = (state)=>state.items
export const {productChosen,addCartItems} = productSlice.actions;
export default productSlice.reducer;    

