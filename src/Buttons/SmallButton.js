import React from 'react'; 
import classes from './SmallButton.module.css'

const SmallButton = (props) => {
    return(
        <div className={classes.SmallButtonDiv}>
            <button className={classes.SmallButton} >
                button
            </button>
        </div>
    )
}
export default SmallButton;