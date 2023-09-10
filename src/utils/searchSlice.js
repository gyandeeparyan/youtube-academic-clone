import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice({
    name: 'search',
    initialState:{},
    reducers:{
  cacheResults:(state,{payload})=>{
    state= Object.assign(state,payload)
  }
  //BUILD LRU CACHING
    },
})

export const {cacheResults} =searchSlice.actions

export default searchSlice.reducer