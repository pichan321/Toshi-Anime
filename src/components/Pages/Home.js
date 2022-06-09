import React, {useEffect, useState} from 'react';
import Nav from '../NavBar/Nav';
import Anime from '../Animes/Anime';
import Footer from '../Footer/Footer';
import Trending from '../TrendingAnime.js/Trending';
import API from '../API';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
//import GoogleLogin from 'react-google-login';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './LoginButton';


export default function Home() {
    const [popup, setPopup] = useState(false);
    const [gmail, setGmail] = useState("");
    const [logout, setLogout] = useState(false)
    const [photo, setPhoto] = useState("")

    const firebaseConfig = {
      apiKey: "AIzaSyCciSrlwEnNo_ZImX04RjHqdjKRwBstPDg",
      authDomain: "toshi-anime-eecb6.firebaseapp.com",
      projectId: "toshi-anime-eecb6",
      storageBucket: "toshi-anime-eecb6.appspot.com",
      messagingSenderId: "1094842378063",
      appId: "1:1094842378063:web:cc39dbfe88fb448b14473a"
    };
 
  
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
    
    function signInWithGoogle() {
      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(result.user.photoURL)
    
    setPhoto(result.user.photoURL)

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

    function signOutGoogle() {
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Signed Out!")
      }).catch((error) => {
        // An error happened.
      });
    }
    /*
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
*/  function prompt() {
  google.accounts.id.initialize({
    client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
    callback: handleCallbackResponse
  });
    google.accounts.id.prompt()
}

    const handleCallbackResponse = response => {
      console.log(response);
      let a = jwt_decode(response.credential);
      console.log(jwt_decode(response.credential));
      setGmail(a.email)
      console.log(a.email)
    };

   // setInterval(() => {
   //  // google.accounts.id.initialize({
   //  //   client_id: "822223969254-ra5lshj8c87cn5mml2dfbms22e1boa8d.apps.googleusercontent.com",
   //  //   callback: handleCallbackResponse
   //  // });
   //   google.accounts.id.renderButton(
   //     document.getElementById("buttonDiv"),
   //     { theme: "outline", size: "large" }  // customization attributes
   //   );
   // }, 5000);

    /*
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
  */


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
  //google.accounts.id.renderButton(
  //  document.getElementById("buttonDiv"),
  //  { theme: "outline", size: "large" }  // customization attributes
  //);
    //google.accounts.id.prompt(); // also display the One Tap dialog
    },[])


    return (<>
     
    
    <div>
          
    	    <div className="App">
      
         
           
          <div id="buttonDiv"></div>
          <button type="button" onClick={signInWithGoogle}>Sign In</button>
          <button type="button" onClick={signOutGoogle}>Sign Out</button>
          {photo !== "" && <img src={photo} alt=""/>}
          
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
            </div></>);
}