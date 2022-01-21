import React from "react";
import { Match } from "../../../types/Match/Match";
import { CurrentMatchPlayer, EndedMatchPlayer } from "../../../types/Player/Player";
import ChampionImage from "../../ChampionImage/ChampionImage";
import PlayerItems from "../../ItemImage/PlayerItems/PlayerItems";
import PlayerPerks from "../../PerkImage/PlayerPerks/PlayerPerks";
import PlayerKDA from "../../PlayerKDA/PlayerKDA";
import PlayerSummonerSpells from "../../SummonerSpellImage/PlayerSummonerSpells/PlayerSummonerSpells";
import Table from "../../Table/Table";

const MatchRow = ({ match }: { match: Match }): JSX.Element =>
(
    <Table.Row className={match.searchTargetPlayer.isBlueTeam ? "team--blue" : "team--red"}>
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
        <MatchRow.Cell>{match.searchTargetPlayer.killParticipation}%</MatchRow.Cell>
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
        <MatchRow.Cell>
            <MatchRow.Teams>
                <MatchRow.Team teamPlayers={match.blueTeam.players} />
                <MatchRow.Team teamPlayers={match.redTeam.players} />
            </MatchRow.Teams>
        </MatchRow.Cell>
        <MatchRow.Cell>
            <PlayerItems items={match.searchTargetPlayer.items} />
        </MatchRow.Cell>
        <MatchRow.Cell>
            <p className="player-growth">레벨 {match.searchTargetPlayer.championLevel}</p>
            <p className="player-growth">골드 {match.searchTargetPlayer.goldEarned}</p>
            <p className="player-growth">CS {match.searchTargetPlayer.cs}</p>
        </MatchRow.Cell>
    </Table.Row>
)


MatchRow.Cell = ({ children, className = "" }: { children: React.ReactNode, className?: string }): JSX.Element => (
    <Table.Cell
        className={"matches-table__cell " + className}
    >
        {children}
    </Table.Cell>
)

MatchRow.Teams = (
    { children }
        : { children?: React.ReactNode }
): JSX.Element => {
    return (
        <div className="matches-table__teams">
            {children}
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

export default MatchRow;