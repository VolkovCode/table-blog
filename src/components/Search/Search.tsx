import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { postsActions } from '../TableContent/model/slices/postsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getPostsSearch } from '../TableContent/model/selectors/postsSelectors';

export const Search = () => {
  const search = useSelector(getPostsSearch);

  const dispatch = useAppDispatch();
  const onChangeSearch = useCallback((search: string) => {
    dispatch(postsActions.setSearch(search));
  }, [dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearch?.(e.target.value);
  };

  return (
    <input
      onChange={onChangeHandler} value={search} className="search"
      type="search" placeholder="Поиск"
    />
  );
};
