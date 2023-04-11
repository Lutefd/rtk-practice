import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-screen w-full place-items-center">
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
