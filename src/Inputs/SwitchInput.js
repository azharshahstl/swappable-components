import React from 'react'; 
import classes from './SwitchInput.module.css'

const SwitchInput = (props) => {

    return (
        <div>
            <label className={classes.Switch}>
            <input type="checkbox"/>
            <span className={classes.SliderRound}></span>
            </label>
        </div>
    )
}

export default SwitchInput;