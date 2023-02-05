import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Profiles from './Components/Profiles';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Landing from './Components/Landing';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path="/" element={<Landing/>} />
    <Route path="/profiles" element={<Profiles/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
