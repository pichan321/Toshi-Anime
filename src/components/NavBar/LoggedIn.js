import React from "react";
import LogoutButton from "../../Auth0/LogoutButton";

export default function LoggedIn(props) {
    console.log(Object.keys(props.user))
    console.log(Object.values(props.user))

    return (<div className="loggedin">
                <p>Username: {props.user.name}</p>
                <p>Email: {props.user.email}</p>
                <div className="text-center">
                    <LogoutButton/>
                </div>
               
            </div>);
}