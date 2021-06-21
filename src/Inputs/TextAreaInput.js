import React from 'react'; 
import classes from './TextAreaInput.module.css'

const TextAreaInput = (props) => {

    return (
        <div className={classes.TADiv}>
            <label htmlFor="textarea" className={classes.TALabel}>Tell me something about yourself</label>
            <textarea id="textarea" placeholder="Hint text" className={classes.TAInput} />
        </div>
    )
}
export default TextAreaInput;