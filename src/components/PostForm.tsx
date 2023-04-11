import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../store/services/postsSlices';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (e: string) => setTitle(e);
  const handleContent = (e: string) => setContent(e);
  const dispatch = useDispatch();

  const onAddPostClicked = (e: any) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle('');
      setContent('');
    }
  };

  return (
    <form
      onSubmit={onAddPostClicked}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <div className="form-control">
        <label className="input-group">
          <span>Titulo</span>
          <input
            type="text"
            placeholder="Titulo do post"
            className="input input-bordered input-primary"
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group">
          <span>Conteúdo</span>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
            value={content}
            onChange={(e) => handleContent(e.target.value)}
          ></textarea>
        </label>
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          Adicionar Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
