import React from 'react';
import { useState } from 'react';
import classes from './TextInput.module.css';

const TextInput = (props) => {

    const [typing, setTyping] = useState("false");
    const [value, setValue] = useState("");
    const [requireMessage, setRequireMessage] = useState("")

    const handleOnBlur = () => {
        if (value.length === 0) {
            setRequireMessage("Required");         
        }
    }

    const handleOnChange = (event) => {
        setValue(event.target.value); 
        if (event.target.value.length > 0) {
            setRequireMessage("");
            setTyping("true");
            
        } else {
            setTyping("false");
        }
    }

    return (
        <div className={classes.InputDiv}>
            <p className={classes.Required}>{requireMessage}</p>
            {requireMessage ? 
                <label htmlFor="answer" className={classes.AddAstericks}>
                What is the meaning of life?
                </label> : 
                <label htmlFor="answer" className={classes.InputLabel}>
                What is the meaning of life?
                </label>}
            <input type="text" className={classes.Input} 
            typing={typing}
            id="answer"
            placeholder="Your answer"
            value={value}
            onBlur={handleOnBlur}
            onChange={handleOnChange} />
        </div>
    )}
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
// }
export default TextInput;