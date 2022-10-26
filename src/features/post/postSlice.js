import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "React JS", content: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components" },
    { id: 2, title: "Next JS", content: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites" },
]

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        AddPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }

})

export const selectAllPosts = (state) => state.posts;
export const { AddPost } = postSlice.actions;
export default postSlice.reducer;