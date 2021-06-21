import React from 'react'; 
import classes from './SmallButton.module.css'

const SmallButton = (props) => {
    return(
        <div className={classes.SmallButtonDiv}>
            <button className={classes.Button} >
                button
            </button>
        </div>
    )
}
export default SmallButton;