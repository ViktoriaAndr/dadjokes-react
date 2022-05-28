import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './Joke';

let upLikes = 0;
let downLikes = 0;

const buttonUp = () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
};

const buttonDown = () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
};

const App = () => (
  <div className="container">
    <Joke />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
