import React from "react";
import ProfileIcon from "./ProfileIcon/ProfileIcon";

const UserProfile = (
    { name, profileIcon, summonerLevel, refresh }
        : { name: string, profileIcon: string, summonerLevel: number, refresh: Function }
): JSX.Element => (
    <section className="user-profile">
        <ProfileIcon
            profileIcon={profileIcon}
            summonerLevel={summonerLevel}
        />
        <div className="profile__main">
            <h4 className="profile__summoner-name">{name}</h4>
            <button className="refresh-button no-drag" onClick={() => refresh()}>
                <span className="refresh-button__text">전적갱신</span>
            </button>
        </div>
    </section>
)

export default UserProfile;