import { useSelector } from 'react-redux';
import { selectAllUsers } from '../store/services/users/usersSlice';

const PostAuthor = (props: { userId: string }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === props.userId);

  return (
    <span className="text-start">
      por {author ? author.name : 'Autor desconhecido'}
    </span>
  );
};

export default PostAuthor;
