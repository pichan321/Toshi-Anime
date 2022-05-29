import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trending.css';
import Button from 'react-bootstrap/Button'
import TrendingPopup from './TrendingPopup';


const URL = "https://kitsu.io/api/edge/trending/anime";

export default function Trending(props) {
    const [trendingData, setTrendingData] = useState(null);
    const [trendingPopup, setTrendingPopup] = useState(false);
    const [trendingPopupData, setTrendingPopupData] = useState(null);
    
    useEffect(() => {
        fetch(URL).then(response => response.json()).then(data => setTrendingData(data.data));
        }, []);

    useEffect(() => {
        console.log(trendingData);
        if (trendingData !== null) {
            trendingData.map((item, index) => {
                //console.log(item.attributes.posterImage.large);
            });
        }
        
    }, [trendingData]);
    
    //<p>{item.attributes.synopsis}</p>
    /*
     <div class="trending-item-description"> 
        <h3>{item.attributes.titles.en_jp} ({item.attributes.titles.ja_jp})</h3>
        <a href="https://9anime.vc/search?keyword=one+piece" target="_blank"><Button type="button">Watch</Button></a>
    </div>

    */
    function onTrendingItemClick(item) {
        setTrendingPopupData(item);
        setTrendingPopup(true);
    }

    return (
            <>
            <h1>Trending Now</h1>
            <div className='trending-flex'>
            {trendingData !== null && trendingData.map((item) => {
                return (<div className='wrap me-3' onClick={() => onTrendingItemClick(item)}>
                            <div className='trending-item'>
                                <img className='trending-item-image' src={item.attributes.coverImage.large} alt={item.attributes.titles.en_jp} />
                                
                            </div>
                            <h5 className='trending-item-description' style={{color: "white"}}>{item.attributes.titles.en_jp} ({item.attributes.titles.ja_jp})</h5>
                        </div>);
            })}
            </div>
            {trendingPopup && <TrendingPopup 
                                trendingPopup={trendingPopup} 
                                setTrendingPopup={setTrendingPopup} 
                                trendingPopupData={trendingPopupData}/>}
           
            </>
            );
}