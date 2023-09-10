import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
const store =configureStore({
reducer:{
    app:appSlice,
    search: searchSlice,
    chat: liveChatSlice,
}
})

export default store ;