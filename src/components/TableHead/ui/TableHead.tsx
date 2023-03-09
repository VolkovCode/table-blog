import { useSelector } from 'react-redux';
import React from 'react';
import { getPostsSortParams } from '../../TableContent/model/selectors/postsSelectors';
import { SortProps } from '../../../store/types/postsSchema';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { postsActions } from '../../TableContent/model/slices/postsSlice';

export const TableHead = () => {
  const sortParams = useSelector(getPostsSortParams);
  const getClassNameBySortParams = (sortParam: SortProps | undefined) => {
    if (sortParam?.active && sortParam.order === 'desc') {
      return 'sort-button sort-button--active';
    }
    return 'sort-button';
  };

  const dispatch = useAppDispatch();

  const onClickHandler = (sortType : string) => () => {
    dispatch(postsActions.setPostsSortParams(sortType));
  };

  return (
    <thead>
      <tr>
        <th>
          <button
            type="button"
            onClick={onClickHandler('id')}
            className={getClassNameBySortParams(sortParams?.idSort)}
          >
            ID
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={onClickHandler('title')}
            className={getClassNameBySortParams(sortParams?.titleSort)}
          >
            Заголовок
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={onClickHandler('description')}
            className={getClassNameBySortParams(sortParams?.descriptionSort)}
          >
            Описание
          </button>
        </th>
      </tr>
    </thead>
  );
};
