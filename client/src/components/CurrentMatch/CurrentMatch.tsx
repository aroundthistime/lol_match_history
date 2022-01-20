import React, { useEffect, useState } from "react";
import { Champion } from "../../types/Champion/Champion";
import { Match } from "../../types/Match/Match";
import { CurrentMatchPlayer } from "../../types/Player/Player";
import { StyleObject } from "../../types/StyleObject";
import { SummonerSpell } from "../../types/SummonerSpell/SummonerSpell";
import { getCorePerkImage, getPerkStyleImage, seperateParticipants } from "../../utils/matchHandlers";
import { getHourMinuteSecondString } from "../../utils/stringFormatter";
import Bans from "../Bans/Bans";

const CurrentMatch = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        < div className="current-match" >
            {children}
        </div>
    )
}

CurrentMatch.Summary = ({ texts }: { texts: string[] }) => (
    <div className="current-match__summary">
        {texts.map((text: string): JSX.Element => (
            <span className="current-match__summary-text">{text}</span>
        ))}
    </div>
)

CurrentMatch.Team = ({ children, className = "", players, teamColor }: { children?: React.ReactNode, className?: string, players: CurrentMatchPlayer[], teamColor: string }): JSX.Element => (
    <ul className={"current-match__team " + className}>
        {players.map((player: CurrentMatchPlayer) => (
            <CurrentMatch.Player
                className={`player--${teamColor}`}
                player={player}
            />
        ))}
        {children}
    </ul>
)
CurrentMatch.Player = ({ player, className = "", style = {} }: { player: CurrentMatchPlayer, className?: string, style?: StyleObject }): JSX.Element => (
    <li className={"current-match__player player " + className} style={{ ...style }}>
        <img className="player__champion-image" src={player.champion.image} alt={player.champion.name} />
        <div className="player__summonerspells">
            {player.summonerSpells.map((summmonerSpell: SummonerSpell) => (
                <img className="player__summonerspell" src={summmonerSpell.image} alt={summmonerSpell.name} />
            ))}
        </div>
        <div className="player__text-infos">
            <p className="player__text-info player__player-name text--bold">{player.name}</p>
            <p className="player__text-info player__champion-name">{player.champion.name}</p>
        </div>
        <div className="player__perks">
            <img className="player__perk player__perk--main" src={getCorePerkImage(player.mainPerks)} />
            <img className="player__perk player__perk--sub" src={getPerkStyleImage(player.subPerks)} />
        </div>
    </li>
)

CurrentMatch.Footer = ({ children }: { children: React.ReactElement }): JSX.Element => (
    <div className="current-match__footer">
        {children}
    </div>
)

export default ({ match }: { match: Match }): JSX.Element => {
    const [blueTeamPlayers, setBlueTeamPlayers] = useState([]);
    const [redTeamPlayers, setRedTeamPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const getCurrentGameDurationStr = (startTime: number): string => {
        const currentDate = new Date();
        const gameDurationInMilliseconds: number = currentDate.getTime() - startTime;
        return getHourMinuteSecondString(gameDurationInMilliseconds)
    }
    const seperateCurrentGamePlayersByTeam = async () => {
        const [blueTeam, redTeam] = await seperateParticipants(match.participants);
        setBlueTeamPlayers(blueTeam);
        setRedTeamPlayers(redTeam);
        setLoading(false);
    }
    useEffect(() => {
        seperateCurrentGamePlayersByTeam();
    }, [])
    return (
        <CurrentMatch>
            <CurrentMatch.Summary texts={[match.gameMode, getCurrentGameDurationStr(match.gameStartTime)]} />
            <div className="current-match__body">
                <CurrentMatch.Team
                    className="team--blue"
                    players={blueTeamPlayers}
                    teamColor="blue"
                />
                <CurrentMatch.Team
                    className="team--red"
                    players={redTeamPlayers}
                    teamColor="red"
                />
            </div>
            <CurrentMatch.Footer>
                {match.blueTeam.bans && ( //밴이 존재하는 게임이면 밴목록 추가
                    <Bans
                        blueTeamBans={match.blueTeam.bans}
                        redTeamBans={match.redTeam.bans}
                    />
                )}
            </CurrentMatch.Footer>
        </CurrentMatch>
    )
}