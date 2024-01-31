import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import logo from './assets/logo.png'
import video from './assets/video.mp4'

function App() {

  const isMobile = window.innerWidth <= 500;

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
              <input type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Name</label>
            </div>
            <div className="padding"></div>
            <div class="form__group field">
              <input type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Email Address</label>
            </div>
  
            <div className='padding'></div>
            
            <button className="submit" onClick={DisplayThanks}>
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
          <video autoPlay muted playsinline loop class="bgvideo">
            <source src={require("./assets/video.mp4")} type="video/mp4"/>
          </video>
          
          <div className="black"></div>
  
          <img src={logo} alt="Logo" className='image'/>
        </div>
  
        <div class="rightDivM" id="rightDiv">
            <text className='title'>DILLIAD</text>
            <text className='title'>INTEREST FORM</text>
            <div className="padding"></div>

            <div class="form__group field">
              <input type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Name</label>
            </div>
            <div className="padding"></div>
            <div class="form__group field">
              <input type="input" class="form__field" name="name" id='name' required />
              <label for="name" class="form__label">Email Address</label>
            </div>
  
            <div className='padding'></div>
            
            <button className="submit" onClick={DisplayThanks}>
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
  }
}

function DisplayThanks(){
  let info = document.getElementById("rightDiv");
  let thanks = document.getElementById("thanks");
  info.classList.add("hidden");
  thanks.classList.remove("hidden");
}

export default App;