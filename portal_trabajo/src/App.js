import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SelectMode from './Components/SelectMode';
import Profiles from './Components/Profiles';
import SaveProfile from './Components/SaveProfile';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/profiles" element={<Profiles/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
