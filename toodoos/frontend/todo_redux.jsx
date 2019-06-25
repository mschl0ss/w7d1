import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { receiveTodo, receiveTodos } from './actions/todos_actions';
import {allTodos} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');

  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;


  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});