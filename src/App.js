import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Body from './components/Body';
import Barkaas from './components/Barkaas';
import Signup from './components/Signup';
import Littlevillage from './components/Littlevillage';
import Hugamug from './components/Hugamug';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
     < Route path="/login" element={<Login />} />
     < Route path="/signup" element={<Signup />} />
     < Route path="/body" element={<Body />} />
     < Route path="/barkaas" element={<Barkaas />} />
     < Route path="/Littlevillage" element={<Littlevillage />} />
     < Route path="/Hugamug" element={<Hugamug />} />
    </Routes>
        </BrowserRouter>
  );
}

export default App;
