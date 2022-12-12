import './App.css';
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Category from './components/Category';
import Book from './components/Book';


function App() {
  return (
    <div>
        <TopBar />
        <Navbar />
        <Banner />
        <Category />
        <Book />
    </div>
  );
}

export default App;
