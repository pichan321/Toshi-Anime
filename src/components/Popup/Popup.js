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

    // <p>{this.props.data.title_english ? this.props.data.title_english : this.props.data.title_japanese}</p>
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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-3'>
                        <img className="poster-image img-fluid mx-auto d-flex" src={this.props.data.images.jpg.large_image_url} alt=""/>   
                    </div>
                    <div className='col-12 col-lg-9'>
                        <h3>{this.props.data.title_english} ({this.props.data.title_japanese}) <Button>Watch</Button></h3>
                        <br/>
                        <p>{this.props.data.synopsis}</p>
                    </div>
                </div>
          
                <div className='row'>
               <br/>
       
                <p>Score: {this.props.data.score} / 10.00</p>
                <p>Episodes: {this.props.data.episodes} episode(s)</p>
                <p>Duration: {this.props.data.duration}</p>
                <p>Status: {this.props.data.status}</p>
                <p>Season: {this.props.data.season}</p>
                <p>Year: {this.props.data.year}</p>
                <div>Genres: <div>
                {this.props.data.genres.map(item => {
                    return <p>{item.name}</p>
                })}</div></div>

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
}