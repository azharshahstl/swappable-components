import React from 'react';
import classes from "./RadioInput.module.css"

const RadioInput = (props) => {

    return (
        
            <div className={classes.RadioDiv} >
            <div className={classes.Question}>What is 2 + 2?</div>
            <div className={classes.Inputs}>
                <input type="radio" id="3" name="answer" value="3"/>
                <label htmlFor="3">3</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="4" name="answer" value="4"/>
                <label htmlFor="4">4</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="1" name="answer" value="1"/>
                <label htmlFor="1">1</label>
            </div>
            <div className={classes.Inputs} >
                <input type="radio" id="5" name="answer" value="5" />
                <label htmlFor="5">5</label>
            </div>
        </div>
    )
}

export default RadioInput;