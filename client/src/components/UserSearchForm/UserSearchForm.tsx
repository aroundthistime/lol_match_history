import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSearchHistory } from "../../utils/searchHistoryHandlers";

const UserSearchForm = (
    { initialUsername = "", className = "" }
        : { initialUsername?: string, className?: string }
): JSX.Element => {
    const [username, setUsername] = useState(initialUsername);
    const navigate = useNavigate();

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    }

    const onSubmit = async (): Promise<void> => {
        if (username !== "") {
            navigate(`/histories/${username}`);
            await addSearchHistory(username);
        }
    }

    return (
        <form className={'user-search-form ' + className} onSubmit={onSubmit}>
            <input
                type="text"
                name="username"
                className='user-search-form__input'
                placeholder='검색하고자 하는 소환사명을 입력하세요.'
                value={username}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className='button submit-button user-search-form__button'
            >
                <span className="button__text">검색</span>
            </button>
        </form>
    )
}

export default UserSearchForm;