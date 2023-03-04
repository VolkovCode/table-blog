import {StateSchema} from "../../../../store/StateSchema";


export const getPostsIsLoading = (state: StateSchema) => state.posts?.isLoading || false;
export const getPostsError = (state: StateSchema) => state.posts?.error;
export const getPostsData = (state: StateSchema) => state.posts?.posts;