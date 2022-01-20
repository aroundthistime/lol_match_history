import React from "react";
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
        <p>금지된 챔피언</p>
        <Bans.Team
            bannedChampions={redTeamBans}
            teamColor="red"
        />
    </div >
)

Bans.Team = ({ bannedChampions, teamColor }: { bannedChampions: Ban[], teamColor: string }) => (
    <div className={`bans__team bans__team--${teamColor}`}>
        {bannedChampions.map((bannedChampion: Ban) => {
            return (
                <BannedChampion
                    bannedChampion={bannedChampion}
                    style={{ border: `2px solid ${teamColor}` }}
                />
            )
        })}
    </div>
)

export default Bans;