import React from 'react';
import classes from './SelectInput.module.css'

const SelectInput = (props) => {
    return (
        <div className={classes.SelectDiv}>
            <label htmlFor="addition" className={classes.SelectLabel} >What is 2 + 2?</label>
            <select id="addition" className={classes.SelectOptions}>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="4">4</option>
            </select>

        </div>
    )
}

export default SelectInput;