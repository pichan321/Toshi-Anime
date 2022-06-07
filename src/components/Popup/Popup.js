import React from 'react';
import './Popup.css';
import Button from 'react-bootstrap/Button';
import CloseButton from '../Buttons/CloseButton';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    animePopup : this.props.animePopup
        //}
    }

    onCloseButtonClick() {
       this.props.setAnimePopup();
        
       // console.log("Button Clicked");
    }

    /*
    <div className='popup-container'>
                    <div className='popup-box'>
                        <p>Hello</p>
            
                        <div onClick={() => this.onCloseButtonClick()}><CloseButton className="close-button" color="#4FD1C5" width="20px" height="20px"/></div>
              
                    </div>
                </div>
    */


    render() {
        return (<div className='popup-container'>
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-0 col-lg-1'></div>
            <div className='col-12 col-lg-10'>
            <div className="popup-close-button-container text-end" onClick={() => this.onCloseButtonClick()}>
                <CloseButton className="popup-close-button" color="#4FD1C5" width="30px" height="30px"/>
            </div>
         <div className='popup'>
       
        <img src={this.props.data.images.jpg.large_image_url} alt=""/>     
        <p>{this.props.data.title_english ? this.props.data.title_english : this.props.data.title_japanese}</p>
        <p>{this.props.data.synopsis}</p>
        <p>Score: {this.props.data.score} / 10.00</p>
        <p>Episodes: {this.props.data.episodes}</p>
        <p>Duration: {this.props.data.duration}</p>
        <p>Status: {this.props.data.status}</p>
        <div>Genres: <div>
        {this.props.data.genres.map(item => {
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
}