import React, { useState } from 'react'; 
import classes from './SwitchInput.module.css'

const SwitchInput = (props) => {

    const [disable, setDisable] = useState(true)

    const handleSwitchOnClick = () => {
        console.log(disable)
        if (disable === true) {
        setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const handleButtOnClick = (event) => {
        event.preventDefault();
        alert("Do you live in the US button has been clicked");
        setDisable(true);
    }

    return (
        <div className={classes.Container} >
            <div>
                <label className={classes.Switch}>
                <input type="checkbox" onClick={handleSwitchOnClick} />
                <span className={classes.SliderRound} ></span>
                </label>   
            </div>
            <button className={classes.ResQuestion} disabled={disable} onClick={handleButtOnClick}>
                Do you live in the US?
            </button>
        </div>
    )
}

export default SwitchInput;