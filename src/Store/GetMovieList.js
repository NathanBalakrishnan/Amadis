import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const MovieList = createSlice({

name:"movie",
initialState:{},
reducers:{

}

})

export const movieList=(data)=>async(dispatch)=>{
 try{
    const movieData = await axios.get("https://www.omdbapi.com/?t=theri&apikey=c429066e")
    const data = movieData.data
    console.log("data comes",data)
 }
catch(error){
    console.log("error occure",error)
}

}

export default MovieList.reducer