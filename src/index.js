import React from 'react';
import ReactDOM from 'react-dom';
// Personal preference is to have some spacing after and before curly brackets
import { BrowserRouter } from 'react-router-dom';
// Ordering your imports is helpful as files grow in size
// How you order is up to you, but consistency is key
// I tend to prefer absolute imports first then relative imports afterwards
// I also like alphabetizing so they are easy to find, but again, thats just personal preference
// The important bit really is coming up with an order and sticking to it
// Linters can help quite a bit to have this happen automatically
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

