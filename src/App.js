import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(()=>{
      //   document.title="install MY-APP";
      // },1500);
      // setInterval(()=>{
      //   document.title="update MY-APP";
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="My-App" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
         <Route exact path='/about' element={<About mode={mode}/>} />
         <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />} />
      </Routes>     
      </div>
    </Router>
    </>
  );
}

export default App;
