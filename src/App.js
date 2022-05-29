import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import API from './components/API'; 
import Nav from '../src/components/NavBar/Nav'
import Trending from './components/TrendingAnime.js/Trending';
import Test from './Test.js';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer.js';
import Popup from './components/Popup/Popup.js';
import CloseButton from './components/Buttons/CloseButton';
import Anime from './components/Animes/Anime';
import {BrowserRouter as Router, Route, Routes, Switch, Link, Navigate, useNavigate} from 'react-router-dom';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
/*
  <Nav/>
  <br/>
  <Trending/>
  <API/>
*/
//<Test/>

function App() {
  const [popup, setPopup] = useState(false);
  const [searchWord, setSearchWord] = useState("")
  const [keyword, setKeyword] = useState("");


  // {popup && <Popup popup={popup} setPopup={setPopup}/>}


  // <Upcoming/>
  return (<div className='App'>
    <Router>
      <Nav className='nav-and-menu' searchWord={searchWord} setSearchWord={setSearchWord} setKeyword={setKeyword}/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search searchWord={searchWord} setSearchWord={setSearchWord} keyword={keyword}/>}/>
    
    </Routes> 
      <Footer/>
    </Router>
    
    </div>);
}

export default App;
