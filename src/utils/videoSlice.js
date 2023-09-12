import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:"video",
    initialState:{
    videoData:{},
    videoList:[],
    videoDetails:{},
    currentVideoId:"",
   
    },

    reducers:{
        addVideos:(state,{payload})=>{
          state.videoData=payload
          state.videoList=payload?.items
        },
        addVideoId:(state,{payload})=>{
          state.currentVideoId=payload
        },
        addSuggestedVideos:(state,{payload})=>{
         
          state.suggestedVideosList=payload?.items
        },

    }
})

export const {addVideos , addVideoId ,addSuggestedVideos} =videoSlice.actions

export default videoSlice.reducer