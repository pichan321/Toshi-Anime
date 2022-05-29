import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Error404 from '../Error/Error404';
import SearchAnime from '../Search/SearchAnime';
import Popup from '../Popup/Popup';

export default function Search(props) {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        getData();
        console.log("Keyword : " + props.keyword);
    }, [props.keyword])


    async function getData() {

        //let response = await fetch("https://api.jikan.moe/v3/search/anime?q=Iruma&page=1");
        let response;
        if (props.keyword === "") {
            return setData(null);
        } else {
            response = await fetch(`https://api.jikan.moe/v4/anime?q=${props.keyword}&page=1`);
        }
      
        let data = await response.json(); 
        ////setData(data.results);
        setData(data.data);
        console.log(data);
        
    }

    return (<div>
                <h1>Results for {props.keyword}</h1>
          
                <SearchAnime data={data}/>
            </div>);
}