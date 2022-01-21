import React from "react";
import { Match } from "../../../types/Match/Match";
import { EndedMatchPlayer } from "../../../types/Player/Player";
import { EndedMatchTeam } from "../../../types/Team/Team";
import ChampionImage from "../../ChampionImage/ChampionImage";
import PlayerItems from "../../ItemImage/PlayerItems/PlayerItems";
import PlayerPerks from "../../PerkImage/PlayerPerks/PlayerPerks";
import PlayerSummonerSpells from "../../SummonerSpellImage/PlayerSummonerSpells/PlayerSummonerSpells";
import Table from "../../Table/Table";

const MatchRow = ({ match }: { match: Match }): JSX.Element =>
(
    <Table.Row>
        <MatchRow.Cell>{match.searchTargetPlayer.win ? "승" : "패"}</MatchRow.Cell>
        <MatchRow.Cell>
            <ChampionImage
                champion={match.searchTargetPlayer.champion}
                className="player__champion-image"
            />
        </MatchRow.Cell>
        <MatchRow.Cell>{match.gameMode}</MatchRow.Cell>
        <MatchRow.Cell>{match.searchTargetPlayer.kda}</MatchRow.Cell>
        <MatchRow.Cell>{match.searchTargetPlayer.killParticipation}%</MatchRow.Cell>
        <MatchRow.Cell>
            <PlayerSummonerSpells summonerSpells={match.searchTargetPlayer.summonerSpells} />
        </MatchRow.Cell>
        <MatchRow.Cell>
            <PlayerPerks
                mainPerks={match.searchTargetPlayer.mainPerks}
                subPerks={match.searchTargetPlayer.subPerks}
            />
        </MatchRow.Cell>
        <MatchRow.Cell>

        </MatchRow.Cell>
        <MatchRow.Cell>
            <PlayerItems items={match.searchTargetPlayer.items} />
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
    { children, participants }
        : { children?: React.ReactNode, participants: EndedMatchPlayer[] }
): JSX.Element => {
    // const blueTeamPlayers = 
    // const redTeamPlayers = 
    return (
        <div className="matches-table">
            {children}
        </div>
    )
}

export default MatchRow;