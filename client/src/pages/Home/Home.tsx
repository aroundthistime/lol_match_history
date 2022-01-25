import React from 'react';
import bgImage from "../../assets/images/main-bg.png";
import UserSearchForm from '../../components/UserSearchForm/UserSearchForm';
import i18n from "i18next";

const Home = (): JSX.Element => (
    <div className='home'>
        <Home.BgImage />
        <Home.Header />
        <UserSearchForm className='home__form' />
    </div>
)

Home.BgImage = (): JSX.Element => (
    <img src={bgImage} alt="포로" className="home__bg-image no-drag" />
)

Home.Header = (): JSX.Element => {
    console.log(i18n.t('button.search'));
    return (
        <div className="home__header no-drag">
            <h1 className='header__title logo'>{i18n.t('page.home.title')}</h1>
            <h4 className='header__subtitle'>국내 no.1과는 거리가 먼 롤 전적 검색 사이트</h4>
        </div>
    )
}


export default Home;