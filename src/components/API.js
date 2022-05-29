import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Button from 'react-bootstrap/Button';
import SearchButton from './Buttons/SearchButton';
import './API.css';

export const BASE_URL = "https://kitsu.io/api/edge";

export default class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animeData : null, //{data: [], meta: {count: 0}}
            searchWord : ""
        };
        const URL = `https://api.jikan.moe/v4/anime?q=${this.state.searchWord}&sfw`;
    }

    onChangeHandle(e) {
        this.setState({searchWord: e.target.value});
    } 

    onKeyPressHandle(e) {
        if (e.key === 'Enter') {
            this.getData();
        }
    }

   // onClickHandle(e) {
   //     this.getData();
   // }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("Prev state: " + prevState);
        //console.log("Updated " + this.state.animeData.data)
        console.log(prevState);
        console.log(this.state.animeData);
    }
    ///anime?filter[text]
    ///anime?filter[categories]=adventure
    //cowboy%20bebop
    async getData() {
        //let response = await fetch(BASE_URL + "/anime?page[limit]=20&page[offset]=0filter[text]=naruto");
        //let response = await fetch(BASE_URL + "/anime?page[limit]=20filter[text]=" + this.state.searchWord); //+ this.state.searchWord
        //let response = await fetch(`https://api.jikan.moe/v4/anime?q=Demon Slayer&sfw`);

        let response = await fetch("https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1");
        //URL
        //https://api.jikan.moe/v4/anime?q=${this.state.searchWord}&sfw
        let data = await response.json(); 
        this.setState({animeData : data});
        
    }

    /*
     {this.state.animeData !== null && this.state.animeData.data.map((item, index) => {
                return (<div className=>
                            <p className ="card-title" style={{color: "white"}}>{item.attributes.titles.ja_jp}</p>
                            <img className="card-image" src={item.attributes.posterImage.large} alt=""/>
                        </div>);
            })
            }
    */


    /*
             {this.state.animeData !== null && this.state.animeData.map(item => {
                                return (<div className='card-item'>
                                            <img className="card-image" src={item.attributes.posterImage.large} alt={item.attributes.title}/>
                                            <p style={{color: "white"}}>{item.attributes.titles.en_us} ({item.attributes.titles.ja_jp})</p>
                                        </div>)
                            })
                           
                            }

    */


    // <Button type="button" onClick={() => this.getData()}>Get Data</Button>


    /*
     <div className='input-and-search-icon'>
                    <input
                        className='input-box'
                        type="text"
                        placeholder='Search Anime'
                        value={this.state.searchWord}
                        onChange={(e) => this.onChangeHandle(e)}
                        onKeyPress={(e) => this.onKeyPressHandle(e)}
                    ></input>
                    <SearchButton 
                        className="search-icon"
                        color="#4FD1C5" 
                        width="50px" 
                        height="50px"
                        onClick={(e) => this.onClickHandle(e)}
                    />
                </div>
    */
    render() {
        return (
            <div>
               
            
           
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='cards'>

                           
                        </div>
                    </div>
                </div>
            </div>
          
        </div>);
    };
};




