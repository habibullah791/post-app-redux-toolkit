import './App.css';
import PostAddForm from './features/post/PostAddForm';

import PostList from './features/post/PostList';

const App = () => {
  return (
    <div>
      <PostAddForm />
      <PostList />
    </div>
  );
}

export default App;
