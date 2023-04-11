import { useSelector } from 'react-redux';
import { selectAllPosts } from '../store/services/postsSlices';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
