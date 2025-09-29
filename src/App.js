import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { Route, Router, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
