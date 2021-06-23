import React from 'react';
import classes from './CheckboxInput.module.css'

const CheckboxInput = ({ checkClick }) => {

    return (
        <div className={classes.CheckboxDiv} >
            <div className={classes.Question}>What kinds of vehicles do you own?</div>
            <div className={classes.Inputs}>
                <input type="checkbox" id="3" name="v1" value="Honda" onClick={checkClick}/>
                <label htmlFor="3">Honda</label>
            </div>
            <div className={classes.Inputs}>
                <input type="checkbox" id="4" name="v2" value="Ford" onClick={checkClick}/>
                <label htmlFor="4">Ford</label>
            </div>
            <div className={classes.Inputs}>
                <input type="checkbox" id="1" name="v3" value="Toyota" onClick={checkClick}/>
                <label htmlFor="1">Toyota</label>
            </div>
            <div className={classes.Inputs} >
                <input type="checkbox" id="5" name="other" value="other" onClick={checkClick} />
                <label htmlFor="5">other</label>
            </div>
            <div className={classes.Inputs} >
                <input type="checkbox" id="6" name="none" value="none" onClick={checkClick} />
                <label htmlFor="6">none</label>
            </div>
        </div>
    )
}

export default CheckboxInput;