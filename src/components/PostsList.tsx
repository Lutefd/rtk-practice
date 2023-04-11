import { useSelector } from 'react-redux';
import { selectAllPosts } from '../store/services/postsSlices';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      <h1 className="text-2xl">Posts</h1>
      <div className="grid place-items-center gap-2">
        {posts.map((post) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={post.id}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-start">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsList;
