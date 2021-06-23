import React from 'react'; 
import classes from './LargeButton.module.css'

const LargeButton = ({ submit }) => {
    return(
        <div className={classes.LargeButtonDiv}>
            <button className={classes.LargeButton} onClick={submit} >
                button
            </button>
        </div>
    )
}
export default LargeButton;