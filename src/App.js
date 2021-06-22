import React, { Component } from 'react'
import './App.css';
import SmallButton from './Buttons/SmallButton';
import LargeButton from './Buttons/LargeButton';
import TextInput from './Inputs/TextInput';
import TextAreaInput from './Inputs/TextAreaInput';
import SelectInput from './Inputs/SelectInput';
import CheckboxInput from './Inputs/CheckboxInput';
import RadioInput from './Inputs/RadioInput';
import SwitchInput from './Inputs/SwitchInput';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="HeaderBox-Top"></div>
        <div className="HeaderBox-Bottom">The Formy Form</div>
        <form>
          <TextInput />
          <br></br>
          <br></br>
          <TextAreaInput />
          <br></br>
          <br></br>
          <SelectInput />
          <br></br>
          <br></br>
          <CheckboxInput />
          <br></br>
          <br></br>
          <RadioInput />
          <br></br>
          <br></br>
          <SwitchInput />
          <br></br>
          <br></br>
          <SmallButton />
          <LargeButton />
        </form>
      </div>
    );
  }
 
}

export default App;
