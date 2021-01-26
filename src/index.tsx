import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch';
// import GuestList from './state/GuestList';

ReactDOM.render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>,
  document.querySelector('#root')
);
