import React from "react";
import {
  HashRouter as Router, Route, Routes
} from 'react-router-dom';
import {EditBookPage, HomePage} from './containers';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" render={() => (
            <Redirect to="/book-directory-client" />
          )} />
        <Route exact path="/book-directory-client/:id" element={<EditBookPage/>} />
      </Routes>
    </Router>
  );
}

export default App;