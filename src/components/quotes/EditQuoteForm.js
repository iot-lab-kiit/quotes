import {useRef, useState, Fragment, useEffect} from 'react';
import {Prompt} from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const EditQuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);

    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredText = textInputRef.current.value;
        
        // optional: Could validate here

        props.onEditQuote({author: props.quoteData.author, text: enteredText});
    }

    const onFocusHandler = () => {
        setIsEntering(true);
    }

    const finishEntering = () => {
        setIsEntering(false);
    }

    useEffect(()=>{
        textInputRef.current.value=props.quoteData.text;
    },[props.quoteData.text])

    return (
        <Fragment>
            <Prompt when={isEntering} message={(location) => 'returning will cause entered data to be lost!'}/>
            <Card>
                <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner/>
                        </div>
                    )}
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEntering} className='btn'>Save Changes</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default EditQuoteForm;