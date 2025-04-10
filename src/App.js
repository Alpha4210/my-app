import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route} from "react-router";

function App() {
  const [mode, setMode] = useState('primary') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);


  }
  const toggleMode = ()=>{
    if (mode === 'primary') {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  // For getting red colour theme
  const toggleMode2 = ()=>{
    if (mode === 'primary') {
      setMode('red')
      document.body.style.backgroundColor = "red"
      let a = document.getElementById('main-nav')
      a.style.backgroundColor = '#343a40'
      showAlert("red mode has been enabled", "success")
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  // For getting green colour theme
  const toggleMode3 = ()=>{
    if (mode === 'primary') {
      setMode('green')
      document.body.style.backgroundColor = "green"
      let a = document.getElementById('main-nav')
      a.style.backgroundColor = '#343a40'
      showAlert("green mode has been enabled", "success")
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  // For getting blue colour theme
  const toggleMode4 = ()=>{
    if (mode === 'primary') {
      setMode('blue')
      document.body.style.backgroundColor = "blue"
      let a = document.getElementById('main-nav')
      a.style.backgroundColor = '#343a40'
      showAlert("blue mode has been enabled", "success")
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    
  <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4}/> 
  <div className="container">
  <Alert alert={alert} /> 
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes>
  </div>
  </BrowserRouter>
    </>
  );
}

export default App;

// for dynamically changing the title of the page
      // document.title = 'TextUtils - dark mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing' //similar to the website showing your laptop has virus download to remove it XD
      // }, 2000);