import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      // for dynamically changing the title of the page
      // document.title = 'TextUtils - dark mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing' //similar to the website showing your laptop has virus download to remove it XD
      // }, 2000);
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert} /> 
  <div className="container">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
