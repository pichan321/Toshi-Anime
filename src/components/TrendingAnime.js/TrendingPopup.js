import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from '../Buttons/CloseButton';
import './Trending.css';

 
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
                            <div className='popup'>
                                <div className="close-button-container" onClick={onCloseButtonClick}><CloseButton className="close-button" color="#4FD1C5" width="30px" height="30px"/></div>
                                <div className='popup-cover-image'>
                                    <img className='cover-image' src={trendingPopupData.attributes.coverImage.large} alt={trendingPopupData.attributes.titles.en}/>
                                </div>
                               <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <img className='poster-image img-fluid mx-auto d-flex' src={trendingPopupData.attributes.posterImage.large} alt={trendingPopupData.attributes.titles.en}/>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p>{trendingPopupData.attributes.description}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='details'>
                                            <Button>Watch</Button>
                                            <p>Average Rating: {trendingPopupData.attributes.averageRating} / 100.0</p>
                                            <p>Next Episode: {trendingPopupData.attributes.nextRelease}</p>
                                            <p>Episode Length: {trendingPopupData.attributes.episodeLength} mins</p>
                                            <p>Show Type: {trendingPopupData.attributes.showType}</p>
                                            <p>Start Date: {trendingPopupData.attributes.startDate}</p>
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