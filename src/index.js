import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
