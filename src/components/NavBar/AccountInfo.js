import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

export default function AccountInfo(props) {

    const firebaseConfig = {
        apiKey: "AIzaSyCciSrlwEnNo_ZImX04RjHqdjKRwBstPDg",
        authDomain: "toshi-anime-eecb6.firebaseapp.com",
        projectId: "toshi-anime-eecb6",
        storageBucket: "toshi-anime-eecb6.appspot.com",
        messagingSenderId: "1094842378063",
        appId: "1:1094842378063:web:205a37ff5ac59ce714473a"
      };
      
      
    
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
  
      const auth = getAuth(app);
  
      const provider = new GoogleAuthProvider();
      
      provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      function signInWithGoogle() {
      // provider.setCustomParameters({
      //   prompt: 'select_account'
      //});
       signInWithPopup(auth, provider)
   .then((result) => {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     // The signed-in user info.
     const user = result.user;
     console.log(result.user.photoURL)
     
     props.setProfileImage(result.user.photoURL)
  
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
    //signInWithRedirect(auth, provider);

      }
  
      function signOutGoogle() {
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("Signed Out!")
        }).catch((error) => {
          // An error happened.
        });
     
      }


    return (<div>
                <p style={{color: "white"}}>Account Info</p>
                <button type="button" onClick={signInWithGoogle}>Login with Google</button>
                <button type="button" onClick={signOutGoogle}>Sign Out</button>
            </div>);
}