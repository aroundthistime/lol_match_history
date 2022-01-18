import React from "react";

const ProfileIcon = (
    { profileIcon, summonerLevel }
        : { profileIcon: string, summonerLevel: number }
): JSX.Element => (
    <div className="profile__icon no-drag">
        <img
            className="icon__image"
            alt={'소환사아이콘'}
            src={profileIcon}
        />
        <div className="icon__level-container">
            <div className="icon__level">
                <span className="level__text">{summonerLevel}</span>
            </div>
        </div>
    </div>
)

export default ProfileIcon;