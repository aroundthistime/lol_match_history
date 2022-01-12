import React from 'react';
import { BrowserRouter, Outlet, Route, RouteProps, Routes } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Histories from './pages/Histories/Histories';
import History from './pages/History';
import Layout from './components/Layout/Layout';
import StatusMessage from './components/StatusMessage/StatusMessage';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/histories/:username' element={
            <Layout>
              <Histories />
            </Layout>
          } />
          <Route path='/history/:id' element={
            <Layout>
              <History />
            </Layout>
          } />
          <Route path='*' element={
            <Layout>
              <StatusMessage text="잘못된 접근입니다." />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
