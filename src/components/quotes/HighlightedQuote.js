import classes from './HighlightedQuote.module.css';
import {Link} from 'react-router-dom';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      
      <p>{props.text}</p>
      <figcaption>
          {props.author}
          <Link className={`btn--flat ${classes.editButton}`} to={`/edit-quote/${props.quoteId}`}>
              Edit Quote
          </Link>
        </figcaption>
    </figure>
  );
};

export default HighlightedQuote;
