import React from "react";

const UserProfile = (
    { name, profileIconId, summonerLevel }
        : { name: string, profileIconId: number, summonerLevel: number }
): JSX.Element => (
    <section className="user-profile">
        <div className="profile__icon">
            <img className="icon__image" alt={`소환사아이콘${profileIconId}`} />
            <div className="icon__level">
                <span className="level__text">{summonerLevel}</span>
            </div>
        </div>
        <div className="profile__main">
            <h4 className="profile__summoner-name">{name}</h4>
            <button className="refresh-button">새로고침</button>
        </div>
    </section>
)

export default UserProfile;