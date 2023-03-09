import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPostsCount, getPostsPage } from '../TableContent/model/selectors/postsSelectors';
import { getPageCount, getPagesArray } from '../../utils/pages';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postsActions } from '../TableContent/model/slices/postsSlice';

export const PaginationList = () => {
  const totalPostsCount = useSelector(getPostsCount);
  const pagesCount = getPageCount(10, totalPostsCount);
  const pages = getPagesArray(pagesCount);
  const { id } = useParams() || 1;

  const dispatch = useAppDispatch();
  const currentPage = useSelector(getPostsPage);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  useEffect(() => {
    dispatch(postsActions.setPage(Number(id)));
  }, [dispatch, id]);

  const nextIsDisabled = pagesCount === currentPage
  const previousIsDisabled = currentPage === 1

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link
              className={previousIsDisabled ? "previous previous--disabled" : "previous"}
              to={`/${prevPage}`}>
            Назад
          </Link>
        </li>
        <ul className="pages-list">
          {pages.map((p) => (
            <li key={p}>
              <Link className={p === currentPage ? 'page page--active' : 'page'} to={`/${p}`}>{p}</Link>
            </li>
          ))}
        </ul>
        <li>
          <Link
              className={nextIsDisabled ? "next next--disabled" : "next"}
              to={`/${nextPage}`}
          >
            Далее
          </Link>
        </li>
      </ul>

    </nav>
  );
};
