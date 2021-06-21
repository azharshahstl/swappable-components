import React from 'react';
import classes from "./RadioInput.module.css"

const RadioInput = (props) => {

    return (
        
            <div className={classes.RadioDiv} >
            <div className={classes.Question}>What is 2 + 2?</div>
            <div className={classes.Inputs}>
                <input type="radio" id="3" name="number3" value="3"/>
                <label htmlFor="3">3</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="4" name="number4" value="4"/>
                <label htmlFor="4">4</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="1" name="number1" value="1"/>
                <label htmlFor="1">1</label>
            </div>
            <div className={classes.Inputs} >
                <input type="radio" id="5" name="number5" value="5" />
                <label htmlFor="5">5</label>
            </div>
        </div>
    )
}

export default RadioInput;