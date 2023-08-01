import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import Fooder from './components/public/Fooder';
import Detail from './components/public/Detail';
import UseForm from './components/public/UseForm';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/use-form"} element={<UseForm />} />
      </Routes>
      <Fooder />

    </div>
  );
}

export default App;
