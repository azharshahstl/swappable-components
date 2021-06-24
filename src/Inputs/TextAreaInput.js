
import classes from './TextAreaInput.module.css'

const TextAreaInput = (props) => {

    let checkForSuccess;

    if (props.success === "success"){
        checkForSuccess = <>
        <input type="text" className={classes.Success} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
        <p className={classes.SuccessMessage}>Success! Even a broken clock is right twice a day.</p>
        </>
    } else if (props.success === "failure") {
        checkForSuccess = <>
        <input type="text" className={classes.Failure} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
        <p className={classes.FailureMessage}>You have failed me for the last time.</p>
        </>
    } else if (props.success === "default" || props.success === "typing") {
        checkForSuccess = <input type="text" className={classes.TAInput} 
        typing={props.typing}
        id="answer"
        placeholder="Your answer"
        value={props.inputValue}
        onBlur={props.inputBlur}
        onChange={props.inputOnChange} />
    } 

    return (
        <div className={classes.TADiv}>
            <p className={classes.Required}>{props.requiredMessage}</p>
            {props.requiredMessage ? 
                <label htmlFor="textarea" maxLength="250" className={classes.AddAstericks}>
                Tell me something about you.
                </label> : 
                <label htmlFor="textarea" maxLength="250" className={classes.TALabel}>
                Tell me something about you.
                </label>}
            {checkForSuccess}
            <div className={classes.Counter}>
                <span>{props.inputValue.length}</span>
                <span>/ 250</span>
            </div>
        </div>
    )
}
export default TextAreaInput;