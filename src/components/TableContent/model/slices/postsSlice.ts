import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPostsList, Post} from "../services/fetchPostsList/fetchPostsList";
import {PostsSchema} from "../../../../store/types/postsSchema";

const initialState: PostsSchema = {
    isLoading: false,
    error: undefined,
    posts: []
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPostsList.fulfilled, (state, action: PayloadAction<Post[]>,) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
    }
)

export const { actions: postsActions } = postsSlice;
export const { reducer: postsReducer } = postsSlice;