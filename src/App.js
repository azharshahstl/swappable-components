import React, { Component } from 'react'
import './App.css';
import SmallButton from './Buttons/SmallButton';
import LargeButton from './Buttons/LargeButton';
import TextInput from './Inputs/TextInput/TextInput';
import TextAreaInput from './Inputs/TextAreaInput/TextAreaInput';
import SelectInput from './Inputs/SelectInput/SelectInput';
import CheckboxInput from './Inputs/CheckboxInput/CheckboxInput';
import RadioInput from './Inputs/RadioInput/RadioInput';
import SwitchInput from './Inputs/SwitchInput/SwitchInput';

class App extends Component {

  state = {
    typing: "false",
    textAreaTyping: "false",
    inputValue: "",
    textAreaValue: "",
    requireMessage: "", 
    textAreaRequireMessage: "",
    selectInputRequireMessage: "",
    success: "default",
    textAreaSuccess: "default",
    selectInputSuccess: "default",
    answer: "4",
    selectAnswer: "",
    radioAnswer: "",
    checkboxAnswers: []
  }

  handleInputOnBlur = () => {
    if (this.state.inputValue.length === 0) {
        this.setState({requireMessage: "Required"})
    }
  }

  handleTextAreaOnBlur = () => {
    if (this.state.textAreaValue.length === 0) {
      this.setState({textAreaRequireMessage: "Required"})
    }
  }

  handleSelectInputOnBlur = () => {
    if (this.state.selectAnswer === "") {
      this.setState({selectInputRequireMessage: "Required"})
    }
  }

  handleInputOnChange = (event) => {
    this.setState({inputValue: event.target.value});
    if (event.target.value.length > 0) {
      this.setState({requireMessage: ""});
      this.setState({success: "typing"})
      this.setState({typing: "true"});
    } else {
      this.setState({typing: "false"})
      // this.setState({success: "failure"})
      this.setState({requireMessage: "Required"})
    }
  }

  handleTextAreaOnChange = (event) => {
    this.setState({textAreaValue: event.target.value});
    if (event.target.value.length > 0) {
      this.setState({textAreaRequireMessage: ""});
      this.setState({textAreaSuccess: "typing"})
      this.setState({textAreaTyping: "true"});
    } else {
      this.setState({textAreaTyping: "false"})
      // this.setState({success: "failure"})
      this.setState({textAreaRequireMessage: "Required"})
    }
  }

  handleOnClick = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleCheckboxOnClick = (event) => {
    this.setState({checkboxAnswers: [...this.state.checkboxAnswers, event.target.value]})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.requireMessage === "Required" || this.state.typing === "false") {
        this.setState({success: "failure"});
    }
        // this.setState({textAreaSuccess: "failure"});
    if (this.state.textAreaRequireMessage === "Required" || this.state.typing === "false") {
          this.setState({textAreaSuccess: "failure"});
    }
    if (this.state.selectInputRequireMessage === "Required") {
      this.setState({selectInputSuccess: "failure"});
    } 
    if (this.state.success === "typing" && this.state.textAreaSuccess === "typing") {
        this.setState({success: "success"});
        this.setState({textAreaSuccess: "success"});
        alert("May the form be with you");
        setTimeout(() => {
        this.setState({typing: "false"});
        this.setState({textAreaTyping: "false"});
        this.setState({inputValue: ""});
        this.setState({textAreaValue: ""});
        this.setState({requireMessage: ""}); 
        this.setState({textAreaRequireMessage: ""});
        this.setState({selectInputRequireMessage: ""});
        this.setState({success: "default"});
        this.setState({textAreaSuccess: "default"});
        this.setState({selectInputSuccess: "default"});
        }, 3000)
    }
  }

  render(){
    return (
      <div className="App">
        <div className="HeaderBox-Top"></div>
        <div className="HeaderBox-Bottom">The Formy Form</div>
        <form>
          <TextInput 
           typing={this.state.typing}
           inputValue={this.state.inputValue}
           requiredMessage={this.state.requireMessage}
           success={this.state.success}
           inputBlur={this.handleInputOnBlur}
           inputOnChange={this.handleInputOnChange} />
          <br></br>
          <br></br>
          <TextAreaInput
            typing={this.state.textAreaTyping}
            inputValue={this.state.textAreaValue}
            requiredMessage={this.state.textAreaRequireMessage}
            success={this.state.textAreaSuccess}
            inputBlur={this.handleTextAreaOnBlur}
            inputOnChange={this.handleTextAreaOnChange}
           />
          <br></br>
          <br></br>
          <SelectInput click={this.handleOnClick} 
            requiredMessage={this.state.selectInputRequireMessage}
            onBlur={this.handleSelectInputOnBlur}
            success={this.state.selectInputSuccess} />
          <br></br>
          <br></br>
          <CheckboxInput checkClick={this.handleCheckboxOnClick} />
          <br></br>
          <br></br>
          <RadioInput click={this.handleOnClick} />
          <br></br>
          <br></br>
          <SwitchInput />
          <br></br>
          <br></br>
          <SmallButton submit={this.handleSubmit}/>
          <LargeButton submit={this.handleSubmit} />
        </form>
      </div>
    );
  }
 
}

export default App;
