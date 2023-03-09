import { AxiosInstance } from 'axios';
import { PostsSchema } from './types/postsSchema';

export interface StateSchema {
    posts?: PostsSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
