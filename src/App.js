import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Generate from './components/Generate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/generate" element={<Generate/>}/> 
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/features" element={<Features/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
