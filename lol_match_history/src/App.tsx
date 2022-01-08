import React from 'react';
import { BrowserRouter, Outlet, Route, RouteProps, Routes } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Histories from './pages/Histories/Histories';
import History from './pages/History';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/histories/:username'
            element={
              <Layout>
                <Histories />
              </Layout>
            }
          />
          <Route path='/history/:id' element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
