import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getPostsData, getPostsPage, getPostsSearch,
} from '../model/selectors/postsSelectors';
import { fetchPostsList } from '../model/services/fetchPostsList/fetchPostsList';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { postsActions } from '../model/slices/postsSlice';

export const TableContent = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(getPostsData);
  const search = useSelector(getPostsSearch);
  const currentPage = useSelector(getPostsPage);
  let filteredPosts = posts;

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  if (search) {
    filteredPosts = posts?.filter(
      (post) => (String(post.id).includes(search) || post.body.includes(search) || post.title.includes(search)),
    );
  }

  useEffect(() => {
    dispatch(postsActions.setPostsCount(filteredPosts?.length || 0));
  }, [dispatch, filteredPosts]);

  const content = filteredPosts?.slice(10 * currentPage - 10, 10 * currentPage).map((post) => (
    <tr key={post.id}>
      <td className="id-content">{post.id}</td>
      <td className="title-content">{post.title}</td>
      <td className="description-content">{post.body}</td>
    </tr>
  ));

  return (
    <tbody>
      {content}
    </tbody>
  );
};
