import React, { useState } from 'react'; 
import classes from './SwitchInput.module.css'

const SwitchInput = (props) => {

    const [disable, setDisable] = useState("true")

    const handleSwitchOnClick = () => {
        setDisable((!disable).toString());
    }

    const handleButtOnClick = (event) => {
        event.preventDefault();
        setDisable("true");
        alert("Do you live in the US button has been clicked");
    }

    return (
        <div className={classes.Container} onClick={handleSwitchOnClick}>
            <div>
                <label className={classes.Switch}>
                <input type="checkbox"/>
                <span className={classes.SliderRound}></span>
                </label>   
            </div>
            <button className={classes.ResQuestion} disable={disable} onClick={handleButtOnClick}>
                Do you live in the US?
            </button>
        </div>
    )
}

export default SwitchInput;