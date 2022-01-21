import React from "react";
import { Match } from "../../../types/Match/Match";
import ChampionImage from "../../ChampionImage/ChampionImage";
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
        {/* <MatchRow.Cell>
            <
        </MatchRow.Cell> */}
    </Table.Row>
)


MatchRow.Cell = ({ children, className = "" }: { children: React.ReactNode, className?: string }): JSX.Element => (
    <Table.Cell
        className={"match-table__cell " + className}
    >
        {children}
    </Table.Cell>
)

export default MatchRow;