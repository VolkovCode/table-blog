import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../components/TableContent/model/slices/postsSlice';
import { ThunkExtraArg } from './StateSchema';
import { api } from '../api/api';

const extraArg: ThunkExtraArg = {
  api,
};

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: extraArg,
    },
  }),
});

export type AppDispatch = typeof store.dispatch
