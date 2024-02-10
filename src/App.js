import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import logo from './assets/logo.png'
import video from './assets/video.mp4';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { onValue, ref, push, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBNTTnionFSPgSjmrm6L-Xcno3INBlBWrc",
  authDomain: "team-alex-website.firebaseapp.com",
  databaseURL: "https://team-alex-website-default-rtdb.firebaseio.com",
  projectId: "team-alex-website",
  storageBucket: "team-alex-website.appspot.com",
  messagingSenderId: "116856305769",
  appId: "1:116856305769:web:141c8330503e53907e4af8",
  measurementId: "G-4EEFT4KBGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

function App() {

  const isMobile = window.innerWidth <= 500;

  const [name, setName] = useState('');

  const changeName = event => {
    setName(event.target.value);
  }

  const [email, setEmail] = useState('');

  const changeEmail = event => {
    setEmail(event.target.value);
  }

  function Submit(){
    DisplayThanks();
    PushToDatabase();
  }
  function DisplayThanks(){
    let info = document.getElementById("rightDiv");

    let thanks
    if(isMobile){
      thanks = document.getElementById("thanksM");
    }else{
      thanks = document.getElementById("thanks");
    }

    info.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
  
  function PushToDatabase(){
    push(ref(database, 'responses/'), {
      name: name,
      email: email
    });
  }

  if(!isMobile){
    return (
      <div className='container'>
        <div className="leftDiv">
          <video autoPlay muted loop class="bgvideo">
            <source src={require("./assets/video.mp4")} type="video/mp4"/>
          </video>
          
          <div className="black"></div>
  
          <img src={logo} alt="Logo" className='image'/>
        </div>
  
        <div class="rightDiv" id="rightDiv">
            <text className='title'>DILLIAD</text>
            <text className='title'>INTEREST FORM</text>
            <div className="padding"></div>
  
            <div class="form__group field">
              <input  onChange={changeName} type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Name</label>
            </div>
            <div className="padding"></div>
            <div class="form__group field">
              <input onChange={changeEmail} type="input" class="form__field" name="name" id='email' required />
              <label  for="name" class="form__label">Email Address</label>
            </div>
  
            <div className='padding'></div>
            
            <button className="submit" onClick={Submit}>
              Submit
            </button>
      </div>
  
      <div id="thanks" class="hidden">
        <text className='title'>Thank you!</text>
        <text className='padding'></text>
        <text className='text'>You'll be contacted with any updates involving DILLIAD.</text>
      </div>
  
      </div>
    );
  }else{
    return (
      <div className='containerM'>
        <div className="leftDivM">
          <img class="bgvideo" src={require("./assets/image.png")}/>
          
          <div className="black"></div>
  
          <img src={logo} alt="Logo" className='image'/>
        </div>
  
        <div class="rightDivM" id="rightDiv">
            <text className='title'>DILLIAD</text>
            <text className='title'>INTEREST FORM</text>
            <div className="padding"></div>

            <div class="form__group field">
              <input onChange={changeName} type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Name</label>
            </div>
            <div className="padding"></div>
            <div class="form__group field">
              <input onChange={changeEmail} type="input" class="form__field" name="name" id='email' required />
              <label for="name" class="form__label">Email Address</label>
            </div>
  
            <div className='padding'></div>
            
            <button className="submit" onClick={Submit}>
              Submit
            </button>
      </div>
  
      <div id="thanksM" class="hidden">
        <text className='title'>Thank you!</text>
        <text className='padding'></text>
        <text className='text'>You'll be contacted with any updates involving DILLIAD.</text>
      </div>
  
      </div>
    );
  }
}




export default App;