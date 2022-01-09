import React from "react";

const UserProfile = (
    { name, profileIconId, profileIconUri, summonerLevel, refresh }
        : { name: string, profileIconId: number, profileIconUri: string, summonerLevel: number, refresh: Function }
): JSX.Element => (
    <section className="user-profile">
        <div className="profile__icon no-drag">
            <img
                className="icon__image"
                alt={`소환사아이콘${profileIconId}`}
                src={profileIconUri}
            />
            <div className="icon__level-container">
                <div className="icon__level">
                    <span className="level__text">{summonerLevel}</span>
                </div>
            </div>
        </div>
        <div className="profile__main">
            <h4 className="profile__summoner-name">{name}</h4>
            <button className="refresh-button no-drag" onClick={() => refresh()}>
                <span className="refresh-button__text">전적갱신</span>
            </button>
        </div>
    </section>
)

export default UserProfile;