import {Post} from "../../components/TableContent/model/services/fetchPostsList/fetchPostsList";


export interface PostsSchema {
    isLoading?: boolean;
    error?: string;
    posts?: Post[];
}