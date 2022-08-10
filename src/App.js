import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

function App() {
  return (  
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
