
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Employees from './components/Employees';
import EditEmployee from './components/EditEmployee';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Employees/>}></Route>
      <Route index element={<Employees/>}></Route>
      <Route path='/employeelist' element={<Employees/>}></Route>
      <Route path='/addemployee' element={<AddEmployee/>}></Route>
      <Route path='/editemployee/:id' element={<EditEmployee/>}></Route>
    </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
