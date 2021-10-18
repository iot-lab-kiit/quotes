import classes from './CommentItem.module.css';
import { deleteComment } from '../../lib/api';
const CommentItem = (props) => {
  const deleteHandler = async (event)=>{
    event.preventDefault();
    await deleteComment(props.id)
  }
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button className = {classes.deleteButton} onClick = {deleteHandler}>Delete</button>
    </li>
  );
};

export default CommentItem;
