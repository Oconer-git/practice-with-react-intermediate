import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import usePosts from './hooks/usePosts';

const PostList = () => {
 
  const {data: posts, isLoading, error} = usePosts();

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
