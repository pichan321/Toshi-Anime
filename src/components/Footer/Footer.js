import React from 'react';
import './Footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className='text-center'>
                    <div className="footer-line-container">
                        <div className="footer-line"></div>
                    </div>
                    <div>
                        <ul className='footer-links'>
                            <li><Link to="/">Home</Link></li>     
                            <li><Link to="/about">About</Link></li>  
                            <li><Link to="/support">Support</Link></li>  
                        </ul>
                    </div>

                    <p>Copyright &copy; 2022 Toshi Anime. All Rights Reserved.</p>
                </div>)
    }

}