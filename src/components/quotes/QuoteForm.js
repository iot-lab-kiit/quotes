import {useRef, useState, Fragment} from 'react';
import {Prompt, useHistory} from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);
    const history = useHistory();

    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({author: enteredAuthor, text: enteredText});
    }

    const onFocusHandler = () => {
        setIsEntering(true);
    }

    const finishEntering = () => {
        setIsEntering(false);
    }

    const closeFormHandler = () => {
      if (isEntering) {
        history.goBack();
        return;
      }
      history.goBack();
      setIsEntering(false);
    }

    return (
        <Fragment>
            <Prompt when={isEntering} message={(location) => 'returning will cause entered data to lose!'}/>
            <Card>
                <div className={classes.closeButtonContainer} onClick={closeFormHandler}>
                    <button className={classes.closeButton}>
                        x
                    </button>
                </div>
                <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner/>
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEntering} className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default QuoteForm;
