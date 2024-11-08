import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import usePosts from './hooks/usePosts';
import { useState } from 'react';

const PostList = () => {
 
  const [userId, setUserId] = useState<number>();
  const {data: posts, isLoading, error} = usePosts(userId);

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select onChange={(event) => setUserId(parseInt(event.target.value))} 
        value={userId}
        className="form-select mb-3"
      >
        <option value="">all posts</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
