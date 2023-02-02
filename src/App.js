import Header from './Header.js';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login.js';
import Register from './Register.js';
import DashBoard from './DashBoard';
import { useState } from 'react';
import Table from './Table';
import Footer from './Footer';



function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [isLoggedOut , setIsLoggedOut] = useState(false)

  return (
    <BrowserRouter>
     <div className="App">
      {isLoggedIn ? <h1></h1> :<Header/>}
      {isLoggedOut && <DashBoard/>}
      

      <Routes>
        <Route path="/About" element ={<About/>} />
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login loginStatus={{isLoggedIn ,setIsLoggedIn }}/>} />
        <Route path="/Register" element ={<Register/>} />
        <Route path="/dashboard" element={<DashBoard logoutStatus={{isLoggedOut ,setIsLoggedOut }}/>}/>
        <Route path ="/Table" element={<Table/>}/>
      </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
   
  );
}

export default App;
