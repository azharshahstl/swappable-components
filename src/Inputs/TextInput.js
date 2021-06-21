import React from 'react';
import classes from './TextInput.module.css';

const TextInput = (props) => {
    return (
        <div className={classes.InputDiv}>
            <label htmlFor="answer" className={classes.InputLabel} >What is the meaning of life?</label>
            <input type="text" className={classes.Input} id="answer" placeholder="Your answer" />
        </div>
    )
}
export default TextInput;