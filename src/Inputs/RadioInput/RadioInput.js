import React from 'react';
import classes from "./RadioInput.module.css"

const RadioInput = ({ click }) => {

    return (
        
            <div className={classes.RadioDiv} >
            <div className={classes.Question}>What is 2 + 2?</div>
            <div className={classes.Inputs}>
                <input type="radio" id="3" name="radioAnswer" value="3" onClick={click}/>
                <label htmlFor="3">3</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="4" name="radioAnswer" value="4" onClick={click}/>
                <label htmlFor="4">4</label>
            </div>
            <div className={classes.Inputs}>
                <input type="radio" id="1" name="radioAnswer" value="1" disabled onClick={click}/>
                <label htmlFor="1">1</label>
            </div>
            <div className={classes.Inputs} >
                <input type="radio" id="5" name="radioAnswer" value="5" onClick={click}/>
                <label htmlFor="5">5</label>
            </div>
        </div>
    )
}

export default RadioInput;