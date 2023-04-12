import { useSelector } from 'react-redux';
import { selectAllPosts } from '../store/services/posts/postsSlice';
import PostAuthor from './postAuthor';
import TimeAgo from './createdTime';
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      <div className="grid gap-2">
        {posts.map((post) => (
          <div
            className="card w-64 bg-primary text-primary-content shadow-xl"
            key={post.id}
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-start">{post.content}</p>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsList;
