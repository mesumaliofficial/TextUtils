import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  
 const [mode, setMode] = useState('light');
 
 const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=> {
  
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);

 }

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-primary')
}

   const ToggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
  if(mode === 'light') {
    setMode('dark');
  // document.body.style.filter = 'blur(8px)';
    // document.body.style.color = 'white';
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been Enable.", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    // document.body.style.color = 'black';
    showAlert("light mode has been Enable.", "success");

  }
 }

 return (
    <>
      <Navbar title={'TextUtils'} item={'TextForm'} mode={mode} ToggleMode={ToggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>

          {/* <About mode={mode}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>
      </div>
    </>
  );
}

export default App;
