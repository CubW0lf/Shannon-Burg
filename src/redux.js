import { createSlice } from "@reduxjs/toolkit";
import { configuredStore } from "@reduxjs/toolkit";

// RTK actions

const commentSlice = createSlice({
    name: "comment",
    initialState: [],
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                post: action.payload.post,
                parent: action.payload.parent,
                pseudo: action.payload.pseudo,
                message: action.payload.message,
            };
            state.push(newComment);
        },
    },
});

export const store = configuredStore({
    reducers: {
        comment: commentSlice.reducer,
    },
});
