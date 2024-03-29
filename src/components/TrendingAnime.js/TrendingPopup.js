import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from '../Buttons/CloseButton';
import './Popup.css';
//import './Trending.css';

export default function TrendingPopup({trendingPopup, setTrendingPopup, trendingPopupData}) {
    
    function onCloseButtonClick() {
        setTrendingPopup(false);
    }

    useEffect(() => {
        console.log(trendingPopupData);
    }, [trendingPopupData])

    //description
    return (
   
         

       

            <div className='popup-container'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-lg-1'></div>
                        <div className='col-12 col-lg-10'>
                            <div onClick={onCloseButtonClick} className="popup-close-button-container text-end">
                                        <CloseButton className="popup-close-button" color="#4FD1C5" width="30px" height="30px" />
                            </div>
                            <div className='popup'>
                                
                                <div className='popup-cover-image'>
                                    <img className='cover-image' src={trendingPopupData.attributes.coverImage.large} alt={trendingPopupData.attributes.titles.en}/>
                                </div>
                               <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <img className='poster-image img-fluid mx-auto d-flex' src={trendingPopupData.attributes.posterImage.large} alt={trendingPopupData.attributes.titles.en}/>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <h3>{trendingPopupData.attributes.titles.en_jp} ({trendingPopupData.attributes.titles.ja_jp}) <Button>Watch</Button></h3>
                                            <br/>
                                            <p>{trendingPopupData.attributes.description}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='details'>
                                            <br/>
                                            <p>Average Rating: {trendingPopupData.attributes.averageRating} / 100.0</p>
                                            <p>Next Episode: {trendingPopupData.attributes.nextRelease}</p>
                                            <p>Episode Count: {trendingPopupData.attributes.episodeCount} episode(s)</p>
                                            <p>Episode Length: {trendingPopupData.attributes.episodeLength} mins</p>
                                            <p>Show Type: {trendingPopupData.attributes.showType}</p>
                                            <p>Start Date: {trendingPopupData.attributes.startDate}</p>
                                            <p>End Date: {trendingPopupData.attributes.endDate}</p>
                                            <p>Ongoing: {trendingPopupData.attributes.status}</p>
                                        </div>
                                    </div>
                               </div>
                                
                               

                                
                            </div>

                        </div>
                        <div className='col-0 col-lg-1'></div>
                    </div> 
                   
         
            </div>
      
        </div>
        );
} 