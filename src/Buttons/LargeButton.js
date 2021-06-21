import React from 'react'; 
import classes from './LargeButton.module.css'

const LargeButton = (props) => {
    return(
        <div>
            <button className={classes.Button} >
                button
            </button>
        </div>
    )
}
export default LargeButton;