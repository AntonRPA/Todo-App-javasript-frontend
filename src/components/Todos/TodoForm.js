import { useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormConainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          <RiSendPlane2Fill />
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
