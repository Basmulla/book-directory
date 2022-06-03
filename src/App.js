import React from "react";
import {
  HashRouter as Router, Navigate, Route, Routes
} from 'react-router-dom';
import {EditBookPage, HomePage} from './containers';
import Header from './components/Header/Header';

import './Header.module.css';

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<HomePage/>}  render={() => (
            <Navigate to="/book-directory-client" />
          )} />
        <Route exact path="/book-directory-client" element={<HomePage/>} />
        <Route exact path="/:id" element={<EditBookPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;