import React from 'react';
// import { useState } from 'react';
import classes from './TextInput.module.css';

const TextInput = (props) => {

    // const [typing, setTyping] = useState("false");
    // const [value, setValue] = useState("");
    // const [requireMessage, setRequireMessage] = useState("")

    // const handleOnBlur = () => {
    //     if (value.length === 0) {
    //         setRequireMessage("Required");         
    //     }
    // }

    // const handleOnChange = (event) => {
    //     setValue(event.target.value); 
    //     if (event.target.value.length > 0) {
    //         setRequireMessage("");
    //         setTyping("true");
            
    //     } else {
    //         setTyping("false");
    //     }
    // }
    let checkForSuccess;
    if (props.success === "success"){
        checkForSuccess = <>
        <input type="text" className={classes.Success} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
        <p className={classes.SuccessMessage}>Success! Even a broken clock is right twice a day.</p>
        </>
    } else if (props.success === "failure") {
        checkForSuccess = <>
        <input type="text" className={classes.Failure} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
        <p className={classes.FailureMessage}>You have failed me for the last time.</p>
        </>
    } else if (props.success === "default") {
        checkForSuccess = <input type="text" className={classes.Input} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
    } else if (props.success === "typing"){
        checkForSuccess = <input type="text" className={classes.Input} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />

    }

    return (
        <div className={classes.InputDiv}>
            <p className={classes.Required}>{props.requiredMessage}</p>
            {props.requiredMessage ? 
                <label htmlFor="answer" className={classes.AddAstericks}>
                What is the meaning of life?
                </label> : 
                <label htmlFor="answer" className={classes.InputLabel}>
                What is the meaning of life?
                </label>}
            {checkForSuccess}
        </div>
    )
    // else {
    //     return(
    //         <div className={classes.InputDiv}>
    //         <label htmlFor="answer" className={classes.InputLabel}>
    //          What is the meaning of life?
    //         </label>
    //         <input type="text" className={classes.Input} 
    //         id="answer"
    //         placeholder="Your answer"
    //         value={value}
    //         onBlur={handleOnBlur}
    //         onChange={handleOnChange} />
    //     </div> 
    //     )
    // }
 }
export default TextInput;