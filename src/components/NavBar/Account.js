import React, { useState }from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Auth0/LogoutButton";
import LoginButton from "../../Auth0/LoginButton";
import Information from "./LoggedIn";
import LoggedIn from "./LoggedIn";
import './Nav.css';  

export default function Account(props) {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [showInfo, setShowInfo] = useState(false);

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (<>
               {isAuthenticated ? (
                <div>
                  <img src={user.picture} alt={user.name} className="profile"/>
                <LoggedIn user={user}/>
                </div>
              ) : <LoginButton/>


               } 
               </> );
}