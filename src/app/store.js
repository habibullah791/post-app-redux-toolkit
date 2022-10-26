import { configureStore } from "@reduxjs/toolkit";

import postReducers from "../features/post/postSlice";

const store = configureStore({
    reducer: {
        posts: postReducers, 
    }
})

export default store;