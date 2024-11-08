import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import usePosts from './hooks/usePosts';
import { useState } from 'react';

const PostList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const {data: posts, isLoading, error} = usePosts({page, pageSize});

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page-1)} className="btn btn-primary my-3">
        Previous
      </button>
      <button onClick={() => setPage(page+1)} className="btn btn-primary my-3 ms-1">
        Next
      </button>
    </>
  );
};

export default PostList;
