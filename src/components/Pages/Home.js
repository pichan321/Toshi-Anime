import React, {useEffect, useState} from 'react';
import Nav from '../NavBar/Nav';
import Anime from '../Animes/Anime';
import Footer from '../Footer/Footer';
import Trending from '../TrendingAnime.js/Trending';
import API from '../API';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
//import GoogleLogin from 'react-google-login';

export default function Home() {
    const [popup, setPopup] = useState(false);
    const [gmail, setGmail] = useState("");
    const [logout, setLogout] = useState(false)

    const handleCallbackResponse = response => {
      console.log(response);
      let a = jwt_decode(response.credential);
      console.log(jwt_decode(response.credential));
      setGmail(a.email)
      console.log(a.email)
    };

    setInterval(() => {
     // google.accounts.id.initialize({
     //   client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
     //   callback: handleCallbackResponse
     // });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
    }, 5000);

    
    function signOut() {
      //google.accounts.id.disableAutoSelect();
     // google.accounts.id.signOu
    // google.accounts.id.revoke('mickychan98@gmail.com', done => {
    //  console.log('consent revoked');
    //});
    //google.accounts.id.initialize({
    //  client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
    //  callback: handleCallbackResponse
    //});
    //google.accounts.id.renderButton(
    //  document.getElementById("buttonDiv"),
    //  { theme: "outline", size: "large" }  // customization attributes
    //);
    //google.accounts.id.prompt(); // also display the One Tap dialog
    console.log("asss")
    google.accounts.id.revoke(gmail, done => {
      console.log('consent revoked');
    });
    google.accounts.id.disableAutoSelect();
    setLogout(!logout)
    } 
  


    useEffect(() => {
    /* global google */
   //google.accounts.id.initialize({
   //  client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
   //  callback: handleCallbackResponse
   //})
   //google.accounts.id.renderButton(
   //  document.getElementById("signInDiv"),
   //  {theme: "outline", size: "large"}
   //)
   google.accounts.id.initialize({
    client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
    callback: handleCallbackResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
    },[gmail, logout])


 //  <GoogleLogin
 //  clientId="822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com"
 //  buttonText="Login"
 //  onSuccess={responseGoogle}
 //  onFailure={responseGoogle}
 ///>

 //  <div id="signInDiv"></div>

 /*
 <div id="g_id_onload"
     data-client_id="822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="http://localhost:3000"
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="filled_black"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
 */
    //<API/>

/*
<div id="signInDiv"></div>
          <div class="g_id_signout">
            <button onclick={signOut}>Sign Out</button>
          </div>
*/
    return (<div>
    	    <div className="App">
          <button onClick={signOut}>ABC</button>
          <div id="buttonDiv"></div>
          <div id="g_id_onload"
     data-client_id="822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com"
     data-login_uri="http://localhost:3000"
     data-your_own_param_1_to_login="any_value"
     data-your_own_param_2_to_login="any_value">
</div>
          <div class="g_id_signout">Sign Out</div>
      <div className='container-fluid'>
       
        <div className='row'>
          <div className='col'>
            <Trending className='trending' popup={popup} setPopup={setPopup}/>
          </div>
        
        </div>
        <Anime category="Top Anime"/>
        <Anime category="Upcoming"/>

      
       
        <br/>
       
      </div>
    </div>
            </div>);
}