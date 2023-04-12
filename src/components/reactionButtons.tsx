import { useDispatch } from 'react-redux';
import { reactionAdded } from '../store/services/posts/postsSlice';

const emojis = {
  eyes: '👀',
  thumbsUp: '👍',
  wow: '😮',
  hooray: '🎉',
  rocket: '🚀',
};

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    hooray: number;
    rocket: number;
    eyes: number;
  };
};

type ReactionButtonsProps = {
  post: Post;
};

const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(emojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="btn btn-outline border-black md:m-1 hover:bg-neutral hover:text-primary"
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name as keyof typeof emojis,
            })
          )
        }
      >
        {emoji} {post.reactions[name as keyof typeof post.reactions]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
