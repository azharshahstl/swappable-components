import React from 'react';
import { useState } from 'react';
import classes from './TextInput.module.css';

const TextInput = (props) => {

    const [require, setRequire] = useState("");
    const [value, setValue] = useState("");
    const [requireMessage, setRequireMessage] = useState("")

    const handleOnBlur = () => {
        if (value.length === 0) {
            setRequireMessage("Required");
            setRequire("*");
            
        }
    }

    const handleOnChange = (event) => {
        setValue(event.target.value); 
        if (event.target.value.length > 0) {
            setRequire("");
        }

    }

    if (requireMessage) {

    return (
        <div className={classes.InputDiv}>
            <p className={classes.Required}>{requireMessage}</p>
            <label htmlFor="answer" className={classes.AddAstericks}>
             What is the meaning of life?
            </label>
            <input type="text" className={classes.Input} 
            id="answer"
            placeholder="Your answer"
            value={value}
            onBlur={handleOnBlur}
            onChange={handleOnChange} />
        </div>
    )}
    else {
        return(
            <div className={classes.InputDiv}>
            <label htmlFor="answer" className={classes.InputLabel}>
             What is the meaning of life?
            </label>
            <input type="text" className={classes.Input} 
            id="answer"
            placeholder="Your answer"
            value={value}
            onBlur={handleOnBlur}
            onChange={handleOnChange} />
        </div> 
        )
    }
}
export default TextInput;