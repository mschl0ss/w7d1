import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

const Root = (props) =>(
  <Provider store={props.store} >
    <h1>WHATEVER THIS IS ON ROOT</h1>
  </Provider>
);


export default Root;