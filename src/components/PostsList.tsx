import { useSelector } from 'react-redux';
import { selectAllPosts } from '../store/services/posts/postsSlice';
import PostAuthor from './postAuthor';
import TimeAgo from './createdTime';
import ReactionButtons from './reactionButtons';
const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <div className="grid gap-2">
        {orderedPosts.map((post) => (
          <div
            className="card w-64 bg-primary text-primary-content shadow-xl md:min-w-[30rem]"
            key={post.id}
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-start">{post.content}</p>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
              <ReactionButtons post={post} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsList;
