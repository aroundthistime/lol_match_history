import React, { useState } from "react";
import { Match } from "../../../types/Match/Match";
import { CurrentMatchPlayer, EndedMatchPlayer } from "../../../types/Player/Player";
import { getHourMinuteSecondStringFromSeconds, getLargestUnitOfTimeDiffFromCurrent } from "../../../utils/timeHandlers";
import ChampionImage from "../../ChampionImage/ChampionImage";
import CaretIcon from "../../Icons/Caret/CaretIcon";
import PlayerItems from "../../ItemImage/PlayerItems/PlayerItems";
import PlayerPerks from "../../PerkImage/PlayerPerks/PlayerPerks";
import PlayerKDA from "../../PlayerKDA/PlayerKDA";
import PlayerSummonerSpells from "../../SummonerSpellImage/PlayerSummonerSpells/PlayerSummonerSpells";
import Table from "../../Table/Table";

const MatchRow = ({ match }: { match: Match }): JSX.Element => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const toggleShowDetails = (event: React.MouseEvent<HTMLElement>): void => {
        setShowDetails(prev => !prev)
    }
    return (
        <>
            <Table.Row className={match.searchTargetPlayer.win ? "match--win" : "match--lose"}>
                <MatchRow.Cell className="text--bold">{match.searchTargetPlayer.win ? "승" : "패"}</MatchRow.Cell>
                <MatchRow.Cell>
                    <ChampionImage
                        champion={match.searchTargetPlayer.champion}
                        className="player__champion-image"
                    />
                </MatchRow.Cell>
                <MatchRow.Cell>{match.gameMode}</MatchRow.Cell>
                <MatchRow.Cell>
                    <PlayerKDA
                        kills={match.searchTargetPlayer.kills}
                        deaths={match.searchTargetPlayer.deaths}
                        assists={match.searchTargetPlayer.assists}
                        kda={match.searchTargetPlayer.kda}
                    />
                </MatchRow.Cell>
                <MatchRow.Cell className="mobile-hidden tablet-hidden">
                    {match.searchTargetPlayer.killParticipation}%
                </MatchRow.Cell>
                <MatchRow.Cell>
                    <PlayerSummonerSpells summonerSpells={match.searchTargetPlayer.summonerSpells} />
                </MatchRow.Cell>
                <MatchRow.Cell>
                    <PlayerPerks
                        mainPerks={match.searchTargetPlayer.mainPerks}
                        subPerks={match.searchTargetPlayer.subPerks}
                        style={{ "flex-direction": "column", "align-items": "center" }}
                    />
                </MatchRow.Cell>
                <MatchRow.Cell className="mobile-hidden">
                    <MatchRow.Teams
                        blueTeamPlayers={match.blueTeam.players}
                        redTeamPlayers={match.redTeam.players}
                    />
                </MatchRow.Cell>
                <MatchRow.Cell>
                    <PlayerItems items={match.searchTargetPlayer.items} />
                </MatchRow.Cell>
                <MatchRow.Cell className="mobile-hidden tablet-hidden">
                    <p className="player-growth">레벨 {match.searchTargetPlayer.championLevel}</p>
                    <p className="player-growth">골드 {match.searchTargetPlayer.goldEarned}</p>
                    <p className="player-growth">CS {match.searchTargetPlayer.cs}</p>
                </MatchRow.Cell>
                <MatchRow.Cell>
                    <p>{getHourMinuteSecondStringFromSeconds(match.gameLength)}</p>
                    <p>{getLargestUnitOfTimeDiffFromCurrent(match.gameStartTime)} 전</p>
                </MatchRow.Cell>
                <MatchRow.Cell>
                    <MatchRow.DetailsToggleBtn
                        showDetails={showDetails}
                        onClick={toggleShowDetails}
                    />
                </MatchRow.Cell>
            </Table.Row>
            {showDetails && <Table.Row><span>1</span></Table.Row>}
        </>
    )
}


MatchRow.Cell = ({ children, className = "" }: { children: React.ReactNode, className?: string }): JSX.Element => (
    <Table.Cell
        className={"matches-table__cell " + className}
    >
        {children}
    </Table.Cell>
)

MatchRow.Teams = (
    { blueTeamPlayers, redTeamPlayers }
        : { blueTeamPlayers: EndedMatchPlayer[] | CurrentMatchPlayer[], redTeamPlayers: EndedMatchPlayer[] | CurrentMatchPlayer[] }
): JSX.Element => {
    return (
        <div className="matches-table__teams">
            <MatchRow.Team teamPlayers={blueTeamPlayers} />
            <MatchRow.Team teamPlayers={redTeamPlayers} />
        </div>
    )
}

MatchRow.Team = (
    { teamPlayers }: { teamPlayers: EndedMatchPlayer[] | CurrentMatchPlayer[] }
): JSX.Element => (
    <div className="matches-table__team">
        {teamPlayers.map(teamPlayer => (
            <ChampionImage
                champion={teamPlayer.champion}
                className="player__champion-image icon--small"
            />
        ))}
    </div>
)

MatchRow.DetailsToggleBtn = (
    { onClick, showDetails }: { onClick: React.MouseEventHandler<HTMLDivElement>, showDetails: boolean }
): JSX.Element => (
    <div onClick={onClick}>
        <CaretIcon
            direction={showDetails ? "up" : "down"}
            className={"match__toggle-btn"}
            style={{ cursor: "pointer" }}
        />
    </div>
)

export default MatchRow;