import React from 'react';
import {Link} from 'react-router-dom';
 
export default function Menu(props) {
    const options = ["Home","About","Support","Login"]
    /*
     {options.map(item => {
                        return (<a href="">{item}</a>);
                    })
                    }
    */

    return (<div className='menu-container'>
                <div className='menu'>
                    <div className='links'>
                       {options.map(item => {
                           return   (<div className='link'>
                                    {item === "Home" ? <Link to={`/`}>{item}</Link> : <Link to={`/${item.toLowerCase()}`}>{item}</Link>

                                    }
                                        
                                    </div>);
                       })}
                    </div>
                </div>
            </div>);
}