import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import TableTimer from './components/TableTimer';
import UserInput from './components/UserInput';


function App() {
  return (
    <>
      <Router>
      <div className="App">
        <Navbar />
        <TableTimer/>
        <UserInput/>
      </div>
      </Router>
    </>
  );
}

export default App;