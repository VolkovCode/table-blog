import {PostsSchema} from "./types/postsSchema";
import {AxiosInstance} from "axios";

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