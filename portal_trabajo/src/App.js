import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Profiles from './Components/Profiles';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Landing from './Components/Landing';
import { useState } from 'react';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setIsLogged(false);
  };

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
   <>
   <BrowserRouter>
   <NavBar isLogged={isLogged} handleLogout={handleLogout}/>
   <Routes>
   <Route path="/" element={<Landing/>} />
    <Route path="/profiles" element={<Profiles/>} />
    <Route path="/login" element={<Login onLogin={handleLogin}/>} />
    <Route path="/register" element={<Register/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
