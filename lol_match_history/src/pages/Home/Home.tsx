import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "../../assets/images/main-bg.png";

const Home = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    }

    const onSubmit = (): void => {
        if (username !== "") {
            navigate(`/histories/${username}`);
        }
    }

    return (
        <div className='home'>
            <img src={bgImage} alt="포로" className="home__bg-image no-drag" />
            <div className="home__header no-drag">
                <h1 className='header__title logo'>LOLLY</h1>
                <h4 className='header__subtitle'>국내 no.1과는 거리가 먼 롤 전적 검색 사이트</h4>
            </div>
            <form className='home__form' onSubmit={onSubmit}>
                <input
                    className='home__input'
                    placeholder='검색하고자 하는 소환사명을 입력하세요.'
                    value={username}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className='home__submit button'
                >검색</button>
            </form>
        </div>
    )
}

export default Home;