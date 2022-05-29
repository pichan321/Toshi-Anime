import React, {useState, useEffect} from 'react';
import Killua from '../src/Images/killua-icon.jpg';
import './CSS.css';

export default function Test() {
    const [info, setInfo] = useState([
        {src: Killua, text: "Image 1"},
        {src: Killua, text: "Image 2"},
        {src: Killua, text: "Image 3"},
        {src: Killua, text: "Image 4"},
        {src: Killua, text: "Image 5"},

    ]);

    /*
    {info.map(item => {
                return (<div className='card-killua'>
                    <img src={item.src} alt={item.text} className="card-img"/>
                    <p className='card-text'>{item.text}</p>
                    </div>);
    */
    return (<div className='test'>
                <img className="test-img" src={info[0].src} alt={info[0].text}/>
                <p className='test-txt'>{info[0].text}</p>
            </div>);

    
}