import React from 'react';
import ReactDOM from 'react-dom/client';
import './constant/importedCss'
import App from './App';
import { Provider } from 'react-redux';
import store from './mes composants/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

