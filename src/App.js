import React from 'react';
import Header from './containers/header-container/header.container'
import AddNote from './containers/add-notes/add-notes.container'

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <AddNote></AddNote>
    </div>
  );
}

export default App;
