import React from "react";
import './About.css';

export default function About(props) {
    return (<div>
                <h1>About</h1>
                <h3>Created for everyone, meant for everyone!</h3>
                <div className="">
                    <img className="about-img" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt=""/>
                    <img className="about-img jikan" src={"https://external-preview.redd.it/uPKqE7N1kI9jUWkZwgWhnOL_m61D-0jd1RsYnSsJK-k.jpg?auto=webp&s=fed6cdbc41fb85ce53432860e04836f3b0517501"} alt=""/>
                </div>
            </div>)
}