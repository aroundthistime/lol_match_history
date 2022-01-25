import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Histories from './pages/Histories/Histories';
import History from './pages/History';
import Layout from './components/Layout/Layout';
import StatusMessage from './components/StatusMessage/StatusMessage';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')
  return (
    <div className='container'>
      <span>{t('page.home.subtitle')}</span>
      <button onClick={changelanguageToKo}>한국어</button>
      <button onClick={changelanguageToEn}>영어</button>
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
