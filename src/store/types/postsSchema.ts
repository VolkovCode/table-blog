import { Post } from '../../components/TableContent/model/services/fetchPostsList/fetchPostsList';

type SortOrder = 'asc' | 'desc';

export interface SortProps {
    order: SortOrder,
    active: boolean
}

interface SortParamsProps {
    idSort: SortProps,
    titleSort: SortProps,
    descriptionSort: SortProps,
}

export interface PostsSchema {
    isLoading?: boolean;
    error?: string;
    posts?: Post[];
    search: string;
    postsCount: number;
    page: number;
    sortParams: SortParamsProps;
}
