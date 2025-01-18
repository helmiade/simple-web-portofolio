import React from 'react';
import ReactDOM from 'react-dom/client'; // Pastikan Anda mengimpor ReactDOM dari 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App.jsx';

// Buat root dengan ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
