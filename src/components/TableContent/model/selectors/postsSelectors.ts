import { StateSchema } from '../../../../store/StateSchema';

export const getPostsData = (state: StateSchema) => state.posts?.posts;
export const getPostsSearch = (state: StateSchema) => state.posts?.search || '';
export const getPostsCount = (state: StateSchema) => state.posts?.postsCount || 0;
export const getPostsPage = (state: StateSchema) => state.posts?.page || 1;
export const getPostsSortParams = (state: StateSchema) => state.posts?.sortParams;
