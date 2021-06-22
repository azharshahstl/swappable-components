import React, { useState } from 'react'; 
import classes from './TextAreaInput.module.css'

const TextAreaInput = (props) => {

    const [text, setText] = useState("");
    const [requireMessage, setRequireMessage] = useState("")
    const [typing, setTyping] = useState("");

    const handleOnBlur = () => {
        if (text.length === 0) {
            setRequireMessage("Required");         
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        if (event.target.value.length > 0) {
            setRequireMessage("");
            setTyping("true");
            
        } else {
            setTyping("false");
        }
    }

    // const handleOnKeyUp = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <div className={classes.TADiv}>
            <p className={classes.Required}>{requireMessage}</p>
            {requireMessage ? <label htmlFor="textarea" maxLength="250" className={classes.AddAstericks}>Tell me something about yourself</label>
             : <label htmlFor="textarea" maxLength="250" className={classes.TALabel}>Tell me something about yourself</label>}
            <textarea id="textarea"
             placeholder="Hint text" 
             className={classes.TAInput}
             typing={typing}
             value={text}
             onChange={handleOnChange}
             onBlur={handleOnBlur}/>
            <div className={classes.Counter}>
                <span>{text.length}</span>
                <span>/ 250</span>
            </div>
        </div>
    )
}
export default TextAreaInput;