import usePosts from './hooks/usePosts';
import React, { Fragment } from 'react';
const PostList = () => {
  const pageSize = 10;
  const {data, isLoading, error, fetchNextPage, isFetchingNextPage} = usePosts({pageSize});

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page,index) => 
          <React.Fragment key={index}>
            {page.map(post => 
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            )}    
          </React.Fragment>
        )}
      </ul>
      <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()} className="btn btn-primary my-3">
        {isFetchingNextPage ? 'loading...' : 'Load More'}
      </button>
    </>
  );
};

export default PostList;
