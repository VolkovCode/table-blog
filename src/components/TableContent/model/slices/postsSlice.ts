import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPostsList, Post } from '../services/fetchPostsList/fetchPostsList';
import { PostsSchema } from '../../../../store/types/postsSchema';

const initialState: PostsSchema = {
  isLoading: false,
  error: undefined,
  posts: [],
  search: '',
  postsCount: 0,
  page: 1,
  sortParams: {
    idSort: { order: 'asc', active: true },
    titleSort: { order: 'asc', active: false },
    descriptionSort: { order: 'asc', active: false },
  },
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPostsCount: (state, action: PayloadAction<number>) => {
      state.postsCount = action.payload;
    },
    setPostsSortParams: (state, action: PayloadAction<string>) => {
      if (action.payload === 'id') {
        state.sortParams.idSort.active = true;
        state.sortParams.titleSort.active = false;
        state.sortParams.descriptionSort.active = false;
        if (state.sortParams.idSort.order === 'asc') {
          state.sortParams.idSort.order = 'desc';
          state.posts = state.posts?.sort((prevPost, nextPost) => nextPost.id - prevPost.id);
        } else {
          state.sortParams.idSort.order = 'asc';
          state.posts = state.posts?.sort((prevPost, nextPost) => prevPost.id - nextPost.id);
        }
      } else if (action.payload === 'title') {
        state.sortParams.titleSort.active = true;
        state.sortParams.idSort.active = false;
        state.sortParams.descriptionSort.active = false;
        if (state.sortParams.titleSort.order === 'asc') {
          state.sortParams.titleSort.order = 'desc';
          state.posts = state.posts?.sort((prevPost, nextPost) => (nextPost.title > prevPost.title ? 1 : -1));
        } else {
          state.sortParams.titleSort.order = 'asc';
          state.posts = state.posts?.sort((prevPost, nextPost) => (nextPost.title < prevPost.title ? 1 : -1));
        }
      } else if (action.payload === 'description') {
        state.sortParams.descriptionSort.active = true;
        state.sortParams.idSort.active = false;
        state.sortParams.titleSort.active = false;

        if (state.sortParams.descriptionSort.order === 'asc') {
          state.sortParams.descriptionSort.order = 'desc';
          state.posts = state.posts?.sort((prevPost, nextPost) => (nextPost.body > prevPost.body ? 1 : -1));
        } else {
          state.sortParams.descriptionSort.order = 'asc';
          state.posts = state.posts?.sort((prevPost, nextPost) => (nextPost.body < prevPost.body ? 1 : -1));
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPostsList.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.postsCount = action.payload.length;
      })
      .addCase(fetchPostsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: postsActions } = postsSlice;
export const { reducer: postsReducer } = postsSlice;
