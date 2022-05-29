import React from 'react';
import './Footer.css';

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
                            <li><a href="">Home</a></li>     
                            <li><a href="">About</a></li>  
                            <li><a href="">Support</a></li>  
                        </ul>
                    </div>

                    <p>Copyright &copy; 2022 Toshi Anime. All Rights Reserved.</p>
                </div>)
    }

}