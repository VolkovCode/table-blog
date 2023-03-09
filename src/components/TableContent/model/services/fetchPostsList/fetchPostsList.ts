import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../store/StateSchema';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const fetchPostsList = createAsyncThunk<
    Post[],
    void,
    ThunkConfig<string>
    >(
      'TableContent/fetchPostsList',
      async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response = await extra.api.get<Post[]>('/posts');

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
