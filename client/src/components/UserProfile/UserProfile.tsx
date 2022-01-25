import React from "react";
import i18n from "i18next";
import { OnClickFunction } from "../../types/Functions/OnClickFunction";
import { StyleObject } from "../../types/StyleObject";
import ProfileIcon from "./ProfileIcon/ProfileIcon";

const UserProfile = (
    { name, profileIcon, summonerLevel, refresh }
        : { name: string, profileIcon: string, summonerLevel: number, refresh: Function }
): JSX.Element => (
    <section className="user-profile section-container">
        <ProfileIcon
            profileIcon={profileIcon}
            summonerLevel={summonerLevel}
        />
        <div className="profile__main">
            <UserProfile.Text className="profile__summoner-name" text={name} style={{ fontWeight: "bold" }} />
            <UserProfile.Button
                className="refresh-button no-drag"
                text={i18n.t('button.refresh')}
                onClick={() => refresh()}
                style={{ color: "white" }}
            />
        </div>
    </section>
)

UserProfile.Text = (
    { className = "", text, style = {} }
        : { className?: string, text: string, style?: StyleObject }
): JSX.Element => (
    <p className={"profile__text " + className} style={{ ...style }}>{text}</p>
)

UserProfile.Button = (
    { className = "", text, onClick, style = {} }
        : { className?: string, text: string, onClick: OnClickFunction, style?: StyleObject }
): JSX.Element => (
    <button className={"refresh-button no-drag " + className} onClick={onClick} style={{ ...style }}>
        {text}
    </button>
)

export default UserProfile;