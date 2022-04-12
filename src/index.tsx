import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from './App';
import {setupStore} from "./store/index";
import {Provider} from "react-redux";

const container = document.getElementById('root') as Element
const root = ReactDOMClient.createRoot(container)
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
