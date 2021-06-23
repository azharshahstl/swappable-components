import React from 'react';
import classes from './SelectInput.module.css'

const SelectInput = ({ click, requiredMessage, onBlur }) => {
    return (
        <div className={classes.SelectDiv}>
            <p className={classes.Required}>{requiredMessage}</p>
            {requiredMessage ? 
                <label htmlFor="addition" className={classes.AddAstericks}>
                What is 2 + 2?
                </label> : 
                <label htmlFor="addition" className={classes.SelectLabel}>
                What is 2 + 2?
                </label>}
            {/* <label htmlFor="addition" className={classes.SelectLabel} >What is 2 + 2?</label> */}
            <select id="addition" name="selectAnswer" className={classes.SelectOptions} onClick={click} onBlur={onBlur} >
                <option></option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="4">4</option>
            </select>

        </div>

    )
}

export default SelectInput;