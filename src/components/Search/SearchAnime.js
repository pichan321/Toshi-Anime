import React, {useState} from "react";
import './SearchAnime.css';
import Error404 from "../Error/Error404";
import Popup from "../Popup/Popup";
import SearchAnimePopup from "./SearchAnimePopup";

export default function SearchAnime(props) {
    const [popupData, setPopupData] = useState()
    const [popup, setPopup] = useState(false);

    function onClickHandle(item) {
        setPopupData(item);
        setPopup(true);
        console.log(item);
    }

    return (<>
    <div>
            <div className='container-fluid'>
                    <div className='row'>
                    {props.data !== null ? props.data.map(item => {
                        return (<div className='col-6 col-md-4 col-lg-2 col-xl-1 each-card' onClick={(e) => onClickHandle(item)}>
                                    <div className="each-card">
                                    <img 
                                        className="each-image"
                                        src={item.images.jpg.large_image_url} 
                                        alt=""/>
                               
                                   
                                    <h5>{item.title_english}</h5>
                                    </div>
                                </div>)
                    }) : <Error404/>

                    }
                    </div>
                </div>
            </div>
            {popup && <SearchAnimePopup popup={popup} setPopup={setPopup} popupData={popupData} setPopupData={setPopupData}/>}
            </>
            )
}