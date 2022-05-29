import React, { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react'
import './Nav.css';
import Logo from '../../Images/killua-icon.jpg';
import Menu from './Menu.js';
import SearchButton from '../Buttons/SearchButton';
import { Link, Navigate, useNavigate, Redirect} from 'react-router-dom';

export default function Nav(props) {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();


    function onChangeSearchWord(e) {
        props.setSearchWord(e.target.value);
    }

    function onChangeHandle(e) {
        props.setSearchWord(e.target.value);
    }

    function onKeyPressHandle(e) {
      
        if (e.key === "Enter") {
            navigate("/search");
            props.setKeyword(props.searchWord);
        }
       
    }

    function onClickHandle() {
        console.log("Search Word" + props.searchWord)
        props.setKeyword(props.searchWord);
    }
    
    useEffect(() => {
        console.log("Hamburger is toggled");
    }, [isOpen]);

    return (<div className="navbar">
                <div className='hamburger-and-logo'>
                    <Hamburger color="#4FD1C5" rounded distance="md" toggled={isOpen} toggle={setOpen}/>
                    {isOpen && <Menu/>}
                    <img src={Logo} alt="Killua" className='logo'/>
                   
                </div>

                <div className='input-and-search-icon'>
                    <input
                        className='input-box'
                        type="text"
                        placeholder='Search Anime'
                        value={props.searchWord}
                        onChange={(e) => onChangeHandle(e)}
                        onKeyPress={(e) => onKeyPressHandle(e)}
                    ></input>
                    
                    <Link to="/search" onClick={onClickHandle}> <SearchButton 
                        className="search-icon"
                        color="#4FD1C5" 
                        width="50px" 
                        height="50px"
                        
                    /></Link>
                   
                </div>
            </div>);
}