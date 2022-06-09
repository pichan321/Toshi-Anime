import React, { Component } from 'react';
import './Anime.css';
import {BASE_URL} from '../API';
import Popup from '../Popup/Popup';

export default class Anime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animeData : null,
            animePopup : false,
            popupData : null
        }

    }

    setAnimePopup() {
        this.setState({animePopup : false});
    }

    componentDidMount() {
        this.getAnimeByCategory();
    }
    //page[limit]=20&page[offset]=0
    async getAnimeByCategory() {
        //let response = await fetch(BASE_URL + "/anime?page[limit]=20&filter[categories]=ecchi");
        //let response = await fetch("https://animechan.vercel.app/api/random");

        let URL = this.getLink(this.props.category);
        let response = await fetch(URL);
        let data = await response.json();
        this.setState({animeData: data.data});
    }

    getLink(category) {
        switch (category) {
            case "Top Anime": return ("https://api.jikan.moe/v4/top/anime");
            case "Upcoming" : return ("https://api.jikan.moe/v4/seasons/upcoming");
            default: return "";
        };
    }

    onClickHandle(item) {
        console.log(item);
        this.setState({popupData: item, animePopup: true});
    }

    /*
      {(this.state.animeData !== null) && this.state.animeData.map(item => {
                    return (<div>
                               <p>{item.titles.en}</p>
                            </div>);
                })

                }
    */

    /*
                  {(this.state.animeData !== null) && this.state.animeData.map(item => {
                    return (<div>
                               <img src={item.attributes.posterImage.large}></img>
                            </div>);
                })
            ]    
    */

    render() {
        return (<div className='container-fluid'>
                    <h1 className='text-center'>{this.props.category}</h1>
                    <div className='row'>
                    {this.state.animeData !== null && this.state.animeData.map(item => {
                        return (<div className='col-6 col-md-4 col-lg-2 col-xl-1'>
                                    <div className='each-card' onClick={(e) => this.onClickHandle(item)}>
                                        <img className="img-fluid mx-auto d-flex each-image" src={item.images.jpg.large_image_url} alt=""/>
                                        <h5>{item.title_english}</h5>
                                    </div>
                                </div>);
                    })}
                    </div>
                    {this.state.animePopup && <Popup data={this.state.popupData} animePopup={this.state.animePopup} setAnimePopup={() => this.setAnimePopup()}/>}
                  
                </div>)
    }
    
}