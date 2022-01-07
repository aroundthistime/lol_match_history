import React, { ChangeEvent, useState } from 'react';

const Home = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    }

    return (
        <div className='home'>
            <div className="home__header">
                <h1 className='header__title'>LOLLY</h1>
                <h4 className='header__subtitle'>국내 no.1과는 거리가 먼 롤 전적 검색 사이트</h4>
            </div>
            <form className='home__form'>
                <input
                    className='home__input'
                    placeholder='검색하고자 하는 소환사명을 입력하세요.'
                    value={username}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className='home__submit button'
                    onSubmit={() => 1}
                />
            </form>
        </div>
    )
}

export default Home;