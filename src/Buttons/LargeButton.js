import React from 'react'; 
import classes from './LargeButton.module.css'

const LargeButton = (props) => {
    return(
        <div className={classes.LargeButtonDiv}>
            <button className={classes.Button} >
                button
            </button>
        </div>
    )
}
export default LargeButton;