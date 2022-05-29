import React, {useState} from 'react';
import Nav from '../NavBar/Nav';
import Anime from '../Animes/Anime';
import Footer from '../Footer/Footer';
import Trending from '../TrendingAnime.js/Trending';
import API from '../API';
import { Link } from 'react-router-dom';

export default function Home() {
    const [popup, setPopup] = useState(false);

    //<API/>
    return (<div>
    	    <div className="App">
      <div className='container-fluid'>
       
        <div className='row'>
          <div className='col'>
            <Trending className='trending' popup={popup} setPopup={setPopup}/>
          </div>
        
        </div>
        <Anime category="Top Anime"/>
        <Anime category="Upcoming"/>
     
      
       
        <br/>
       
      </div>
    </div>
            </div>);
}