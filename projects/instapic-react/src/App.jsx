import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import ProfilePage from './components/profile/ProfilePage/ProfilePage';
import Header from './components/common/Header/Header';
import Navbar from './components/common/Navbar/Navbar';
import ImageDetailPage from './components/common/ImageDetailPage/ImageDetailPage';
import SearchPage from './components/search/SearchPage/SearchPage';
import LikedPage from './components/liked/LikedPage/LikedPage';
import './App.css';

const App = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (post) => {
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.find(p => p.id === post.id)) {
        return prevLikedPosts.filter(p => p.id !== post.id);
      } else {
        return [...prevLikedPosts, post];
      }
    });
  };

  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage onLike={handleLike} />} />
          <Route path="/search" element={<SearchPage onLike={handleLike} />} />
          <Route path="/liked" element={<LikedPage likedPosts={likedPosts} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/image/:id" element={<ImageDetailPage onLike={handleLike} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
