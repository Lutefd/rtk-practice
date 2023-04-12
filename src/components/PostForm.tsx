import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../store/services/posts/postsSlice';
import { selectAllUsers } from '../store/services/users/usersSlice';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const handleTitle = (e: string) => setTitle(e);
  const handleContent = (e: string) => setContent(e);
  const handleUserId = (e: string) => setUserId(e);
  const onAddPostClicked = (e: any) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <form
      onSubmit={onAddPostClicked}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Titulo do Post</span>
        </label>
        <input
          type="text"
          placeholder="Titulo do post"
          className="input input-bordered input-primary"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control min-w-full">
        <label className="label">
          <span className="label-text">Conteúdo do Post</span>
        </label>
        <textarea
          className="textarea textarea-primary min-w-full"
          placeholder="Bio"
          value={content}
          onChange={(e) => handleContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Selecione um usuario</span>
        </label>
        <select
          className="select select-primary w-full max-w-xs"
          value={userId}
          onChange={(e) => handleUserId(e.target.value)}
        >
          <option disabled selected>
            Selecione um usuário
          </option>
          {userOptions}
        </select>
      </div>
      <div>
        <button
          className="btn btn-primary mb-8"
          type="submit"
          disabled={!canSave}
        >
          Adicionar Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
