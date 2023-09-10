import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";
const liveChatSlice= createSlice({
name: "chat",
initialState:{
messages:[],
},
reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
  
     
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift(); // 
      }
    },
  },

})

export const {addMessage} =liveChatSlice.actions
export default liveChatSlice.reducer