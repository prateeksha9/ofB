import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import fetchPosts from '../actions/posts';
import { Header, PostCard, Status, MainNav } from '.';

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Status />
        <Header />
        <Routes>
          <Route path="/ofB" element={<PostCard post={posts} />} />
          <Route path="/" element={<PostCard posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
