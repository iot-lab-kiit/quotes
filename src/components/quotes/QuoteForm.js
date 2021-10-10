<<<<<<< HEAD
import { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router-dom';
=======
import {useRef, useState, Fragment} from 'react';
import {Prompt, useHistory} from 'react-router-dom';
>>>>>>> 3434d515717b95587b94b78732c84931f46176d8

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
<<<<<<< HEAD
  const [isEntering, setIsEntering] = useState(false);
=======
    const [isEntering, setIsEntering] = useState(false);
    const history = useHistory();
>>>>>>> 3434d515717b95587b94b78732c84931f46176d8

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (!enteredAuthor.trim() || !enteredText.trim()) {
      return;
      //   for repo maintainer - "You can throw a new error after this as follows-"
      // throw new Error('Invalid input')
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });

    // clears field after submitting
    authorInputRef.current.value = '';
    textInputRef.current.value = '';
  }

  const onFocusHandler = () => {
    setIsEntering(true);
  };

  const finishEntering = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => 'returning will cause entered data to lose!'}
      />
      <Card>
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

<<<<<<< HEAD
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEntering} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
=======
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
>>>>>>> 3434d515717b95587b94b78732c84931f46176d8
};

export default QuoteForm;
