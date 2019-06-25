import React from 'react';


const TodoList = (props) => (
  <ul>
    {props.todos.map( todo => (
       todo.title
    )};
  </ul>
  );

export default TodoList;