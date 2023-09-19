import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import videoSlice from "./videoSlice";
const store =configureStore({
reducer:{
    app:appSlice,
    search: searchSlice,
    chat: liveChatSlice,
    video: videoSlice,
    
} 
})

export default store ;