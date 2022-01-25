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
  const changeLanguageToKo = (event: any) => {
    console.log(1);
    //  i18n.changeLanguage('ko');
  }
  const changeLanguageToEn = (event: React.MouseEvent<HTMLElement>) => {
    console.log(2);
    // i18n.changeLanguage('en');
  }
  return (
    <div className='container'>
      {/* <span className="left" onClick={() => { alert("left"); }}>Left</span>
      <div onClick={() => { alert("left"); }}>영어</div>
      <button onClick={changeLanguageToKo}>한국어</button>
      <button onClick={changeLanguageToEn}>영어</button> */}
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
              <StatusMessage text={i18n.t('statusMessage.unauthorizedAccess')} />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
