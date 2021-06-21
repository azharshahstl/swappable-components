import React from 'react'; 
import classes from './SwitchInput.module.css'

const SwitchInput = (props) => {

    return (
        <div className={classes.Container}>
            <div>
                <label className={classes.Switch}>
                <input type="checkbox"/>
                <span className={classes.SliderRound}></span>
                </label>   
            </div>
            <button className={classes.ResQuestion}>
                Do you live in the US?
            </button>
        </div>
    )
}

export default SwitchInput;