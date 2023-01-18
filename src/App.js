//import React from 'react';
import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {updateDisplay, selectDisplay} from './features/display/displaySlice.js';
import './App.css';


function App() {
  const display = useSelector(selectDisplay);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <div className="DrumMachine" id="drum-machine">
          <div className="row">
            <div className='col-6 buttons'>
              <div className='row'>
                <div className='col-4'><DrumPad name="Heater 1" text="Q" audio="Heater-1.mp3"/></div>
                <div className='col-4'><DrumPad name="Heater 2" text="W" audio="Heater-2.mp3"/></div>
                <div className='col-4'><DrumPad name="Heater 3" text="E" audio="Heater-3.mp3"/></div>
              </div>
              <div className='row'>
                <div className='col-4'><DrumPad name="Heater 4" text="A" audio="Heater-4_1.mp3"/></div>
                <div className='col-4'><DrumPad name="Clap" text="S" audio="Heater-6.mp3"/></div>
                <div className='col-4'><DrumPad name="Open High Hat" text="D" audio="Dsc_Oh.mp3"/></div>
              </div>
              <div className='row'>
                <div className='col-4'><DrumPad name="Kick n Hat" text="Z" audio="Kick_n_Hat.mp3"/></div>
                <div className='col-4'><DrumPad name="Kick" text="X" audio="RP4_KICK_1.mp3"/></div>
                <div className='col-4'><DrumPad name="Closed High Hat" text="C" audio="Cev_H2.mp3"/></div>
              </div>
            </div>
            <div className='col-6 display'>
              <div id="display">
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export function Display (){
  const display = useSelector(selectDisplay);
  //const display = 'sddsds'
  const dispatch = useDispatch();
  return (
    <div>{display}</div>
  )
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    //apply this to functions
    this.handleChange = this.handleChange.bind(this);
    this.playDrum = this.playDrum.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this)
    this.state = {

    }
  }
  
  // functions
  playDrum() {
    let drum = document.getElementById(this.props.text)
    drum.currentTime = 0
    drum.play();
    document.getElementById('display').innerHTML = this.props.name
  }
  onKeyPress(event){
    if(event.key.toLowerCase() === this.props.text.toLowerCase()) {
      this.playDrum()
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.onKeyPress, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyPress, false);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return (
      <div id={this.props.name} className="drum-pad" onClick={this.playDrum}>{this.props.text}
    <audio className="clip" id={this.props.text} src={"./audio/"+this.props.audio}></audio>
    </div>
    );
  }
}

export default App;

