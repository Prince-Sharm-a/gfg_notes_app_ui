import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { Route, Router, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Important } from './pages/important';
import { Archive } from './pages/archive';
import { Bin } from './pages/bin';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { useDebugValue, useEffect } from 'react';
import { getNotes } from './api/notes';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getNotes())
  },[])
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/important' element={<Important></Important>}></Route>
        <Route path='/archive' element={<Archive></Archive>}></Route>
        <Route path='/bin' element={<Bin></Bin>}></Route>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
