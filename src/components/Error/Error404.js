import React from "react";
import StrawHat from '../../Images/strawhat-mafia.png';

export default function Error404(props) {


    return (<div className="container-fluid">
                <div className="row text-center">
                    <h1>Error 404</h1>
                </div>
                <div className="row">
                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6 justify-content-center">
                        <div className="ratio ratio-16x9">
                            <img className="img-fluid" src={StrawHat} alt="" />
                        </div>
                    </div>
                    <div className="col-0 col-lg-3"></div>
                </div>
               
            </div>);
}