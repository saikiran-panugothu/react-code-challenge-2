import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './components/postList/PostList';
import CreatePost from './components/createPost/CreatePost';
import PostDetails from './components/postDetails/PostDetails';
import { Provider } from 'react-redux';
import { store } from './util/store';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
