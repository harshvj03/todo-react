import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useState,useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from './firebase';

function App() {

  const [todos, setTodo] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodo(snapshot.docs.map(doc => doc.data().todo));
    })
  }, [])

  const addTodo = (event) => {

    event.preventDefault();
    // console.log('👽', 'im working');
    
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodo([...todos, input]);
    setInput('');

  }


  return (
    <div className="App">
      <h1>To-do App 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => <Todo text={todo} />)}
      </ul>
    </div>
  );
}

export default App;
