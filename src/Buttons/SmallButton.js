import React from 'react'; 
import classes from './SmallButton.module.css'

const SmallButton = ({ submit }) => {
    return(
        <div className={classes.SmallButtonDiv}>
            <button className={classes.SmallButton} onClick={submit}>
                button
            </button>
        </div>
    )
}
export default SmallButton;