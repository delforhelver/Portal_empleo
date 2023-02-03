import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SelectMode from './Components/SelectMode';
import Profiles from './Components/Profiles';
import SaveProfile from './Components/SaveProfile';
import Login from './Components/Login';

function App() {
  return (
   <>
   <NavBar/>
 {/*  <SelectMode/>  */}
  {/* <Profiles/>   */}
 {/* <SaveProfile/> */}
   <Login/>
   <Footer/>
   </>
  );
}

export default App;
