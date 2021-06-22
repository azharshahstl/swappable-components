import React, { useState } from 'react'; 
import classes from './SwitchInput.module.css'

const SwitchInput = (props) => {

    const [disable, setDisable] = useState("true")

    return (
        <div className={classes.Container}>
            <div>
                <label className={classes.Switch}>
                <input type="checkbox"/>
                <span className={classes.SliderRound}></span>
                </label>   
            </div>
            <button className={classes.ResQuestion} disable={disable}>
                Do you live in the US?
            </button>
        </div>
    )
}

export default SwitchInput;