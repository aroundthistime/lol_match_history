import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Match } from "../../types/Match/Match";
import { CurrentMatchPlayer } from "../../types/Player/Player";
import { StyleObject } from "../../types/StyleObject";
import { getPathToHistories } from "../../utils/getPaths";
import { seperateParticipants } from "../../utils/matchHandlers";
import { getHourMinuteSecondString } from "../../utils/stringFormatter";
import Bans from "../Bans/Bans";
import ChampionImage from "../ChampionImage/ChampionImage";
import PlayerPerks from "../PerkImage/PlayerPerks/PlayerPerks";
import PlayerSummonerSpells from "../SummonerSpellImage/PlayerSummonerSpells/PlayerSummonerSpells";

const CurrentMatch = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <section className="current-match" >
            {children}
        </section>
    )
}

CurrentMatch.Summary = ({ texts }: { texts: string[] }) => (
    <div className="current-match__summary">
        {texts.map((text: string): JSX.Element => (
            <span className="current-match__summary-text">{text}</span>
        ))}
    </div>
)

CurrentMatch.Teams = (
    { blueTeamPlayers, redTeamPlayers }
        : { blueTeamPlayers: CurrentMatchPlayer[], redTeamPlayers: CurrentMatchPlayer[] }
): JSX.Element => (
    <div className="current-match__teams">
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
        <ChampionImage champion={player.champion} className="player__champion-image" />
        <PlayerSummonerSpells
            summonerSpells={player.summonerSpells}
        />
        <div className="player__text-infos">
            <Link to={getPathToHistories(player.name)}>
                <p className="player__text-info player__player-name text--bold">{player.name}</p>
            </Link>
            <p className="player__text-info player__champion-name">{player.champion.name}</p>
        </div>
        <PlayerPerks
            mainPerks={player.mainPerks}
            subPerks={player.subPerks}
        />
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
                <CurrentMatch.Teams
                    blueTeamPlayers={blueTeamPlayers}
                    redTeamPlayers={redTeamPlayers}
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