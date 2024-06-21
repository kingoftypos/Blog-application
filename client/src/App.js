import logo from './logo.svg';
import './App.css';
import Login from './components/account/Login';
import { Routes, Route } from "react-router-dom";
import Signup from './components/account/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path="/signup" element={<Signup/>}/>;
    <Route path="/login" element={<Login/>}/>;
      </Routes>
      
    </div>
  );
}

export default App;
