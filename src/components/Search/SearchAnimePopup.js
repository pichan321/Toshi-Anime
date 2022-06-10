import React from "react";
import './SearchAnime.css';
import CloseButton from "../Buttons/CloseButton";

export default function SearchAnimePopup(props) {


    function onCloseButtonClick() {
        props.setPopup(false);
    }

    /*
     <img src={props.images.jpg.large_image_url} alt=""/>     
    <p>{props.title_english}</p>
    <p>{props.title_japanese}</p>
    <p>{props.background}</p>
    <p>{props.episode}</p>
    <p>{props.duration}</p>
    

    */

    return (<div className='popup-container'>
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-0 col-lg-1'></div>
        <div className='col-12 col-lg-10'>
        <div className="close-button-container-popup text-end" onClick={() => onCloseButtonClick()}>
            <CloseButton className="close-button-popup" color="#4FD1C5" width="30px" height="30px"/>
        </div>
     <div className='popup'>
    
    <img src={props.popupData.images.jpg.large_image_url} alt=""/>     
        <p>{props.popupData.title_english ? props.title_english : props.title_japanese}</p>
        <p>{props.popupData.synopsis}</p>
        <p>Score: {props.popupData.score} / 10.00</p>
        <p>Episodes: {props.popupData.episodes}</p>
        <p>Duration: {props.popupData.duration}</p>
        <p>Status: {props.popupData.status}</p>
        <div>Genres: <div>
        {props.popupData.genres.map(item => {
            return <p>{item.name}</p>
        })}</div></div>

   

    
</div>

</div>
<div className='col-0 col-lg-1'></div>
</div> 


</div>

</div>
);
}