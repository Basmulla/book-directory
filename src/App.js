import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import {EditBookPage, HomePage} from './containers';
import Header from './components/Header/Header';

import './Header.module.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/book-directory-client" element={<HomePage/>} />
        <Route exact path="/:id" element={<EditBookPage/>} />
      </Routes>
    </Router>
  );
}

export default App;