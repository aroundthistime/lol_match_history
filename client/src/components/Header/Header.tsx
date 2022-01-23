import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { addSearchHistory } from '../../utils/searchHistoryHandlers';
import UserSearchForm from '../UserSearchForm/UserSearchForm';

const Header = (): JSX.Element => {
    // const [username, setUsername] = useState("");
    // const navigate = useNavigate();
    const params = useParams();
    const { username } = params;

    // const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //     setUsername(event.target.value);
    // }

    // const onSubmit = async (): Promise<void> => {
    //     if (username !== "") {
    //         navigate(`/histories/${username}`);
    //         await addSearchHistory(username);
    //     }
    // }

    // useEffect(() => {
    //     if (usernameParams) {
    //         setUsername(usernameParams);
    //     }
    // }, [usernameParams])

    return (
        <header className="header">
            <Link to="/">
                <h4 className="header__logo logo">LOLLY</h4>
            </Link>
            <UserSearchForm
                className='header__form'
                initialUsername={username}
            />
            {/* <form className="header__form" onSubmit={onSubmit}>
                <input
                    className='header__input'
                    placeholder='검색하고자 하는 소환사명을 입력하세요.'
                    value={username}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className='header__submit submit-button button'
                >
                    <span className="button__text button__text--default">검색</span>
                </button>
            </form> */}
        </header>
    )
}

export default Header;