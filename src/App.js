import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('primary') //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if (mode === 'primary') {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <div className="container">
  <TextForm heading="Enter the text to analyze below" />
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
