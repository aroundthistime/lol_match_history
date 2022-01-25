import React from "react";
import i18n from "i18next";
import { Ban } from "../../types/Ban/Ban";
import { StyleObject } from "../../types/StyleObject";
import BannedChampion from "./BannedChampion/BannedChampion";

const Bans = (
    { blueTeamBans, redTeamBans, className = "", style = {} }
        : { blueTeamBans: Ban[], redTeamBans: Ban[], className?: string, style?: StyleObject }
): JSX.Element => (
    <div className={"bans " + className} style={{ ...style }}>
        <Bans.Team
            bannedChampions={blueTeamBans}
            teamColor="blue"
        />
        <p>{i18n.t("common.ban")}</p>
        <Bans.Team
            bannedChampions={redTeamBans}
            teamColor="red"
        />
    </div >
)

Bans.Team = ({ bannedChampions, teamColor }: { bannedChampions: Ban[], teamColor: string }) => (
    <div className={`bans__team bans__team--${teamColor}`}>
        {bannedChampions.map((bannedChampion: Ban, index) => {
            return (
                <BannedChampion
                    bannedChampion={bannedChampion}
                    style={{ border: `2px solid ${teamColor}` }}
                    key={index}
                />
            )
        })}
    </div>
)

export default Bans;