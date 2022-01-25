import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSearchHistory } from "../../utils/searchHistoryHandlers";
import i18n from "i18next";

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
                placeholder={i18n.t('input.usernameInput.placeholder')}
                value={username}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className='button submit-button user-search-form__button'
            >
                <span className="button__text">{i18n.t('button.search')}</span>
            </button>
        </form>
    )
}

export default UserSearchForm;