import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:"video",
    initialState:{
    videoData:{},
    videoList:[]
    },

    reducers:{
        addVideos:(state,{payload})=>{
          state.videoData=payload
          state.videoList=payload?.items
        },

    }
})

export const {addVideos} =videoSlice.actions

export default videoSlice.reducer